// Background Gallery Configuration
const backgroundImages = [
    'https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&w=1920&q=80', // Digital Matrix
    'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=1920&q=80', // Circuit Board
    'https://images.unsplash.com/photo-1624705002806-5d72df19c3dd?auto=format&fit=crop&w=1920&q=80', // Abstract Tech
    'https://images.unsplash.com/photo-1597733336794-12d05021d510?auto=format&fit=crop&w=1920&q=80', // Tech Particles
    'https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=1920&q=80', // Digital Wave
    'https://images.unsplash.com/photo-1504164996022-09080787b6b3?auto=format&fit=crop&w=1920&q=80'  // Code Abstract
];

let currentImageIndex = 0;

// Create and initialize background gallery
function initBackgroundGallery() {
    const galleryContainer = document.querySelector('.background-gallery');
    if (!galleryContainer) return;

    // Clear existing content
    galleryContainer.innerHTML = '';

    // Create initial image elements
    backgroundImages.forEach((src, index) => {
        const img = document.createElement('div');
        img.className = `gallery-image ${index === 0 ? 'active' : ''}`;
        img.style.backgroundImage = `url(${src})`;
        img.style.position = 'absolute';
        img.style.top = '0';
        img.style.left = '0';
        img.style.width = '100%';
        img.style.height = '100%';
        img.style.backgroundSize = 'cover';
        img.style.backgroundPosition = 'center';
        img.style.opacity = index === 0 ? '0.4' : '0';
        img.style.transition = 'opacity 2s ease-in-out';
        galleryContainer.appendChild(img);
    });

    // Add overlay
    const overlay = document.createElement('div');
    overlay.className = 'gallery-overlay';
    overlay.style.position = 'absolute';
    overlay.style.top = '0';
    overlay.style.left = '0';
    overlay.style.width = '100%';
    overlay.style.height = '100%';
    overlay.style.background = 'linear-gradient(to bottom, rgba(17, 17, 17, 0.85), rgba(17, 17, 17, 0.95))';
    overlay.style.zIndex = '1';
    galleryContainer.appendChild(overlay);

    // Start the slideshow
    startSlideshow();
}

// Function to change background image
function changeBackground() {
    const images = document.querySelectorAll('.gallery-image');
    if (!images.length) return;

    // Fade out current image
    images[currentImageIndex].style.opacity = '0';

    // Update index
    currentImageIndex = (currentImageIndex + 1) % images.length;

    // Fade in next image
    images[currentImageIndex].style.opacity = '0.4';
}

// Start the slideshow
function startSlideshow() {
    // Change background every 8 seconds
    setInterval(changeBackground, 8000);
}

// Initialize when DOM is loaded
document.addEventListener('DOMContentLoaded', initBackgroundGallery); 