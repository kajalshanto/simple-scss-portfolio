const menuBtn = document.querySelector('.menu__btn');
const hamburger = document.querySelector('.menu__btn__burger');
const nav = document.querySelector('.nav');
const menuNav = document.querySelector('.menu__nav');
const navItems = document.querySelectorAll('.menu__nav__item');

let showMenu = false;

menuBtn.addEventListener('click', toggleMenu);

function toggleMenu() {
    if (!showMenu) {
        hamburger.classList.add('open');
        nav.classList.add('open');
        menuNav.classList.add('open');
        navItems.forEach(item => item.classList.add('open'));

        showMenu = true;
    } else {
        hamburger.classList.remove('open');
        nav.classList.remove('open');
        menuNav.classList.remove('open');
        navItems.forEach(item => item.classList.remove('open'));

        showMenu = false;
    }
}