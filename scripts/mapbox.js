// MapBox Acces Token
mapboxgl.accessToken = "pk.eyJ1IjoibWFya2llc2NoIiwiYSI6ImNrZ2NrcjZpYTA1cGMyeXMxOTZmanJxY2UifQ.MM8Hw3wYN6FYoVnE4dO5yg";
// Het aanvragen van de locatie van de gebruiker, Deze heeft een succes en een error waar de waarde van veranderd met de onderstaande functions
navigator.geolocation.getCurrentPosition(succesLocation, errorLocation, { enableHighAccuracy: true });

function succesLocation(position) {
    // Zet de waarde van setupMap() naar de locatie van de gebruiker
    setupMap([position.coords.longitude, position.coords.latitude]);
}

function errorLocation() {
    // Zet de waarde van setupMap() naar deze locatie als de gebruiker de locatie niet toestaat (error)
    setupMap([5.372594, 51.664729]);
}

// Function die word uitgevoerd met de bovenstaande informatie `center` word gebruikt als een soort variable om de waarde op te slaan om vervolgens te gebruiken bij `center: center`
function setupMap(center) {
    var map = new mapboxgl.Map({
        // Selecteert de div met de naam "map" om daar deze gegevens aan toe te kennen
        container: "map",
        style: "mapbox://styles/mapbox/streets-v11",
        // Hier wordt het midden van de map aangewezen afhankelijk of de gebruiker de locatie toestaat deze wordt opgehaald uit de setupMap function
        center: center,
        // Hoever de map ingezoemt moet zijn wanneer de pagina wordt geopent
        zoom: 16,
    });

    // Plugin van Mapbox om zoom in-out to te voegen en om 3d te kijken
    var nav = new mapboxgl.NavigationControl();
    map.addControl(nav);
    map.addControl(new mapboxgl.FullscreenControl());

    var directions = new MapboxDirections({
        accessToken: mapboxgl.accessToken,
    });

    map.addControl(directions, "top-left");
}

const expandBtn = document.querySelector(".expand-button");
const contactSection = document.querySelector(".contact-information");
const map = document.getElementById("map");

expandBtn.addEventListener("click", () => {
    if (map.style.bottom === "-30vh") {
        contactSection.style.opacity = "0";
        contactSection.style.pointerEvents = "none";
        map.style.bottom = "0";
    } else {
        contactSection.style.opacity = "1";
        contactSection.style.pointerEvents = "all";

        map.style.bottom = "-30vh";
    }
});
