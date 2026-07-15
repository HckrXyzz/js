      // Sidebar elements
        const sidebarPanel = document.getElementById('sidebarPanel');
        const sidebarOverlay = document.getElementById('sidebarOverlay');
        const menuToggleBtn = document.getElementById('menuToggleBtn');
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

        menuToggleBtn.addEventListener('click', openSidebar);
        closeSidebarBtn.addEventListener('click', closeSidebar);
        sidebarOverlay.addEventListener('click', closeSidebar);

        // Close sidebar on Escape key
        document.addEventListener('keydown', (e) => {
            if (e.key === 'Escape' && sidebarPanel.classList.contains('open')) {
                closeSidebar();
            }
        });
