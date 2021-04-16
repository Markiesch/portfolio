/*
    Author: Mark Schuurmans
    Date: 3-12-2020

    Project Portfolio    
*/

// Het aanspreken van elementen uit de HTML pagina
const menuBtn = document.querySelector(".menu__button");
const burgerMenu = document.querySelector(".burger-menu");
const header = document.querySelector("header");
const background = document.querySelector(".burger-menu--background");

// Voert de function menuToggle uit als er een klick plaatvind op de variable menuBtn (div met de class .menu__button) en op de achtergrond
menuBtn.addEventListener("click", menuToggle);
background.addEventListener("click", menuToggle);

function menuToggle() {
    menuBtn.classList.toggle("open");
    burgerMenu.classList.toggle("open");
    header.classList.toggle("open");
    background.classList.toggle("open");
}

let lastScrollTop = 0;
const navbar = document.querySelector("header");

window.addEventListener("scroll", (e) => {
    console.log(e);
    var scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    if (scrollTop > lastScrollTop) {
        navbar.style.transform = "translate(-100%)";
    } else {
        navbar.style.transform = "translate(0)";
    }
    lastScrollTop = scrollTop;
});
