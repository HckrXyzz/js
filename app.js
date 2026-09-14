const app = document.getElementById("app");
app.className = "min-h-screen bg-gray-800 text-gray-200 flex flex-col relative";

// 1. Header Setup
const header = document.createElement("header");
header.id = "header";
header.className = "fixed top-0 left-0 right-0 h-16 z-40 border-b border-slate-200/50 dark:border-slate-800/50 shadow-sm backdrop-blur bg-slate-900";
header.innerHTML = `
  <div class="px-4 sm:px-6 lg:px-8 h-full flex items-center justify-between">
    <div class="flex items-center gap-4">
      <button id="sidebar-toggle" class="p-2 rounded-lg hover:bg-slate-800 transition-all active:scale-95 text-slate-200" aria-label="Toggle Sidebar">
        <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"></path>
        </svg>
      </button>
      <span class="text-xl font-bold gradient-text">HcKrXyZz</span>
    </div>
  </div>`;

// 2. Sidebar Setup
const aside = document.createElement("aside");
aside.id = "sidebar";
aside.className = "fixed top-0 left-0 h-full w-72 bg-slate-900/95 backdrop-blur-md border-r border-slate-800/70 z-50 transform -translate-x-full lg:translate-x-0 transition-transform duration-300 ease-in-out shadow-xl";
aside.innerHTML = `
  <div class="flex flex-col h-full">
    <div class="flex items-center justify-between p-6 border-b border-slate-800/70">
      <div class="flex items-center gap-2">
        <div class="w-8 h-8 gradient-bg rounded-lg flex items-center justify-center shadow-lg shadow-indigo-500/25">
          <svg class="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path>
          </svg>
        </div>
        <span class="text-xl font-bold gradient-text">Nexus</span>
      </div>
      <button id="sidebar-close" class="p-2 rounded-lg hover:bg-slate-800 transition-all duration-200 lg:hidden" aria-label="Close sidebar">
        <svg class="w-5 h-5 text-slate-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path>
        </svg>
      </button>
    </div>

    <nav class="flex-1 overflow-y-auto p-4 space-y-1">
      <p class="px-3 text-xs font-semibold text-slate-400 uppercase tracking-wider mb-3">Main</p>
      <a href="#dashboard" class="nav-link active flex items-center gap-3 px-3 py-2.5 rounded-lg bg-indigo-950/50 text-indigo-400 font-medium transition-all">Dashboard</a>
      <a href="#analytics" class="nav-link flex items-center gap-3 px-3 py-2.5 rounded-lg hover:bg-slate-800 text-slate-300 transition-all">Analytics</a>
      <a href="#projects" class="nav-link flex items-center gap-3 px-3 py-2.5 rounded-lg hover:bg-slate-800 text-slate-300 transition-all">Projects</a>
      <a href="#team" class="nav-link flex items-center gap-3 px-3 py-2.5 rounded-lg hover:bg-slate-800 text-slate-300 transition-all">Team</a>
    </nav>

    <div class="p-4 border-t border-slate-800/70">
      <div class="bg-indigo-500/10 rounded-xl p-4 border border-indigo-500/20">
        <span class="text-sm font-semibold text-indigo-400 block mb-1">Pro Plan</span>
        <p class="text-xs text-slate-400 mb-3">Upgrade to unlock all features</p>
        <button class="w-full bg-indigo-600 hover:bg-indigo-500 text-white text-sm py-2 rounded-lg font-medium transition-all shadow-md">
          Upgrade Now
        </button>
      </div>
    </div>
  </div>`;

// 3. Main Content Setup
const main = document.createElement("main");
main.className = "pt-20 pb-20 lg:ml-72 min-h-screen bg-gray-800 p-4 transition-all";

const dashboard = document.createElement("div");
dashboard.id = "dashboard";
dashboard.className = "p-4 sm:p-6 lg:p-8 max-w-7xl mx-auto";
dashboard.innerHTML = `
  <div class="mb-8">
    <div class="relative overflow-hidden rounded-2xl bg-gradient-to-r from-indigo-900 to-slate-900 p-8 text-white shadow-2xl">
      <h1 class="text-3xl font-bold mb-2">Welcome to Nexus</h1>
      <p class="text-indigo-200 mb-6 max-w-2xl">Build, manage, and scale your SaaS platform.</p>
      <div class="flex gap-3">
        <button class="bg-white text-indigo-600 hover:bg-indigo-50 px-6 py-2.5 rounded-lg font-semibold transition-all">Get Started</button>
        <button class="bg-white/10 hover:bg-white/20 border border-white/20 px-6 py-2.5 rounded-lg font-semibold transition-all">Watch Demo</button>
      </div>
    </div>
  </div>`;

main.appendChild(dashboard);

// 4. Footer Setup
const footer = document.createElement("footer");
footer.id = "footer";
footer.className = "fixed bottom-0 left-0 right-0 h-12 bg-slate-900 border-t border-slate-800 z-30 flex items-center justify-center px-4 lg:ml-72";
footer.innerHTML = `
  <div class="text-center text-xs text-slate-400">
    <span class="font-mono">🔐 </span> · <span class="font-mono"></span>
  </div>`;

// 5. Render to DOM
app.appendChild(header);
app.appendChild(aside);
app.appendChild(main);
app.appendChild(footer);

// 6. Interactive Sidebar Toggling Logic
const sidebarToggleBtn = document.getElementById("sidebar-toggle");
const sidebarCloseBtn = document.getElementById("sidebar-close");

function toggleSidebar() {
  aside.classList.toggle("-translate-x-full");
}

sidebarToggleBtn?.addEventListener("click", toggleSidebar);
sidebarCloseBtn?.addEventListener("click", toggleSidebar);
