// Selectie van HTML Elementen
const main = document.querySelector("main");
const grades = {
    realiseren: [8.4, 9.2, 5.8, 9.2],
    testenEnVerbeteren: [9.0, 9.3, 8.9],
    computervaardigheden: [8.8, 9.4, 8.0, 8.8],
    beroepshouding: [6.0],
    burgerschap: [6.0],
    nederlands: [7.9, 6.7, 9.0],
    engels: [8.6, 8.1, 9.0],
    rekenen: [9.3],
};
const names = ["Realiseren", "Testen en Verbeteren", "Computervaardigheden", "Beroepshouding", "Burgerschap", "Nederlands", "Engels", "Rekenen"];

const keys = Object.keys(grades);
for (let y = 0; y < keys.length; y++) {
    // Hieronder worden alle elementen aangemaakt die per vak vereist zijn
    const article = document.createElement("article");
    main.appendChild(article);
    const title = document.createElement("h3");
    title.innerHTML = names[y];
    article.appendChild(title);
    const mainDiv = document.createElement("div");
    article.appendChild(mainDiv);
    mainDiv.classList.add("card__grade--container");
    mainDiv.classList.add("flex");
    const gradeDiv = document.createElement("div");
    gradeDiv.classList.add("flex");
    mainDiv.appendChild(gradeDiv);
    const avgDiv = document.createElement("div");
    avgDiv.classList.add("card__grade");
    mainDiv.appendChild(avgDiv);
    const avgNumber = document.createElement("h4");
    avgNumber.id = `avarage${y}`;
    avgDiv.appendChild(avgNumber);
    const theme = document.createElement("h4");
    theme.classList.add("card__grade--theme");
    gradeDiv.appendChild(theme);
    theme.innerHTML = "Thema 1";

    // Het aanmaken van de variable om het gemiddelde op te tellen deze word opnieuw aangemaakt wanneer de For loop bij de volgende arrayitem aankomt
    let total = 0;
    // een kortere notatie om grades[keys[y]] op te schrijven dit maakt de code overzichtelijker
    let current = grades[keys[y]];
    for (let i = 0; i < current.length; i++) {
        total += current[i];
        const gradeCard = document.createElement("div");
        gradeDiv.appendChild(gradeCard);
        gradeCard.classList.add("card__grade");
        const grade = document.createElement("h4");
        gradeCard.appendChild(grade);
        grade.innerHTML = current[i];
    }
    // Rekent het gemiddelde uit door total te delen door het aantel behaalde cijfer voor dat vak / toFixed zorgt ervoor dat deze word afgerond op 1 decimaal
    let avg = (total / current.length).toFixed(1);
    document.getElementById(`avarage${y}`).innerHTML = avg;
}

// Selecteerd alle H4 elementen in alle div's met de class "card__grade" hier maakt hij een array van
const cell = document.querySelectorAll(".card__grade h4");

// Loopt door alle elementen (h4) heen van de bovenstaande array
for (let i = 0; i < cell.length; i++) {
    // Vervangt de , in een . van de message content van de huidige string in the loop ([i])
    let number = parseFloat(cell[i].textContent.split(",").join("."));
    if (number >= 7) {
        // Geeft de class "green" aan het element als deze hoger is dan 7
        cell[i].classList.add("green");
    } else if (number >= 5.5) {
        // Geeft de class "orange" aan het element als deze tussen de 5.5 en 7 is
        cell[i].classList.add("orange");
    } else {
        // Geeft de class "red" aan het element als deze niet voldoet aan de bovenstaande eisen (onder de 5,5 / onvoldoende)
        cell[i].classList.add("red");
    }
}
