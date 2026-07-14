document.addEventListener('DOMContentLoaded', () => {
    if (!window.ScrollReveal) return;

    const reveal = ScrollReveal({
        origin: 'top',
        distance: '60px',
        duration: 1600,
        delay: 200,
        reset: false,
    });

    reveal.reveal('.video-title, .video-subtitle', { interval: 120 });
    reveal.reveal('.sell-car-form, .form-container', { origin: 'bottom', delay: 250 });
    reveal.reveal('.form-row', { interval: 80, origin: 'left' });
    reveal.reveal('.footer__content', { interval: 80, origin: 'bottom' });
});
