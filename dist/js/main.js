const menuBtn = document.querySelector('.menu-btn');
const siteMenu = document.querySelector('.site-menu');
const menuBranding = document.querySelector('.site-menu__section--branding');
const menuNav = document.querySelector('.site-menu__section--links');
const navItems = document.querySelectorAll('.site-menu__item');

//set the initial state of the menu

let showMenu = false;

menuBtn.addEventListener('click', toggleMenu);

function toggleMenu() {
      if (!showMenu) {
            menuBtn.classList.add('close');

            siteMenu.classList.add('show');
            menuNav.classList.add('show');
            menuBranding.classList.add('show');
            navItems.forEach(item => item.classList.add('show'));

            //reset the menu state
            showMenu = true;
      } else {
            menuBtn.classList.remove('close');

            siteMenu.classList.remove('show');
            menuNav.classList.add('show');
            menuBranding.classList.add('show');
            navItems.forEach(item => item.classList.remove('show'));

            //resrt the state
            showMenu = false;
      }
}