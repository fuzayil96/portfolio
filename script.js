// smooth scrool effect
const scroll = new SmoothScroll('.menu a[href*="#"]', {
  speed: 700,
});

const menuButton = document.querySelector('.mobile-menu');
const hiddenMenu = document.querySelector('.menu-hidden');

menuButton.addEventListener('click', menuHandler);

function menuHandler(){
  hiddenMenu.classList.toggle('active');
}