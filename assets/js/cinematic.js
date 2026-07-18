/*=============== SCROLL CINEMATICS ===============*/
/* Camera-dive into the top-down Taycan, map route drawing, staggered
   proof cards, and a mask-zoom "through the logo" transition into the
   featured stock. Desktop + motion-safe only; every other context keeps
   the existing ScrollReveal behaviour. */
(function () {
    'use strict';

    var gsap = window.gsap;
    var ScrollTrigger = window.ScrollTrigger;
    var isHome = document.body.classList.contains('home-page');

    if (!isHome || !gsap || !ScrollTrigger) return;

    gsap.registerPlugin(ScrollTrigger);

    var media = gsap.matchMedia();

    media.add('(min-width: 901px) and (prefers-reduced-motion: no-preference)', function () {
        document.body.classList.add('cz-cinematic');

        /* ---------- Act I: camera dive into the features stage ---------- */
        var features = document.querySelector('.features');
        var title = features.querySelector('.section__title');
        var carImg = features.querySelector('.features__img');
        var map = features.querySelector('.features__map');
        var cards = features.querySelectorAll('.features__card');
        var backplate = features.querySelector('.features__backplate');
        var paths = map ? map.querySelectorAll('path') : [];

        paths.forEach(function (path) {
            var length = path.getTotalLength();
            path.style.strokeDasharray = length;
            path.style.strokeDashoffset = length;
        });

        gsap.set(carImg, { scale: 3.1, yPercent: 16, filter: 'blur(7px)', transformOrigin: '50% 42%' });
        gsap.set(cards, { opacity: 0, y: 46, filter: 'blur(8px)' });
        gsap.set(backplate, { opacity: 0, scale: 1.16 });
        gsap.set(title, { opacity: 0, y: 30 });

        var dive = gsap.timeline({
            scrollTrigger: {
                trigger: features,
                start: 'top top',
                end: '+=230%',
                pin: true,
                scrub: 0.9,
                anticipatePin: 1,
                invalidateOnRefresh: true
            }
        });

        dive
            .to(backplate, { opacity: 0.55, scale: 1, ease: 'power2.out', duration: 1 }, 0)
            .to(carImg, { scale: 1, yPercent: 0, filter: 'blur(0px)', ease: 'power2.inOut', duration: 1.35 }, 0)
            .to(title, { opacity: 1, y: 0, ease: 'power2.out', duration: 0.6 }, 0.55)
            .to(paths, { strokeDashoffset: 0, ease: 'none', duration: 1.5, stagger: 0.07 }, 0.25)
            .to(cards, { opacity: 1, y: 0, filter: 'blur(0px)', stagger: 0.16, duration: 0.55, ease: 'power3.out' }, 1.6)
            .to({}, { duration: 0.35 });

        /* ---------- Act II: zoom through the CAR ZONE logo ---------- */
        var stage = document.querySelector('.logo-zoom');
        var stageLogo = stage ? stage.querySelector('.logo-zoom__logo') : null;
        var reveal = stage ? stage.querySelector('.logo-zoom__reveal') : null;
        var revealInner = stage ? stage.querySelector('.logo-zoom__reveal-inner') : null;

        var zoom = null;
        if (stage && stageLogo && reveal) {
            /* The mask starts at exactly the rendered logo width so the blue
               reveal sits inside the white letters, then grows "through" them. */
            var startMask = function () {
                return (stageLogo.getBoundingClientRect().width / stage.clientWidth) * 100 + '%';
            };

            gsap.set(reveal, { opacity: 0, '--cz-mask': startMask() });
            gsap.set(revealInner, { opacity: 0, scale: 1.12 });

            zoom = gsap.timeline({
                scrollTrigger: {
                    trigger: stage,
                    start: 'top top',
                    end: '+=170%',
                    pin: true,
                    scrub: 0.9,
                    anticipatePin: 1,
                    invalidateOnRefresh: true
                }
            });

            zoom
                .to(reveal, { opacity: 1, duration: 0.08, ease: 'none' }, 0)
                .to(stageLogo, { opacity: 0, duration: 0.12, ease: 'power1.in' }, 0.05)
                .fromTo(reveal,
                    { '--cz-mask': startMask },
                    { '--cz-mask': '5750%', ease: 'power3.in', duration: 0.92 }, 0.08)
                .to(revealInner, { opacity: 1, scale: 1, ease: 'power2.out', duration: 0.45 }, 0.85)
                .to({}, { duration: 0.3 });
        }

        /* ---------- Act III: about parallax settle ---------- */
        var aboutImg = document.querySelector('.about__img');
        var aboutTrigger = null;
        if (aboutImg) {
            aboutTrigger = gsap.fromTo(aboutImg,
                { scale: 1.14, yPercent: 6 },
                {
                    scale: 1,
                    yPercent: 0,
                    ease: 'none',
                    scrollTrigger: {
                        trigger: '.about',
                        start: 'top 85%',
                        end: 'center center',
                        scrub: 0.8,
                        invalidateOnRefresh: true
                    }
                });
        }

        return function () {
            document.body.classList.remove('cz-cinematic');
            dive.kill();
            if (zoom) zoom.kill();
            if (aboutTrigger && aboutTrigger.scrollTrigger) aboutTrigger.scrollTrigger.kill();
            paths.forEach(function (path) {
                path.style.strokeDasharray = '';
                path.style.strokeDashoffset = '';
            });
            gsap.set([carImg, cards, backplate, title], { clearProps: 'all' });
        };
    });
})();
