// Simple scroll observer for fade-ins
document.addEventListener("DOMContentLoaded", () => {

    const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.1
    };

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                observer.unobserve(entry.target); // Only animate once
            }
        });
    }, observerOptions);

    // Initial fade-in elements (Hero) are handled by CSS animation delay
    // We can add a class to trigger others if we want specific scroll triggers

    // Example: Add 'fade-on-scroll' class to elements we want to animate on scroll
    // For now, the hero animations run on load.

    console.log("Tivi Landing Page Loaded");
});
