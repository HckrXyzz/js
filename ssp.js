// ==========================================
// 1. SIDEBAR TOGGLE LOGIC
// ==========================================
const sidebar = document.getElementById('sidebar');
const openBtn = document.getElementById('open-sidebar-btn');
const closeBtn = document.getElementById('close-sidebar-btn');
const overlay = document.getElementById('sidebar-overlay');

function toggleSidebar() {
  const isHidden = sidebar.classList.contains('-translate-x-full');
  if (isHidden) {
    sidebar.classList.remove('-translate-x-full');
    overlay.classList.remove('hidden');
  } else {
    sidebar.classList.add('-translate-x-full');
    overlay.classList.add('hidden');
  }
}

openBtn?.addEventListener('click', toggleSidebar);
closeBtn?.addEventListener('click', toggleSidebar);
overlay?.addEventListener('click', toggleSidebar);


// ==========================================
// 2. REFERENCE NUMBER VALIDATOR RULE
// ==========================================
/**
 * Validates Reference Number format
 * @param {string} ref 
 * @returns {boolean}
 */
function isValidReference(ref) {
  if (!ref || typeof ref !== 'string') return false;

  const trimmed = ref.trim();

  // Pattern 1: Standard 10-char Alphanumeric (bKash e.g., DHC1DNOZ9R)
  const isBkash = /^[A-Z0-9]{10}$/i.test(trimmed);

  // Pattern 2: 8-char Alphanumeric starting with 7 (Nagad e.g., 75T2SB71)
  const isNagad = /^7[A-Z0-9]{7}$/i.test(trimmed);

  // Pattern 3: Exactly 10 Digits (Rocket/Bank e.g., 6842658426)
  const isNumeric10 = /^\d{10}$/.test(trimmed);

  // Pattern 4: 10-char starting with 01 (Upay e.g., 01M07QMB0H)
  const isUpay = /^01[A-Z0-9]{8}$/i.test(trimmed);

  return isBkash || isNagad || isNumeric10 || isUpay;
}


// ==========================================
// 3. DATA MANAGEMENT & PAGINATION STATE
// ==========================================
let rawData = [];
let filteredData = [];
let currentPage = 1;
const rowsPerPage = 50;

const tableBody = document.getElementById('table-body');
const searchInput = document.getElementById('table-search');
const pageTitle = document.getElementById('current-page-title');

/**
 * Fetch dataset from JSON URL
 */
async function loadTableData(jsonUrl) {
  try {
    showLoadingState();
    const response = await fetch(jsonUrl);
    const data = await response.json();

    // Skip column header row (index: 1) if present
    rawData = data.filter(item => item.index !== 1);
    filteredData = [...rawData];

    currentPage = 1;
    renderTablePage(currentPage);
    renderPaginationControls();
  } catch (error) {
    console.error('Failed to load JSON data:', error);
    tableBody.innerHTML = `<tr><td colspan="21" class="p-4 text-center text-rose-400">Error loading data. Verify file path.</td></tr>`;
  }
}

/**
 * Render standard 50-row view with optimized string buffers
 */
function renderTablePage(page) {
  const startIndex = (page - 1) * rowsPerPage;
  const endIndex = startIndex + rowsPerPage;
  const pageItems = filteredData.slice(startIndex, endIndex);

  if (pageItems.length === 0) {
    tableBody.innerHTML = `<tr><td colspan="21" class="p-4 text-center text-slate-400">No matching records found</td></tr>`;
    return;
  }

  let htmlBuffer = '';

  for (let i = 0; i < pageItems.length; i++) {
    const item = pageItems[i];
    const row = item.rowData || [];

    // Column 5: Reference No (Array index 3) with Validation Check
    const refNo = (row[3] || '').trim();
    let refNoHtml = '';

    if (isValidReference(refNo)) {
      refNoHtml = `
        <button type="button" 
                onclick="copyToClipboard('${refNo}', this)" 
                class="inline-flex items-center gap-1.5 px-2.5 py-1 rounded bg-slate-700 hover:bg-slate-600 active:bg-blue-600 text-slate-200 hover:text-white transition-all border border-slate-600 text-xs font-mono group" 
                title="Click to copy">
          <span>${refNo}</span>
          <svg class="w-3.5 h-3.5 text-slate-400 group-hover:text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z"/>
          </svg>
        </button>`;
    } else {
      refNoHtml = `<span class="px-2 py-0.5 rounded text-[11px] bg-rose-500/10 text-rose-400 border border-rose-500/20 font-medium">Invalid</span>`;
    }

    // Image Link Formatting (Array index 8)
    const imageLink = row[8] 
      ? `<a href="${row[8]}" target="_blank" rel="noopener noreferrer" class="text-blue-400 hover:underline">View Image</a>` 
      : 'N/A';

    // Status Styling (Array index 14)
    const status = row[14] || '';
    let statusBadge = `<span class="px-2 py-0.5 rounded text-[10px] bg-slate-700 text-slate-300">${status}</span>`;
    if (status === 'DONE') {
      statusBadge = `<span class="px-2 py-0.5 rounded text-[10px] bg-emerald-500/20 text-emerald-400 border border-emerald-500/30">DONE</span>`;
    } else if (status === 'CLAIMED' || status === 'For Review') {
      statusBadge = `<span class="px-2 py-0.5 rounded text-[10px] bg-amber-500/20 text-amber-400 border border-amber-500/30">${status}</span>`;
    }

    htmlBuffer += `
      <tr class="hover:bg-slate-700/40 transition-colors">
        <td class="p-3 font-semibold text-slate-400">${item.index}</td>
        <td class="p-3 font-medium text-white">${row[0] || ''}</td>
        <td class="p-3">${row[1] || ''}</td>
        <td class="p-3">${row[2] || ''}</td>
        <td class="p-3">${refNoHtml}</td>
        <td class="p-3">${row[4] || ''}</td>
        <td class="p-3 text-emerald-400 font-semibold">${row[5] || ''}</td>
        <td class="p-3">${row[6] || ''}</td>
        <td class="p-3">${row[7] || ''}</td>
        <td class="p-3">${imageLink}</td>
        <td class="p-3">${row[9] || ''}</td>
        <td class="p-3">${row[10] || ''}</td>
        <td class="p-3">${row[11] || ''}</td>
        <td class="p-3">${row[12] || ''}</td>
        <td class="p-3">${row[13] || ''}</td>
        <td class="p-3">${statusBadge}</td>
        <td class="p-3">${row[15] || ''}</td>
        <td class="p-3">${row[16] || ''}</td>
        <td class="p-3">${row[17] || ''}</td>
        <td class="p-3">${row[18] || ''}</td>
        <td class="p-3">${row[19] || ''}</td>
      </tr>
    `;
  }

  tableBody.innerHTML = htmlBuffer;
}


// ==========================================
// 4. COPY TO CLIPBOARD FUNCTION
// ==========================================
function copyToClipboard(text, buttonElement) {
  navigator.clipboard.writeText(text).then(() => {
    const originalContent = buttonElement.innerHTML;
    buttonElement.innerHTML = `
      <span class="text-emerald-400 font-bold">Copied!</span>
      <svg class="w-3.5 h-3.5 text-emerald-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"/>
      </svg>
    `;
    buttonElement.classList.add('border-emerald-500');

    setTimeout(() => {
      buttonElement.innerHTML = originalContent;
      buttonElement.classList.remove('border-emerald-500');
    }, 1500);
  }).catch(err => {
    console.error('Copy failed:', err);
  });
}


// ==========================================
// 5. INSTANT SEARCH & FILTER
// ==========================================
searchInput?.addEventListener('input', (e) => {
  const query = e.target.value.toLowerCase().trim();

  if (!query) {
    filteredData = [...rawData];
  } else {
    filteredData = rawData.filter(item => {
      if (item.index.toString().includes(query)) return true;
      return item.rowData.some(val => val && val.toString().toLowerCase().includes(query));
    });
  }

  currentPage = 1;
  renderTablePage(currentPage);
  renderPaginationControls();
});


// ==========================================
// 6. PAGINATION CONTROLS
// ==========================================
function renderPaginationControls() {
  let navContainer = document.getElementById('pagination-nav');
  
  if (!navContainer) {
    navContainer = document.createElement('div');
    navContainer.id = 'pagination-nav';
    navContainer.className = 'flex items-center justify-between px-4 py-3 bg-slate-800 border-t border-slate-700 text-xs text-slate-400';
    tableBody.parentElement.parentElement.after(navContainer);
  }

  const totalPages = Math.ceil(filteredData.length / rowsPerPage) || 1;
  const startItem = filteredData.length === 0 ? 0 : (currentPage - 1) * rowsPerPage + 1;
  const endItem = Math.min(currentPage * rowsPerPage, filteredData.length);

  navContainer.innerHTML = `
    <div>
      Showing <span class="text-white font-medium">${startItem}</span> to <span class="text-white font-medium">${endItem}</span> of <span class="text-white font-medium">${filteredData.length}</span> entries
    </div>
    <div class="flex gap-2">
      <button id="btn-prev" ${currentPage === 1 ? 'disabled' : ''} class="px-3 py-1 rounded bg-slate-700 hover:bg-slate-600 disabled:opacity-40 disabled:cursor-not-allowed text-white transition-colors">Previous</button>
      <span class="px-2 py-1 bg-slate-900 rounded border border-slate-700 text-white font-medium">${currentPage} / ${totalPages}</span>
      <button id="btn-next" ${currentPage >= totalPages ? 'disabled' : ''} class="px-3 py-1 rounded bg-slate-700 hover:bg-slate-600 disabled:opacity-40 disabled:cursor-not-allowed text-white transition-colors">Next</button>
    </div>
  `;

  document.getElementById('btn-prev')?.addEventListener('click', () => {
    if (currentPage > 1) {
      currentPage--;
      renderTablePage(currentPage);
      renderPaginationControls();
    }
  });

  document.getElementById('btn-next')?.addEventListener('click', () => {
    if (currentPage < totalPages) {
      currentPage++;
      renderTablePage(currentPage);
      renderPaginationControls();
    }
  });
}

function showLoadingState() {
  tableBody.innerHTML = `<tr><td colspan="21" class="p-6 text-center text-slate-400">Loading dataset...</td></tr>`;
}


// ==========================================
// 7. INITIALIZATION & SIDEBAR CLICK HANDLERS
// ==========================================
document.querySelectorAll('.fetch-json-btn').forEach(btn => {
  btn.addEventListener('click', (e) => {
    const jsonUrl = btn.getAttribute('data-url');
    const title = btn.querySelector('span:last-child')?.textContent || 'Data View';
    
    if (pageTitle) pageTitle.textContent = title;

    if (window.innerWidth < 1024) {
      toggleSidebar();
    }

    if (jsonUrl) {
      loadTableData(jsonUrl);
    }
  });
});
