/*
    Author: Mark Schuurmans
    Date: 3-12-2020

    Project Portfolio    
*/

// // Selectie van HTML Elementen
// const modal = document.querySelector(".full__image--container");
// // Maakt een array van alle images in de Gallery (preview)
// const previews = document.querySelectorAll(".gallery img");
// const original = document.querySelector(".full__image");
// const imgText = document.querySelector(".full__image--caption");

// // Maakt voor elke "image" in de "previews" array een click eventlisteren aan waar je het keyword "preview" kunt gebruiken om de gene te selecteren waar de gebruiker op geklikt heeft
// previews.forEach((preview) => {
//     preview.addEventListener("click", () => {
//         // voegt de class "open" toe wanneer de gebruiker op een afbeelding klikt
//         modal.classList.add("open");
//         // Zet de image source (van de grootte afbeelding) gelijk aan de source van de afbeelding waar de gebruiker op klikt
//         original.src = preview.getAttribute("src");
//         // Zet de tekst onder de grootte afbeedling (p tag) gelijk aan de alt tekst van de afbeelding waar de gebruiker op klikt
//         imgText.textContent = preview.alt;
//     });
// });

// // Verwijderd de class "open" wanneer de gebruiker op "modal" klikt
// modal.addEventListener("click", () => {
//     modal.classList.remove("open");
// });

const body = document.body;
const links = document.querySelectorAll("main a");
const bubble = document.querySelector(".bubble");
const backgroundSquare = document.querySelector(".transition--background");
const transitionTime = 600;

document.querySelectorAll("a").forEach((e) => {
    e.addEventListener("click", (e) => {
        const target = e.target.parentElement.href;
        e.preventDefault();

        console.log(target);

        bubble.src = e.target.src;

        bubble.style.left = `${e.clientX}px`;
        bubble.style.top = `${e.clientY}px`;
        bubble.style.width = `0`;
        backgroundSquare.classList.add("animating");

        dotEnlarge();
        transitionEnd(target);
    });
});

function dotEnlarge() {
    setTimeout(() => {
        bubble.style.transition = `${transitionTime}ms ease-in-out all`;
        bubble.style.width = `70vw`;
        bubble.style.left = `50%`;
        bubble.style.top = `50%`;
    }, 10);
}

function transitionEnd(location) {
    setTimeout(() => {
        window.location = location;
    }, transitionTime * 1.5);
}
