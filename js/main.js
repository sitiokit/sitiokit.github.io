/* ===== SITIOKIT - SCRIPTS ===== */

// ===== IMAGE & CONTENT PROTECTION =====
(function() {
    // Disable right click
    document.addEventListener('contextmenu', function(e) {
        e.preventDefault();
        return false;
    });

    // Disable drag on images
    document.addEventListener('dragstart', function(e) {
        if (e.target.tagName === 'IMG') {
            e.preventDefault();
            return false;
        }
    });

    // Disable keyboard shortcuts for save/inspect
    document.addEventListener('keydown', function(e) {
        // Ctrl+S, Ctrl+U, Ctrl+Shift+I, Ctrl+Shift+J, Ctrl+Shift+C, F12
        if (
            (e.ctrlKey && e.key === 's') ||
            (e.ctrlKey && e.key === 'u') ||
            (e.ctrlKey && e.shiftKey && e.key === 'I') ||
            (e.ctrlKey && e.shiftKey && e.key === 'J') ||
            (e.ctrlKey && e.shiftKey && e.key === 'C') ||
            e.key === 'F12'
        ) {
            e.preventDefault();
            return false;
        }
    });

    // Disable image long-press on mobile
    document.addEventListener('touchstart', function(e) {
        if (e.target.tagName === 'IMG') {
            e.preventDefault();
        }
    }, { passive: false });
})();


// ===== SCROLL REVEAL =====
const obs = new IntersectionObserver((entries) => {
    entries.forEach((entry, i) => {
        if (entry.isIntersecting) {
            setTimeout(() => entry.target.classList.add('vis'), i * 60);
            obs.unobserve(entry.target);
        }
    });
}, { threshold: 0.1 });

document.querySelectorAll('.reveal').forEach(el => obs.observe(el));


// ===== SMOOTH SCROLL =====
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({ behavior: 'smooth' });
            document.getElementById('nav').classList.remove('mopen');
        }
    });
});


// ===== MOBILE NAV TOGGLE =====
function toggleNav() {
    document.getElementById('nav').classList.toggle('mopen');
}


// ===== FAQ TOGGLE =====
document.querySelectorAll('.faq-q').forEach(btn => {
    btn.addEventListener('click', function() {
        this.parentElement.classList.toggle('active');
    });
});
