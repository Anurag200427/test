document.addEventListener('DOMContentLoaded', function () {
    const mobileNavToggle = document.querySelector('.mobile-nav-toggle');
    const mobileNavOverlay = document.querySelector('.mobile-nav-overlay');
    const navbar = document.querySelector('.navbar');
    const body = document.body;

    // Toggle mobile menu
    if (mobileNavToggle && mobileNavOverlay) {
        mobileNavToggle.addEventListener('click', () => {
            mobileNavToggle.classList.toggle('active');
            mobileNavOverlay.classList.toggle('active');
            body.style.overflow = mobileNavOverlay.classList.contains('active') ? 'hidden' : '';
        });

        // Close mobile nav when clicking a link
        const mobileNavLinks = document.querySelectorAll('.mobile-nav-item a');
        mobileNavLinks.forEach(link => {
            link.addEventListener('click', () => {
                mobileNavToggle.classList.remove('active');
                mobileNavOverlay.classList.remove('active');
                body.style.overflow = '';
            });
        });

        // Close mobile nav when clicking outside
        mobileNavOverlay.addEventListener('click', (e) => {
            if (e.target === mobileNavOverlay) {
                mobileNavToggle.classList.remove('active');
                mobileNavOverlay.classList.remove('active');
                body.style.overflow = '';
            }
        });

        // Close mobile nav on escape key
        document.addEventListener('keydown', (e) => {
            if (e.key === 'Escape' && mobileNavOverlay.classList.contains('active')) {
                mobileNavToggle.classList.remove('active');
                mobileNavOverlay.classList.remove('active');
                body.style.overflow = '';
            }
        });
    }

    // Handle resize events
    let resizeTimer;
    window.addEventListener('resize', function () {
        clearTimeout(resizeTimer);
        resizeTimer = setTimeout(function () {
            if (window.innerWidth > 768) {
                if (mobileNavToggle) mobileNavToggle.classList.remove('active');
                if (mobileNavOverlay) mobileNavOverlay.classList.remove('active');
                body.style.overflow = '';
            }
        }, 250);
    });

    // Navbar scroll effect
    let lastScroll = 0;
    window.addEventListener('scroll', () => {
        const currentScroll = window.pageYOffset;

        if (currentScroll > 100) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }

        lastScroll = currentScroll;
    });
}); 