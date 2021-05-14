const slider = document.querySelector(".slider");
const images = document.querySelectorAll("main img");

slider.oninput = function () {
    for (const image of images) {
        image.style.setProperty("--width", this.value + "%");
    }
};
