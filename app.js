window.addEventListener("DOMContentLoaded", (event) => {
    const hamburger = document.querySelector('.hero__menu__hamburger__icon');
    const topbar = document.querySelector('.hero__menu__topbar');
    const nav = document.querySelector('.hero__menu__nav');

    hamburger.onclick = () => {
        topbar.classList.toggle('active');
        nav.classList.toggle('active');
        hamburger.classList.toggle('close');
    };
});