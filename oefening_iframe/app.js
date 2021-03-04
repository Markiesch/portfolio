/* 
    Author: Mark Schuurmans
    Date: 19-11-2020

    Praktijkopdracht Periode 2
*/

mapboxgl.accessToken = "pk.eyJ1IjoibWFya2llc2NoIiwiYSI6ImNrZ2NrcjZpYTA1cGMyeXMxOTZmanJxY2UifQ.MM8Hw3wYN6FYoVnE4dO5yg";
var map = new mapboxgl.Map({
    container: "map",
    style: "mapbox://styles/mapbox/streets-v11",
    center: [5.285698, 51.684226],
    zoom: 15,
});
