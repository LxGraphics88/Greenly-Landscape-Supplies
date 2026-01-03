document.addEventListener('DOMContentLoaded', () => {
    
    // 1. Scroll Fade-In Effect
    const fadeElems = document.querySelectorAll('.fade-in');
    
    const appearOptions = {
        threshold: 0.15,
        rootMargin: "0px 0px -50px 0px"
    };

    const appearOnScroll = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('appear');
                observer.unobserve(entry.target);
            }
        });
    }, appearOptions);

    fadeElems.forEach(elem => {
        appearOnScroll.observe(elem);
    });

    // 2. Form Submission Handling
    const bookingForm = document.getElementById('bookingForm');
    const successMsg = document.getElementById('successMessage');

    bookingForm.addEventListener('submit', (e) => {
        e.preventDefault();
        
        // Simulate an API call
        bookingForm.style.display = 'none';
        successMsg.classList.remove('hidden');
        
        // Optional: Reset form after 5 seconds
        setTimeout(() => {
            bookingForm.reset();
            bookingForm.style.display = 'flex';
            successMsg.classList.add('hidden');
        }, 5000);
    });

    // 3. Smooth Navigation for Older Browsers
    document.querySelectorAll('.nav-links a').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            document.querySelector(targetId).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });
});