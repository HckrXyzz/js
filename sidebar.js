// ==================================================================
// AUTO-CREATE SIDEBAR ELEMENTS
// ==================================================================

// Create sidebar panel
const sidebarPanel = document.createElement('div');
sidebarPanel.id = 'sidebarPanel';
sidebarPanel.className = 'sidebar-panel';
sidebarPanel.innerHTML = `
    <div class="sidebar-header">
        <button id="closeSidebarBtn" class="close-sidebar-btn">✕</button>
    </div>
    <nav class="sidebar-nav">
        <ul>
            <li><a href="#home">Home</a></li>
            <li><a href="#about">About</a></li>
            <li><a href="#services">Services</a></li>
            <li><a href="#contact">Contact</a></li>
        </ul>
    </nav>
`;

// Create sidebar overlay
const sidebarOverlay = document.createElement('div');
sidebarOverlay.id = 'sidebarOverlay';
sidebarOverlay.className = 'sidebar-overlay hidden opacity-0 pointer-events-none';

// Create menu toggle button
const menuToggleBtn = document.createElement('button');
menuToggleBtn.id = 'menuToggleBtn';
menuToggleBtn.className = 'menu-toggle-btn';
menuToggleBtn.innerHTML = '☰';
menuToggleBtn.setAttribute('aria-label', 'Toggle menu');

// Append elements to DOM
document.body.appendChild(sidebarPanel);
document.body.appendChild(sidebarOverlay);
document.body.insertBefore(menuToggleBtn, document.body.firstChild);

// Get reference to close button after adding to DOM
const closeSidebarBtn = document.getElementById('closeSidebarBtn');

// ==================================================================
// SIDEBAR CONTROLS
// ==================================================================
function openSidebar() {
    sidebarPanel.classList.add('open');
    sidebarOverlay.classList.remove('hidden', 'opacity-0', 'pointer-events-none');
    sidebarOverlay.classList.add('opacity-100');
    document.body.style.overflow = 'hidden';
}

function closeSidebar() {
    sidebarPanel.classList.remove('open');
    sidebarOverlay.classList.add('opacity-0');
    sidebarOverlay.classList.add('pointer-events-none');
    setTimeout(() => {
        sidebarOverlay.classList.add('hidden');
        document.body.style.overflow = '';
    }, 300);
}

// ==================================================================
// EVENT LISTENERS
// ==================================================================
menuToggleBtn.addEventListener('click', openSidebar);
closeSidebarBtn.addEventListener('click', closeSidebar);
sidebarOverlay.addEventListener('click', closeSidebar);

// Close sidebar on Escape key
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && sidebarPanel.classList.contains('open')) {
        closeSidebar();
    }
});

// ==================================================================
// AUTO-CREATE STYLES
// ==================================================================
const styleSheet = document.createElement('style');
styleSheet.textContent = `
    :root {
        --sidebar-width: 250px;
        --sidebar-bg: #2c3e50;
        --sidebar-text: #ecf0f1;
        --overlay-bg: rgba(0, 0, 0, 0.5);
        --transition-speed: 0.3s;
    }

    .sidebar-panel {
        position: fixed;
        left: -var(--sidebar-width);
        top: 0;
        width: var(--sidebar-width);
        height: 100vh;
        background-color: var(--sidebar-bg);
        color: var(--sidebar-text);
        z-index: 999;
        transition: left var(--transition-speed) ease-in-out;
        overflow-y: auto;
        box-shadow: 2px 0 10px rgba(0, 0, 0, 0.3);
    }

    .sidebar-panel.open {
        left: 0;
    }

    .sidebar-header {
        padding: 20px;
        border-bottom: 1px solid rgba(255, 255, 255, 0.1);
        display: flex;
        justify-content: flex-end;
    }

    .close-sidebar-btn {
        background: none;
        border: none;
        color: var(--sidebar-text);
        font-size: 24px;
        cursor: pointer;
        padding: 0;
        width: 30px;
        height: 30px;
        display: flex;
        align-items: center;
        justify-content: center;
        transition: opacity 0.2s;
    }

    .close-sidebar-btn:hover {
        opacity: 0.7;
    }

    .sidebar-nav ul {
        list-style: none;
        padding: 0;
        margin: 0;
    }

    .sidebar-nav li {
        margin: 0;
    }

    .sidebar-nav a {
        display: block;
        padding: 15px 20px;
        color: var(--sidebar-text);
        text-decoration: none;
        transition: background-color 0.2s;
        border-left: 3px solid transparent;
    }

    .sidebar-nav a:hover {
        background-color: rgba(255, 255, 255, 0.1);
        border-left-color: #3498db;
    }

    .sidebar-overlay {
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background-color: var(--overlay-bg);
        z-index: 998;
        transition: opacity var(--transition-speed) ease-in-out;
    }

    .sidebar-overlay.hidden {
        display: none;
    }

    .sidebar-overlay.opacity-0 {
        opacity: 0;
    }

    .sidebar-overlay.opacity-100 {
        opacity: 1;
    }

    .sidebar-overlay.pointer-events-none {
        pointer-events: none;
    }

    .menu-toggle-btn {
        position: fixed;
        top: 20px;
        left: 20px;
        z-index: 1000;
        background-color: #2c3e50;
        color: white;
        border: none;
        font-size: 24px;
        padding: 10px 15px;
        cursor: pointer;
        border-radius: 4px;
        transition: background-color 0.2s;
    }

    .menu-toggle-btn:hover {
        background-color: #34495e;
    }
`;

document.head.appendChild(styleSheet);
