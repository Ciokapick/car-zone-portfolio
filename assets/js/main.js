/*=============== SHOW MENU ===============*/
const navMenu = document.getElementById('nav-menu'),
      navToggle = document.getElementById('nav-toggle'),
      navClose = document.getElementById('nav-close');

/*===== MENU SHOW =====*/
/* Validate if constant exists */
if (navToggle) {
    navToggle.addEventListener('click', () => {
        navMenu?.classList.add('show-menu');
        navToggle.setAttribute('aria-expanded', 'true');
    });
}

/*===== MENU HIDDEN =====*/
/* Validate if constant exists */
if (navClose) {
    navClose.addEventListener('click', () => {
        navMenu?.classList.remove('show-menu');
        navToggle?.setAttribute('aria-expanded', 'false');
    });
}

/*=============== REMOVE MENU MOBILE ===============*/
const navLink = document.querySelectorAll('.nav__link');

function linkAction() {
    const navMenu = document.getElementById('nav-menu');
    navMenu?.classList.remove('show-menu');
    navToggle?.setAttribute('aria-expanded', 'false');
}
navLink.forEach(n => n.addEventListener('click', linkAction));

/*=============== CHANGE BACKGROUND HEADER ===============*/
function scrollHeader() {
    const header = document.getElementById('header');
    if (this.scrollY >= 50) header.classList.add('scroll-header');
    else header.classList.remove('scroll-header');
}
window.addEventListener('scroll', scrollHeader);

/*=============== LOGO SWIPER ===============*/
document.addEventListener("DOMContentLoaded", function () {
    if (document.querySelector(".logos__container") && window.Swiper) new Swiper(".logos__container", {
        loop: true,
        slidesPerView: "auto",
        centeredSlides: true,
        spaceBetween: 20,
        autoplay: {
            delay: 1400,
            disableOnInteraction: false,
            pauseOnMouseEnter: true,
        },
        speed: 650,
        breakpoints: {
            320: { slidesPerView: 2, spaceBetween: 10 },
            768: { slidesPerView: 3, spaceBetween: 15 },
            1024: { slidesPerView: 7, spaceBetween: 20 },
        },
    });
});

/*=============== POPULAR SWIPER ===============*/
if (document.querySelector('.popular__container') && window.Swiper) new Swiper('.popular__container', {
    loop: true,
    spaceBetween: 24,
    slidesPerView: "auto",
    grabCursor: true,
    pagination: {
        el: ".swiper-pagination",
        dynamicBullets: true,
    },
    breakpoints: {
        768: { slidesPerView: 3 },
        1024: { spaceBetween: 48 },
    },
});

/*=============== SHOW SCROLL UP ===============*/
function scrollUp() {
    const scrollUp = document.getElementById('scroll-up');
    if (this.scrollY >= 350) scrollUp.classList.add('show-scroll');
    else scrollUp.classList.remove('show-scroll');
}
window.addEventListener('scroll', scrollUp);

/*=============== SCROLL SECTIONS ACTIVE LINK ===============*/
const sections = document.querySelectorAll('section[id]');

function scrollActive() {
    const scrollY = window.pageYOffset;

    sections.forEach(current => {
        const sectionHeight = current.offsetHeight,
              sectionTop = current.offsetTop - 58,
              sectionId = current.getAttribute('id');

        if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
            document.querySelector('.nav__menu a[href*="' + sectionId + '"]')?.classList.add('active-link');
        } else {
            document.querySelector('.nav__menu a[href*="' + sectionId + '"]')?.classList.remove('active-link');
        }
    });
}
window.addEventListener('scroll', scrollActive);

/*=============== SCROLL REVEAL ANIMATION ===============*/
const sr = ScrollReveal({
    origin: 'top',
    distance: '60px',
    duration: 2000,
    delay: 300,
});

sr.reveal(`.popular__container, .features__img, .featured__filters`);

/* The homepage hero has its own GSAP sequence. Keep the legacy entrance as a
   graceful fallback if GSAP cannot load. */
if (!document.body.classList.contains('home-page') || !window.gsap) {
    sr.reveal(`.home__title`);
    sr.reveal(`.home__subtitle`, { delay: 500 });
    sr.reveal(`.home__elec`, { delay: 600 });
    sr.reveal(`.home__img`, { delay: 800 });
    sr.reveal(`.home__car-data`, { delay: 900, interval: 100, origin: 'bottom' });
    sr.reveal(`.home__button`, { delay: 1000, origin: 'bottom' });
}
sr.reveal(`.about__group, .offer__data`, { origin: 'left' });
sr.reveal(`.about__data, .offer__img`, { origin: 'right' });
sr.reveal(`.features__map`, { delay: 600, origin: 'bottom' });
sr.reveal(`.features__card`, { interval: 300 });
sr.reveal(`.featured__card, .logos__content, .footer__content`, { interval: 100 });
/* Specific pentru logo-uri și footer */
sr.reveal(`.logos__container`, { delay: 300, duration: 2000, origin: 'bottom' });
sr.reveal(`.footer__content`, { interval: 100, duration: 2000, origin: 'bottom' });
