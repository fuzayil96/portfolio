// smooth scrool effect
const scroll = new SmoothScroll('.menu a[href*="#"]', {
  speed: 700,
});

const menuButton = document.querySelector('.mobil-menu')
const hiddenMenu = document.querySelector('.menu-hidden')

menuButton.addEventListener('click', ()=>{
hiddenMenu.classList.toggle('active')
})