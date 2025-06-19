document.addEventListener('DOMContentLoaded', function() {
    // Mobile navigation elements
    const menuToggle = document.querySelector('.menu-toggle');
    const mobileNavOverlay = document.querySelector('.mobile-nav-overlay');
    const mobileNavItems = document.querySelectorAll('.mobile-nav-item a');
    const body = document.body;
    
    // Check if elements exist before adding event listeners
    if (menuToggle && mobileNavOverlay) {
        // Toggle mobile menu
        menuToggle.addEventListener('click', function(e) {
            e.stopPropagation();
            const isExpanded = this.getAttribute('aria-expanded') === 'true' || false;
            this.setAttribute('aria-expanded', !isExpanded);
            mobileNavOverlay.classList.toggle('active');
            body.style.overflow = !isExpanded ? 'hidden' : '';
            
            // Add/remove active class for animation
            if (!isExpanded) {
                this.classList.add('active');
            } else {
                this.classList.remove('active');
            }
        });

        // Close menu when clicking on a nav item
        mobileNavItems.forEach(item => {
            item.addEventListener('click', function() {
                menuToggle.setAttribute('aria-expanded', 'false');
                menuToggle.classList.remove('active');
                mobileNavOverlay.classList.remove('active');
                body.style.overflow = '';
            });
        });

        // Close menu when clicking outside
        document.addEventListener('click', function(e) {
            if (!mobileNavOverlay.contains(e.target) && !menuToggle.contains(e.target)) {
                menuToggle.setAttribute('aria-expanded', 'false');
                menuToggle.classList.remove('active');
                mobileNavOverlay.classList.remove('active');
                body.style.overflow = '';
            }
        });

        // Close menu with Escape key
        document.addEventListener('keydown', function(e) {
            if (e.key === 'Escape' && mobileNavOverlay.classList.contains('active')) {
                menuToggle.setAttribute('aria-expanded', 'false');
                menuToggle.classList.remove('active');
                mobileNavOverlay.classList.remove('active');
                body.style.overflow = '';
            }
        });
    }


    // Update active link based on current page
    function updateActiveLink() {
        const currentPath = window.location.pathname.split('/').pop() || 'index.html';
        
        // Remove active class from all links
        document.querySelectorAll('.mobile-nav-item a').forEach(link => {
            link.classList.remove('active');
            link.removeAttribute('aria-current');
        });
        
        // Add active class to current page link
        const currentLink = document.querySelector(`.mobile-nav-item a[href="${currentPath}"]`);
        if (currentLink) {
            currentLink.classList.add('active');
            currentLink.setAttribute('aria-current', 'page');
        } else if (currentPath === '' || currentPath === 'index.html') {
            // Handle home link
            const homeLink = document.querySelector('.mobile-nav-item a[href="index.html"]');
            if (homeLink) {
                homeLink.classList.add('active');
                homeLink.setAttribute('aria-current', 'page');
            }
        }
    }

    // Initialize active link
    updateActiveLink();

    // Handle window resize events
    function handleResize() {
        // Close mobile menu if window is resized to desktop width
        if (window.innerWidth > 768 && mobileNavOverlay && mobileNavOverlay.classList.contains('active')) {
            menuToggle.setAttribute('aria-expanded', 'false');
            menuToggle.classList.remove('active');
            mobileNavOverlay.classList.remove('active');
            body.style.overflow = '';
        }
    }

    // Add resize event listener
    window.addEventListener('resize', handleResize);

    // Clean up event listeners when the page is unloaded
    window.addEventListener('beforeunload', function() {
        if (menuToggle && mobileNavOverlay) {
            menuToggle.removeEventListener('click', arguments.callee);
            document.removeEventListener('click', arguments.callee);
            document.removeEventListener('keydown', arguments.callee);
            window.removeEventListener('resize', handleResize);
        }
    });
});

// Smooth scroll for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        
        const targetId = this.getAttribute('href');
        if (targetId === '#') return;
        
        const targetElement = document.querySelector(targetId);
        if (targetElement) {
            window.scrollTo({
                top: targetElement.offsetTop - 80, // Adjust for fixed header
                behavior: 'smooth'
            });
            
            // Update URL without page jump
            if (history.pushState) {
                history.pushState(null, null, targetId);
            } else {
                window.location.hash = targetId;
            }
        }
    });
});
