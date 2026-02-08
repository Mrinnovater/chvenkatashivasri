document.addEventListener("DOMContentLoaded", function () {
    const navbar = document.querySelector('.navbar');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            navbar.classList.add('shadow-lg');
            navbar.style.background = 'rgba(15, 23, 42, 0.95)';
            navbar.style.padding = '10px 0';
        } else {
            navbar.classList.remove('shadow-lg');
            navbar.style.background = 'rgba(15, 23, 42, 0.7)';
            navbar.style.padding = '20px 0';
        }
    });

    const typingElements = document.querySelectorAll('.typing-loop-nav, .typing-loop-hero');

    typingElements.forEach(element => {
        const textToType = element.getAttribute('data-text');
        if (textToType) {
            startInfiniteTyping(element, textToType);
        }
    });

    function startInfiniteTyping(element, text) {
        let i = 0;
        let isDeleting = false;
        let currentText = '';
        let speed = 100;

        function type() {
            if (isDeleting) {
                currentText = text.substring(0, i--);
                speed = 50;
            } else {
                currentText = text.substring(0, i++);
                speed = 100;
            }

            element.innerHTML = currentText;

            if (!isDeleting && i === text.length + 1) {
                isDeleting = true;
                speed = 2000;
            } else if (isDeleting && i === 0) {
                isDeleting = false;
                speed = 500;
            }

            setTimeout(type, speed);
        }
        type();
    }

    const revealElements = document.querySelectorAll('.reveal-on-scroll');

    const revealObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('reveal', 'active');
            }
        });
    }, { threshold: 0.1 });

    revealElements.forEach(el => {
        el.classList.add('reveal');
        revealObserver.observe(el);
    });

    const navbarNav = document.getElementById('navbarNav');
    const navLinks = document.querySelectorAll('.nav-link, .btn-glow');

    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            if (navbarNav.classList.contains('show')) {
                document.querySelector('.navbar-toggler').click();
            }
        });
    });
});