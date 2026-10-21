(function () {
  const STORAGE_KEY = "tailwind_app_dark_notes_history";

  // 1. Get notes from localStorage
  function getNotes() {
    return JSON.parse(localStorage.getItem(STORAGE_KEY)) || [];
  }

  // 2. Save notes to localStorage
  function saveNotes(notes) {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(notes));
  }

  // Helper to safely format text and prevent HTML injection
  function escapeHTML(str) {
    return str.replace(/[&<>'"]/g, (tag) =>
      ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", "'": "&#39;", '"': "&quot;" }[tag] || tag)
    );
  }

  // 3. Inject HTML UI directly into the body with Dark Theme & Attractive Button
  function injectNoteUI() {
    // Create Ultra-Attractive Floating Action Button (FAB)
    const fab = document.createElement("button");
    fab.id = "app-note-fab";
    fab.className =
      "fixed bottom-6 right-6 z-50 flex items-center gap-2.5 bg-gradient-to-r from-violet-600 to-indigo-600 hover:from-violet-500 hover:to-indigo-500 text-white font-medium px-5 py-3.5 rounded-full shadow-xl shadow-indigo-950/30 hover:shadow-indigo-500/30 transition-all duration-300 transform hover:scale-105 active:scale-95 cursor-pointer focus:outline-none focus:ring-2 focus:ring-violet-400";
    fab.innerHTML = `
      <svg class="w-5 h-5 text-violet-200 transition-transform group-hover:rotate-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"></path>
      </svg>
      <span class="tracking-wide">Quick Notes</span>
    `;

    // Create Dark Theme Modal HTML
    const modalWrapper = document.createElement("div");
    modalWrapper.id = "app-note-modal-wrapper";
    modalWrapper.className = "hidden fixed inset-0 z-50 overflow-y-auto";
    modalWrapper.innerHTML = `
      <!-- Dark Backdrop -->
      <div id="app-note-backdrop" class="fixed inset-0 bg-black/70 backdrop-blur-sm transition-opacity"></div>

      <!-- Modal Dialog Container -->
      <div class="flex min-h-full items-center justify-center p-4">
        <div class="relative w-full max-w-lg transform overflow-hidden rounded-3xl bg-gray-900 border border-gray-800 p-6 text-left align-middle shadow-2xl shadow-black/50 transition-all text-gray-100">
          
          <!-- Header -->
          <div class="flex items-center justify-between pb-4 border-b border-gray-800">
            <h3 class="text-lg font-semibold text-white flex items-center gap-2.5">
              <span class="p-2 rounded-xl bg-violet-500/10 border border-violet-500/20 text-violet-400">
                <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"></path>
                </svg>
              </span>
              Note Center
            </h3>
            <button id="app-note-close" class="text-gray-400 hover:text-white p-2 rounded-xl hover:bg-gray-800 transition-colors">
              <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path>
              </svg>
            </button>
          </div>

          <!-- Add Note Section -->
          <div class="mt-4">
            <textarea id="app-note-input" rows="3" placeholder="What's on your mind?..." class="w-full rounded-2xl bg-gray-800/60 border border-gray-700/60 p-3.5 text-sm text-gray-100 placeholder-gray-500 focus:border-violet-500 focus:bg-gray-800 focus:outline-none focus:ring-1 focus:ring-violet-500 resize-none transition-all"></textarea>
            <div class="mt-2.5 flex justify-end">
              <button id="app-note-save" class="bg-gradient-to-r from-violet-600 to-indigo-600 hover:from-violet-500 hover:to-indigo-500 text-white font-medium text-xs px-5 py-2.5 rounded-xl transition-all shadow-md shadow-violet-950/20 active:scale-95 cursor-pointer">
                Save Note
              </button>
            </div>
          </div>

          <!-- History Section -->
          <div class="mt-6">
            <h4 class="text-xs font-semibold uppercase tracking-wider text-gray-400 mb-3 px-1">Note History</h4>
            <div id="app-note-history" class="max-h-64 overflow-y-auto space-y-3 pr-1 scrollbar-thin scrollbar-thumb-gray-700">
              <!-- Dynamically populated -->
            </div>
          </div>

        </div>
      </div>
    `;

    document.body.appendChild(fab);
    document.body.appendChild(modalWrapper);
  }

  // 4. Render stored notes into dark theme history list
  function renderHistory() {
    const historyContainer = document.getElementById("app-note-history");
    const notes = getNotes();

    if (notes.length === 0) {
      historyContainer.innerHTML = `<p class="text-sm text-gray-500 italic text-center py-6 bg-gray-800/30 rounded-2xl border border-gray-800">No notes saved yet. Start typing above!</p>`;
      return;
    }

    historyContainer.innerHTML = notes
      .map(
        (note, index) => `
        <div class="p-3.5 bg-gray-800/40 border border-gray-800 rounded-2xl relative group transition-all hover:bg-gray-800/80 hover:border-gray-700">
          <p class="text-sm text-gray-200 whitespace-pre-wrap leading-relaxed">${escapeHTML(note.text)}</p>
          <div class="mt-2.5 flex items-center justify-between text-xs text-gray-500 border-t border-gray-800/80 pt-2">
            <span>${note.date}</span>
            <button data-index="${index}" class="app-note-delete text-rose-400 hover:text-rose-300 font-medium opacity-70 hover:opacity-100 transition-opacity">
              Delete
            </button>
          </div>
        </div>
      `
      )
      .join("");

    // Attach click listener for delete buttons
    historyContainer.querySelectorAll(".app-note-delete").forEach((btn) => {
      btn.addEventListener("click", function () {
        const index = parseInt(this.getAttribute("data-index"), 10);
        deleteNote(index);
      });
    });
  }

  // 5. Add new note
  function addNote() {
    const input = document.getElementById("app-note-input");
    const text = input.value.trim();

    if (!text) return;

    const notes = getNotes();
    const newNote = {
      text: text,
      date: new Date().toLocaleDateString(undefined, {
        month: "short",
        day: "numeric",
        year: "numeric",
        hour: "2-digit",
        minute: "2-digit",
      }),
    };

    notes.unshift(newNote);
    saveNotes(notes);
    input.value = "";
    renderHistory();
  }

  // 6. Delete a note
  function deleteNote(index) {
    const notes = getNotes();
    notes.splice(index, 1);
    saveNotes(notes);
    renderHistory();
  }

  // 7. Toggle Modal Visibility
  function toggleModal(show) {
    const modal = document.getElementById("app-note-modal-wrapper");
    if (show) {
      modal.classList.remove("hidden");
      renderHistory();
      document.getElementById("app-note-input").focus();
    } else {
      modal.classList.add("hidden");
    }
  }

  // 8. Setup all Event Listeners
  function initListeners() {
    document.getElementById("app-note-fab").addEventListener("click", () => toggleModal(true));
    document.getElementById("app-note-close").addEventListener("click", () => toggleModal(false));
    document.getElementById("app-note-backdrop").addEventListener("click", () => toggleModal(false));
    document.getElementById("app-note-save").addEventListener("click", addNote);

    // ESC Key to close modal
    document.addEventListener("keydown", (e) => {
      if (e.key === "Escape") toggleModal(false);
    });
  }

  // Initialize once DOM is fully loaded
  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", () => {
      injectNoteUI();
      initListeners();
    });
  } else {
    injectNoteUI();
    initListeners();
  }
})();
