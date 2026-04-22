// Initialize Lucide Icons
lucide.createIcons();

/**
 * Switch between pages
 * @param {string} pageId - The ID of the page to switch to
 */
function switchPage(pageId) {
    // Hide all pages
    const pages = document.querySelectorAll('.page');
    pages.forEach(page => {
        page.classList.remove('active');
    });

    // Show selected page
    const activePage = document.getElementById(pageId);
    if (activePage) {
        activePage.classList.add('active');
    }

    // Update Tab Bar state
    updateTabBar(pageId);
}

/**
 * Update the active state of the Tab Bar items
 * @param {string} pageId - Current page ID
 */
function updateTabBar(pageId) {
    const tabItems = document.querySelectorAll('.tab-item');
    tabItems.forEach(item => {
        item.classList.remove('active');
        
        // Match by pageId (special case for 'home')
        const onclickAttr = item.getAttribute('onclick');
        if (onclickAttr && onclickAttr.includes(`'${pageId}'`)) {
            item.classList.add('active');
        }
    });
}

// Optional: Add some dynamic orbit animation
function animateOrbit() {
    const orbitMenu = document.querySelector('.orbit-menu');
    if (!orbitMenu) return;

    let angle = 0;
    const items = document.querySelectorAll('.menu-item');
    const radius = 150; // Orbit radius

    function step() {
        angle += 0.005;
        items.forEach((item, index) => {
            const offsetAngle = (index / items.length) * Math.PI * 2 + angle;
            const x = Math.cos(offsetAngle) * radius + 187 - 30; // Center X - half item width
            const y = Math.sin(offsetAngle) * radius + 200 - 30; // Center Y - half item height
            item.style.left = `${x}px`;
            item.style.top = `${y}px`;
        });
        requestAnimationFrame(step);
    }
    // Uncomment to enable rotation
    // requestAnimationFrame(step);
}

// Initial setup
document.addEventListener('DOMContentLoaded', () => {
    // animateOrbit(); // Keep static for now to match design
});
