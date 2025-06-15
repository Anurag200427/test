// Loading Animation
window.addEventListener('load', () => {
    setTimeout(() => {
        const loader = document.querySelector('.loader-wrapper');
        if (loader) {
            loader.style.opacity = '0';
            loader.style.visibility = 'hidden';
        }

        // Trigger initial animations
        document.querySelectorAll('.fade-in').forEach(element => {
            element.classList.add('visible');
        });
    }, 2000);
});

// Scroll Progress Bar
window.addEventListener('scroll', () => {
    const scrollProgress = document.querySelector('.scroll-progress-bar');
    if (scrollProgress) {
        const scrollPercent = (window.scrollY / (document.documentElement.scrollHeight - window.innerHeight)) * 100;
        scrollProgress.style.width = `${scrollPercent}%`;
    }
});

// Initialize all animations
function initializeAnimations() {
    initScrollAnimations();
    initParallaxEffect();
    initCustomCursor();
    initMagneticButtons();
    init3DCards();
}

// Scroll Animations
function initScrollAnimations() {
    const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.1
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, observerOptions);

    // Observe elements with animation classes
    document.querySelectorAll('.scroll-fade-in, .scroll-scale-in, .reveal-on-scroll, .stagger-children')
        .forEach(element => observer.observe(element));
}

// Parallax Effect
function initParallaxEffect() {
    const parallaxElements = document.querySelectorAll('.parallax-scroll');

    window.addEventListener('scroll', () => {
        const scrolled = window.pageYOffset;

        parallaxElements.forEach(element => {
            const speed = element.dataset.speed || 0.5;
            const yPos = -(scrolled * speed);
            element.style.transform = `translateY(${yPos}px)`;
        });
    });
}

// Custom Cursor
function initCustomCursor() {
    const cursor = document.createElement('div');
    cursor.classList.add('custom-cursor');
    document.body.appendChild(cursor);

    document.addEventListener('mousemove', (e) => {
        cursor.style.transform = `translate(${e.clientX - 10}px, ${e.clientY - 10}px)`;
    });

    // Add hover effect for interactive elements
    document.querySelectorAll('a, button, .hover-effect').forEach(element => {
        element.addEventListener('mouseenter', () => cursor.style.transform += ' scale(1.5)');
        element.addEventListener('mouseleave', () => cursor.style.transform = cursor.style.transform.replace(' scale(1.5)', ''));
    });
}

// Magnetic Button Effect
function initMagneticButtons() {
    document.querySelectorAll('.magnetic-button').forEach(button => {
        button.addEventListener('mousemove', (e) => {
            const rect = button.getBoundingClientRect();
            const x = e.clientX - rect.left - rect.width / 2;
            const y = e.clientY - rect.top - rect.height / 2;

            button.style.transform = `translate(${x * 0.2}px, ${y * 0.2}px)`;
        });

        button.addEventListener('mouseleave', () => {
            button.style.transform = 'translate(0, 0)';
        });
    });
}

// 3D Card Effect
function init3DCards() {
    document.querySelectorAll('.card-3d').forEach(card => {
        card.addEventListener('mousemove', (e) => {
            const rect = card.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;

            const centerX = rect.width / 2;
            const centerY = rect.height / 2;

            const rotateX = (y - centerY) / 10;
            const rotateY = (centerX - x) / 10;

            card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
        });

        card.addEventListener('mouseleave', () => {
            card.style.transform = 'perspective(1000px) rotateX(0) rotateY(0)';
        });
    });
}

// Text Animation
function animateText(element) {
    const text = element.textContent;
    element.textContent = '';

    for (let i = 0; i < text.length; i++) {
        const span = document.createElement('span');
        span.textContent = text[i];
        span.style.animationDelay = `${i * 0.1}s`;
        span.classList.add('text-fade-in');
        element.appendChild(span);
    }
}

// Gradient Text Animation
function initGradientText() {
    document.querySelectorAll('.gradient-text').forEach(element => {
        element.classList.add('gradient-animate');
    });
}

// Initialize everything when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    initializeAnimations();

    // Initialize text animations for specific elements
    document.querySelectorAll('.animate-text').forEach(animateText);
    initGradientText();
});

// Smooth Scroll
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
}); 