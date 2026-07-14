const siteNavMenu = document.getElementById('nav-menu');
const siteNavToggle = document.getElementById('nav-toggle');
const siteNavClose = document.getElementById('nav-close');

function setSiteMenu(open) {
    siteNavMenu?.classList.toggle('show-menu', open);
    siteNavToggle?.setAttribute('aria-expanded', String(open));
}

siteNavToggle?.addEventListener('click', () => setSiteMenu(true));
siteNavClose?.addEventListener('click', () => setSiteMenu(false));
document.querySelectorAll('.nav__link').forEach((link) => link.addEventListener('click', () => setSiteMenu(false)));

function updateSiteChrome() {
    document.getElementById('header')?.classList.toggle('scroll-header', window.scrollY >= 50);
    document.getElementById('scroll-up')?.classList.toggle('show-scroll', window.scrollY >= 350);
}

window.addEventListener('scroll', updateSiteChrome, { passive: true });
updateSiteChrome();
