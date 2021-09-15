const menu = document.querySelector('.popup-menu');
const triangle = document.querySelector('.triangle');
const hamburger = document.querySelector('#hamburger');

const toggleMenu = () => {
    menu.classList.toggle('show-menu');
    triangle.classList.toggle('show-menu');
}

hamburger.addEventListener("click", toggleMenu);