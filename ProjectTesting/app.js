const menu = document.querySelector('#mobile-menu');
const menuTabs = document.querySelector('.navbar__menu');

// display mobile menu on click
const mobileMenu = () => {
    menu.classList.toggle('is-active');
    menuTabs.classList.toggle('active');
}

menu.addEventListener('click', mobileMenu);