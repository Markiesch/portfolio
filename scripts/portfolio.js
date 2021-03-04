/*
    Author: Mark Schuurmans
    Date: 3-12-2020

    Project Portfolio    
*/

// Selectie van HTML Elementen
const modal = document.querySelector(".full__image--container");
// Maakt een array van alle images in de Gallery (preview)
const previews = document.querySelectorAll(".gallery img");
const original = document.querySelector(".full__image");
const imgText = document.querySelector(".full__image--caption");

// Maakt voor elke "image" in de "previews" array een click eventlisteren aan waar je het keyword "preview" kunt gebruiken om de gene te selecteren waar de gebruiker op geklikt heeft
previews.forEach((preview) => {
    preview.addEventListener("click", () => {
        // voegt de class "open" toe wanneer de gebruiker op een afbeelding klikt
        modal.classList.add("open");
        // Zet de image source (van de grootte afbeelding) gelijk aan de source van de afbeelding waar de gebruiker op klikt
        original.src = preview.getAttribute("src");
        // Zet de tekst onder de grootte afbeedling (p tag) gelijk aan de alt tekst van de afbeelding waar de gebruiker op klikt
        imgText.textContent = preview.alt;
    });
});

// Verwijderd de class "open" wanneer de gebruiker op "modal" klikt
modal.addEventListener("click", () => {
    modal.classList.remove("open");
});
