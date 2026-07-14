document.addEventListener("DOMContentLoaded", function () {
    /*=============== SHOW MENU ===============*/
    const navMenu = document.getElementById("nav-menu"),
        navToggle = document.getElementById("nav-toggle"),
        navClose = document.getElementById("nav-close");

    if (navToggle) {
        navToggle.addEventListener("click", () => {
            navMenu.classList.add("show-menu");
        });
    }

    if (navClose) {
        navClose.addEventListener("click", () => {
            navMenu.classList.remove("show-menu");
        });
    }

    const navLink = document.querySelectorAll(".nav__link");
    navLink.forEach((n) =>
        n.addEventListener("click", () => {
            navMenu.classList.remove("show-menu");
        })
    );

    /*=============== SCROLL REVEAL ANIMATION ===============*/
    const sr = ScrollReveal({
        origin: "top",
        distance: "60px",
        duration: 2000,
        delay: 300,
    });

    sr.reveal(`.video-title, .video-subtitle`, { interval: 200 });
    sr.reveal(`.featured__filters`, { delay: 400, origin: "top" });
    sr.reveal(`.featured__card`, { interval: 100, origin: "bottom" });
    sr.reveal(`.footer__content`, { interval: 100, duration: 2000, origin: "bottom" });
});
