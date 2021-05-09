// Selectie van HTML Elementen
const main = document.querySelector("main");
const grades = [
    // Realiseren
    [
        [9.2, 5.8, 9.2],
        [8.1, 9.0, 9.3],
    ],

    // Testen en Verbeteren
    [
        [9.3, 8.9],
        [7.3, 10],
    ],

    // Computervaardigheden
    [
        [9.4, 8.0, 8.8],
        [9.2, 7.5, 10],
    ],
    // Beroepshouding
    [[6.0], [6.0]],

    // Burgerschap
    [[6.0], [8.0]],

    // Nederlands
    [
        [6.7, 9.0],
        [4.8, 9.0],
    ],

    // Engels
    [
        [8.1, 9.0],
        [6.3, 6.8],
    ],

    // Rekenen
    [[9.3], [8.7]],

    // Plannen en Ontwerpen
    [
        [4.3, 4.3, 6.7],
        [6.7, 9.1, 9.7],
    ],
];
const names = ["Realiseren", "Testen en Verbeteren", "Computervaardigheden", "Beroepshouding", "Burgerschap", "Nederlands", "Engels", "Rekenen", "Plannen en Ontwerpen"];

for (const grade of grades) {
    const index = grades.indexOf(grade);

    // Aanmaken article element (element die per vak wordt gemaakt)
    const article = document.createElement("article");
    main.appendChild(article);

    const title = document.createElement("h3");
    title.innerHTML = names[index];
    article.appendChild(title);

    for (const gradeItems of grade) {
        const mainDiv = document.createElement("div");
        article.appendChild(mainDiv);
        mainDiv.classList.add("card__grade--container");
        mainDiv.classList.add("flex");

        const gradeDiv = document.createElement("div");
        mainDiv.appendChild(gradeDiv);

        const theme = document.createElement("h4");
        theme.classList.add("card__grade--theme");
        theme.innerHTML = `Thema ${grade.indexOf(gradeItems) + 1}`;
        gradeDiv.appendChild(theme);

        const avgDiv = document.createElement("div");
        avgDiv.classList.add("card__grade");
        mainDiv.appendChild(avgDiv);

        let total = 0;
        for (const gradeItem of gradeItems) {
            total += gradeItem;
            const gradeCard = document.createElement("div");
            gradeDiv.appendChild(gradeCard);
            gradeCard.classList.add("card__grade");
            const grade = document.createElement("h4");
            gradeCard.appendChild(grade);
            grade.innerHTML = gradeItem;
        }
        // Rekent het gemiddelde uit door total te delen door het aantel behaalde cijfer voor dat vak / toFixed zorgt ervoor dat deze word afgerond op 1 decimaal
        let avg = (total / gradeItems.length).toFixed(1);
        const avgNumber = document.createElement("h4");
        avgDiv.appendChild(avgNumber);
        avgNumber.innerHTML = avg;
    }
}

// Selecteerd alle H4 elementen in alle div's met de class "card__grade" hier maakt hij een array van
const cells = document.querySelectorAll(".card__grade h4");

// Loopt door alle elementen (h4) heen van de bovenstaande array
for (const cell of cells) {
    // Vervangt de , in een . van de message content van de huidige string in the loop ([i])
    // let number = parseFloat(cell.textContent.split(",").join("."));
    let number = parseFloat(cell.innerText);
    if (number >= 6) {
        // Geeft de class "green" aan het element als deze hoger is dan 7
        cell.classList.add("green");
    } else if (number >= 5.5) {
        // Geeft de class "orange" aan het element als deze tussen de 5.5 en 7 is
        cell.classList.add("orange");
    } else {
        // Geeft de class "red" aan het element als deze niet voldoet aan de bovenstaande eisen (onder de 5,5 / onvoldoende)
        cell.classList.add("red");
    }

    cell.innerText = cell.innerText.replace(".", ",");
}
