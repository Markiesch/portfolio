/*
    Author: Mark Schuurmans
    Date: 3-12-2020

    Project Portfolio    
*/

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
