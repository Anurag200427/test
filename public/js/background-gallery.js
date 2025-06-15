// Array of local design images with absolute paths
const backgroundImages = [
    'https://images.unsplash.com/photo-1542831371-29b0f74f9713?auto=format&fit=crop&w=2000&q=100', // Code design
    'https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&w=2000&q=100', // Creative space
    'https://images.unsplash.com/photo-1555099962-4199c345e5dd?auto=format&fit=crop&w=2000&q=100', // Clean workspace
    'https://images.unsplash.com/photo-1537432376769-00f5c2f4c8d2?auto=format&fit=crop&w=2000&q=100', // Modern dev setup
    'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=2000&q=100', // Dark code
    'https://images.unsplash.com/photo-1523800503107-5bc3ba2a6f81?auto=format&fit=crop&w=2000&q=100', // Tech workspace
    'https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=2000&q=100', // Code close-up
    // Fallback images if needed
    './images/design1.jpg',
    './images/design2.jpg'
];

export class BackgroundGallery {
    constructor() {
        this.images = [
            'https://images.unsplash.com/photo-1542744173-8e7e53415bb0?auto=format&fit=crop&w=2000&q=80', // Creative workspace
            'https://images.unsplash.com/photo-1542744095-291d1f67b221?auto=format&fit=crop&w=2000&q=80', // Design setup
            'https://images.unsplash.com/photo-1542744173-05336fcc7ad4?auto=format&fit=crop&w=2000&q=80', // Modern office
            'https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&w=2000&q=80', // Creative space
            'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=2000&q=80', // Analytics
            'https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=2000&q=80', // Code
            'https://images.unsplash.com/photo-1618335829737-2228915674e0?auto=format&fit=crop&w=2000&q=80', // Minimal workspace
            'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?auto=format&fit=crop&w=2000&q=80'  // Clean desk
        ];
        this.currentIndex = 0;
        this.init();
    }

    init() {
        this.container = document.querySelector('.background-gallery');
        if (!this.container) return;

        this.container.innerHTML = ''; // Clear any existing content

        // Add overlay
        const overlay = document.createElement('div');
        overlay.className = 'gallery-overlay';
        this.container.appendChild(overlay);

        // Create and load first image
        this.createImage(this.images[0], true);

        // Create and load second image
        this.createImage(this.images[1], false);

        // Start transition loop
        this.startTransitions();
    }

    createImage(src, isActive) {
        const img = document.createElement('img');
        img.src = src;
        img.className = `gallery-image${isActive ? ' active' : ''}`;
        this.container.appendChild(img);
        return img;
    }

    async transition() {
        if (this.transitioning) return;
        this.transitioning = true;

        const images = this.container.querySelectorAll('.gallery-image');
        const currentImage = images[0];
        const nextImage = images[1];

        // Start fade transition
        currentImage.classList.remove('active');
        nextImage.classList.add('active');

        // Wait for transition to complete
        await new Promise(resolve => setTimeout(resolve, 1000));

        // Remove old image
        currentImage.remove();

        // Update index and add new next image
        this.currentIndex = (this.currentIndex + 1) % this.images.length;
        const nextImageSrc = this.images[(this.currentIndex + 1) % this.images.length];
        this.createImage(nextImageSrc, false);

        this.transitioning = false;
    }

    startTransitions() {
        setInterval(() => this.transition(), 5000);
    }
}

// Initialize gallery when DOM is ready
document.addEventListener('DOMContentLoaded', () => {
    new BackgroundGallery();
}); 