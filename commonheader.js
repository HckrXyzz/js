const commonPage = document.getElementById("commonPage");
const commonHeader = document.createElement("header");
commonHeader.id="header" ;
commonHeader.classList="commonHeader fixed top-0 left-0 h-16 right-0 z-50 bg-slate-900 shadow-xl shadow-black backdrop-blur flex justify-between";


const sidebarToggleEl = document.createElement("div");
sidebarToggleEl.classList="flex items-center gap-4";
sidebarToggleEl.innerHTML=`<button id="sidebar-toggle" class="p-2 rounded-lg hover:bg-slate-200/70 dark:hover:bg-slate-800/70 transition-all duration-200 active:scale-95 shadow-sm" aria-label="Toggle sidebar">
            <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"></path>
            </svg></button>`;
commonHeader.append(sidebarToggleEl);
commonPage.append(commonHeader);
