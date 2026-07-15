/*=============== CINEMATIC TAYCAN HERO ===============*/
(function () {
    'use strict';

    var home = document.querySelector('.home-page .home');
    var loader = document.querySelector('.hero-loader');
    var gsap = window.gsap;
    var ScrollTrigger = window.ScrollTrigger;

    if (!home || !gsap || !ScrollTrigger) return;

    gsap.registerPlugin(ScrollTrigger);

    var visual = home.querySelector('.home__visual');
    var image = home.querySelector('.home__img');
    var headlights = home.querySelectorAll('.home__headlight');
    var scan = home.querySelector('.home__scan');
    var data = home.querySelector('.home__data');
    var stats = home.querySelector('.home__car');
    var statItems = home.querySelectorAll('.home__car-data');
    var actions = home.querySelector('.home__actions');
    var tech = home.querySelector('.home__tech-copy');
    var techParts = home.querySelectorAll('.home__tech-kicker, .home__tech-title, .home__tech-meta');
    var hud = home.querySelector('.home__motion-hud');
    var progress = home.querySelector('.home__motion-line i');
    var reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    var forceLoader = new URLSearchParams(window.location.search).has('motion') ||
        new URLSearchParams(window.location.search).get('replay') === '1';
    var loaderSeen = false;

    try { loaderSeen = window.sessionStorage.getItem('carzone-loader-seen') === '1'; } catch (error) { /* private mode */ }

    var showLoader = Boolean(loader && !reduceMotion && (forceLoader || !loaderSeen));

    if (reduceMotion) {
        if (loader) loader.hidden = true;
        gsap.set([tech, headlights, scan], { clearProps: 'all' });
        return;
    }

    if (showLoader) {
        loader.hidden = false;
        document.documentElement.classList.add('is-loading');
        try { window.sessionStorage.setItem('carzone-loader-seen', '1'); } catch (error) { /* private mode */ }
    }

    gsap.set(visual, {
        clipPath: 'inset(0 100% 0 0 round 0 18px 18px 0)',
        opacity: 0
    });
    gsap.set([data, statItems, actions, hud], { opacity: 0 });
    gsap.set(data, { y: 28 });
    gsap.set(statItems, { y: 24 });
    gsap.set(actions, { y: 20 });
    gsap.set(hud, { y: 12 });
    gsap.set(headlights, { opacity: 0, scale: 0.35 });
    gsap.set(scan, { opacity: 0, xPercent: -120 });
    gsap.set(tech, { opacity: 0, y: 34 });
    gsap.set(techParts, { opacity: 0, y: 20 });

    if (showLoader) {
        gsap.set(home, { opacity: 0.24, scale: 0.992, transformOrigin: 'center' });
        gsap.set('.hero-loader__logo', { opacity: 0, y: 26, scale: 0.96 });
        gsap.set('.hero-loader__label, .hero-loader__meta', { opacity: 0, y: 10 });
    }

    function playIntro() {
        document.body.classList.add('hero-motion-ready');

        var introStart = showLoader ? 1.05 : 0;
        var timeline = gsap.timeline({ defaults: { ease: 'power3.out' } });

        if (showLoader) {
            var loadingState = { value: 0 };
            var loaderCount = loader.querySelector('.hero-loader__count');

            timeline
                .to('.hero-loader__logo', { opacity: 1, y: 0, scale: 1, duration: 0.42 }, 0.05)
                .to('.hero-loader__label, .hero-loader__meta', { opacity: 1, y: 0, duration: 0.35, stagger: 0.06 }, 0.16)
                .to('.hero-loader__track i', { scaleX: 1, duration: 0.78, ease: 'power2.inOut' }, 0.18)
                .to(loadingState, {
                    value: 100,
                    duration: 0.78,
                    ease: 'power2.inOut',
                    onUpdate: function () {
                        loaderCount.textContent = String(Math.round(loadingState.value)).padStart(2, '0');
                    }
                }, 0.18)
                .to('.hero-loader__inner', { scale: 7, opacity: 0, duration: 0.72, ease: 'power4.in' }, 0.78)
                .to(loader, { opacity: 0, duration: 0.62, ease: 'power2.inOut' }, 0.92)
                .to(home, { opacity: 1, scale: 1, duration: 0.75, ease: 'power2.out' }, 0.82)
                .call(function () {
                    loader.hidden = true;
                    document.documentElement.classList.remove('is-loading');
                }, null, 1.56);
        }

        timeline
            .to(visual, {
                clipPath: 'inset(0 0% 0 0 round 0 18px 18px 0)',
                opacity: 1,
                duration: 1.35
            }, introStart)
            .to(scan, { opacity: 0.7, xPercent: 125, duration: 1.05, ease: 'power2.inOut' }, introStart + 0.22)
            .to(scan, { opacity: 0, duration: 0.28 }, introStart + 1.02)
            .to(headlights, {
                opacity: 0.9,
                scale: 1,
                duration: 0.42,
                stagger: 0.08,
                ease: 'power4.out'
            }, introStart + 0.75)
            .to(headlights, { opacity: 0.35, scale: 0.9, duration: 0.75 }, introStart + 1.16)
            .to(data, { opacity: 1, y: 0, duration: 0.72 }, introStart + 0.72)
            .fromTo('.home-page .home__eyebrow, .home-page .home__title, .home-page .home__elec',
                { opacity: 0, y: 18 },
                { opacity: 1, y: 0, duration: 0.6, stagger: 0.09 },
                introStart + 0.8)
            .to(statItems, { opacity: 1, y: 0, duration: 0.56, stagger: 0.08 }, introStart + 1.08)
            .to(actions, { opacity: 1, y: 0, duration: 0.56 }, introStart + 1.28)
            .to(hud, { opacity: 1, y: 0, duration: 0.5 }, introStart + 1.48);
    }

    if (document.readyState === 'complete') {
        window.requestAnimationFrame(playIntro);
    } else {
        window.addEventListener('load', playIntro, { once: true });
    }

    var media = gsap.matchMedia();

    media.add('(min-width: 901px) and (prefers-reduced-motion: no-preference)', function () {
        var scrollTimeline = gsap.timeline({
            scrollTrigger: {
                trigger: home,
                start: 'top top',
                end: '+=95%',
                pin: true,
                scrub: 0.85,
                anticipatePin: 1,
                invalidateOnRefresh: true
            }
        });

        scrollTimeline
            .to(data, { xPercent: 12, y: -24, opacity: 0, ease: 'power2.in' }, 0)
            .to(actions, { xPercent: 12, y: 24, opacity: 0, ease: 'power2.in' }, 0)
            .to(hud, { opacity: 0, y: 12, ease: 'none' }, 0)
            .to(visual, { xPercent: 80, scale: 0.9, ease: 'power1.inOut' }, 0)
            .to(headlights, { opacity: 0.82, scale: 1.15, ease: 'power2.inOut' }, 0.2)
            .to(stats, {
                x: function () {
                    return (window.innerWidth * 0.06) - stats.getBoundingClientRect().left;
                },
                y: 130,
                scale: 1.08,
                columnGap: '2.5rem',
                ease: 'power2.inOut'
            }, 0.1)
            .to(tech, { opacity: 1, y: 0, ease: 'power2.out' }, 0.38)
            .to(techParts, { opacity: 1, y: 0, stagger: 0.08, ease: 'power2.out' }, 0.42)
            .to(progress, { scaleX: 1, ease: 'none' }, 0);

        return function () {
            scrollTimeline.kill();
        };
    });

    media.add('(hover: hover) and (pointer: fine) and (min-width: 901px)', function () {
        var moveX = gsap.quickTo(image, 'x', { duration: 0.65, ease: 'power3.out' });
        var moveY = gsap.quickTo(image, 'y', { duration: 0.65, ease: 'power3.out' });

        function onPointerMove(event) {
            var bounds = home.getBoundingClientRect();
            var x = (event.clientX - bounds.left) / bounds.width - 0.5;
            var y = (event.clientY - bounds.top) / bounds.height - 0.5;
            moveX(x * 13);
            moveY(y * 8);
        }

        function resetPointer() {
            moveX(0);
            moveY(0);
        }

        home.addEventListener('pointermove', onPointerMove);
        home.addEventListener('pointerleave', resetPointer);

        return function () {
            home.removeEventListener('pointermove', onPointerMove);
            home.removeEventListener('pointerleave', resetPointer);
        };
    });
})();
