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
    /* Inventory cards are shown/hidden by inventory-filter.js. ScrollReveal
       leaves off-screen cards at opacity: 0, so a filtered brand would be
       correctly selected but invisible after it moves to the top of the grid. */
    sr.reveal(`.footer__content`, { interval: 100, duration: 2000, origin: "bottom" });
});
