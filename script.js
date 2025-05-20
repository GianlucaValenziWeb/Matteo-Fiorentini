//  ANIMATION 
document.addEventListener('DOMContentLoaded', function () {

    const items = document.querySelectorAll('.profile-section, .services-container, .service-box, .blog-card, .contact-box, .container-contact-social');

    const observer = new IntersectionObserver(function (entries) {
        entries.forEach(function (entry) {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            } else {
                entry.target.classList.remove('visible');
            }
        });
    }, { threshold: 0.1 });

    items.forEach(function (box) {
        observer.observe(box);
    });
});


//  NAVBAR INIZIALMENTE HA IL COLORE DELLO SFONDO, APPENA SI CROLLA GIU HA UN BACKGROUND BIANCO
document.addEventListener("DOMContentLoaded", function () {
    const navbar = document.querySelector(".navbar");

    window.addEventListener("scroll", function () {
        if (window.scrollY > 50) {
            navbar.classList.add("scrolled");
        } else {
            navbar.classList.remove("scrolled");
        }
    });
});

document.addEventListener('DOMContentLoaded', () => {
    const navLinks = document.querySelectorAll('.nav-link');
    
    // chiude il menu cliccando un link
    const check = document.getElementById('check');
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            if (check) check.checked = false;
        });
    });
});

// ARROW UP 
const arrowUp = document.querySelector('.arrow-up');

// Aggiungi un evento per mostrare/nascondere la freccetta in base allo scrolling
window.addEventListener('scroll', () => {
    if (window.scrollY > 200) { // Mostra la freccetta dopo aver scollato 200px
        arrowUp.style.display = 'flex';
    } else {
        arrowUp.style.display = 'none';
    }
});

// VISIONE RISPOSTE DELLE FAQ
document.querySelectorAll('.faq-item').forEach(item => {
    item.addEventListener('click', () => {
        document.querySelectorAll('.faq-item').forEach(otherItem => {
            if (otherItem !== item) {
                otherItem.classList.remove('active');
            }
        });
        item.classList.toggle('active');
    });
});

new Swiper('.card-wrapped', {
    loop: true,
    spaceBetween: 30,

    // If we need pagination
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
        dynamicBullets: true
    },

    // Navigation arrows
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },

    breakpoints: {
        0: {
            slidesPerView: 1
        },
        768: {
            slidesPerView: 2
        },
        1024: {
            slidesPerView: 3
        },
    }
});
