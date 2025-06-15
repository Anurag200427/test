// Wait for all content to load
window.addEventListener('load', () => {
    // Hide loading overlay
    const loadingOverlay = document.querySelector('.loading-overlay');
    if (loadingOverlay) {
        setTimeout(() => {
            loadingOverlay.classList.add('fade-out');
        }, 1000); // Show loader for at least 1 second
    }
});

// Wait for DOM to be ready
document.addEventListener('DOMContentLoaded', () => {
    // Get all elements
    const firstTitle = document.querySelector('.hero-title.first');
    const secondTitle = document.querySelector('.hero-title.second');
    const subtitle = document.querySelector('.hero-subtitle');

    // Verify elements exist
    if (!firstTitle || !secondTitle || !subtitle) {
        console.error('Could not find required elements');
        return;
    }

    // Set text content directly without animation
    firstTitle.textContent = 'DESIGN';
    secondTitle.textContent = 'REFINED';
    subtitle.textContent = 'VISION MEETS RESULTS';
}); 