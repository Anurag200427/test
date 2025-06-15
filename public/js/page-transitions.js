// Page Transition Handler
document.addEventListener('DOMContentLoaded', () => {
    // Initialize page transition
    initPageTransitions();
    // Initialize scroll animations
    initScrollAnimations();
});

function initPageTransitions() {
    const transitionElement = document.createElement('div');
    transitionElement.className = 'page-transition';
    document.body.appendChild(transitionElement);

    // Handle all internal navigation links
    document.querySelectorAll('a').forEach(link => {
        // Only handle internal links
        if (link.href && link.href.includes(window.location.origin) && !link.href.includes('#')) {
            link.addEventListener('click', e => {
                e.preventDefault();
                const target = link.href;

                // Start transition animation
                transitionElement.classList.add('active');

                // Wait for animation to complete before navigating
                setTimeout(() => {
                    window.location.href = target;
                }, 500);
            });
        }
    });
}

function initScrollAnimations() {
    // Create Intersection Observer for scroll animations
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate');
                if (entry.target.dataset.delay) {
                    entry.target.style.animationDelay = `${entry.target.dataset.delay}ms`;
                }
            }
        });
    }, {
        threshold: 0.1,
        rootMargin: '0px'
    });

    // Observe all elements with animation classes
    document.querySelectorAll('.fade-in, .slide-in, .scale-in, .rotate-in').forEach(element => {
        observer.observe(element);
    });
}

// Add scroll progress indicator
const scrollProgress = document.createElement('div');
scrollProgress.className = 'scroll-progress';
document.body.appendChild(scrollProgress);

window.addEventListener('scroll', () => {
    const windowHeight = document.documentElement.scrollHeight - window.innerHeight;
    const progress = (window.scrollY / windowHeight) * 100;
    scrollProgress.style.width = `${progress}%`;
}); 