// Initialize particles
function initParticles() {
    const container = document.querySelector('.particle-container');
    const particleCount = 50;

    for (let i = 0; i < particleCount; i++) {
        const particle = document.createElement('div');
        particle.className = 'particle';

        // Random initial position
        particle.style.left = `${Math.random() * 100}%`;
        particle.style.animationDelay = `${Math.random() * 15}s`;

        container.appendChild(particle);
    }
}

// Initialize glow lines
function initGlowLines() {
    const container = document.querySelector('.animated-background');
    const lineCount = 3;

    for (let i = 0; i < lineCount; i++) {
        const line = document.createElement('div');
        line.className = 'glow-line';
        line.style.animationDelay = `${i * 3}s`;
        container.appendChild(line);
    }
}

// Add scroll-based parallax effect
function initParallax() {
    window.addEventListener('scroll', () => {
        const scrolled = window.pageYOffset;
        const shapes = document.querySelectorAll('.animated-shape');

        shapes.forEach((shape, index) => {
            const speed = (index + 1) * 0.2;
            shape.style.transform = `translateY(${scrolled * speed}px)`;
        });
    });
}

// Add hover effect to interactive elements
function initHoverEffects() {
    const elements = document.querySelectorAll('.gallery-item, .service-section, .section-image');

    elements.forEach(element => {
        element.addEventListener('mousemove', (e) => {
            const rect = element.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;

            const centerX = rect.width / 2;
            const centerY = rect.height / 2;

            const angleX = (y - centerY) / 20;
            const angleY = (centerX - x) / 20;

            element.style.transform = `perspective(1000px) rotateX(${angleX}deg) rotateY(${angleY}deg) scale3d(1.02, 1.02, 1.02)`;
        });

        element.addEventListener('mouseleave', () => {
            element.style.transform = 'perspective(1000px) rotateX(0) rotateY(0) scale3d(1, 1, 1)';
        });
    });
}

// Initialize shimmer effect
function initShimmer() {
    const elements = document.querySelectorAll('.card, .gallery-content, .section-content');

    elements.forEach(element => {
        const shimmer = document.createElement('div');
        shimmer.className = 'shimmer';
        element.appendChild(shimmer);
    });
}

// Initialize all animations
document.addEventListener('DOMContentLoaded', () => {
    initParticles();
    initGlowLines();
    initParallax();
    initHoverEffects();
    initShimmer();

    // Add animation classes to content elements
    document.querySelectorAll('.gallery-item, .service-section, .section').forEach((element, index) => {
        element.classList.add('fade-in');
        element.style.animationDelay = `${index * 0.2}s`;
    });
}); 