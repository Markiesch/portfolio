const slider = document.querySelector(".slider > div");
window.addEventListener("scroll", () => {
    slider.style.transform = `translateX(-${window.pageYOffset / 6}px)`;
});
