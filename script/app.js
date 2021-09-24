const header = document.querySelector("header");

// Making the Nav-Bar transparent on scroll
window.addEventListener("scroll", function () {
    let windowPosition = window.scrollY > 0;
    header.classList.toggle("scrolling-active", windowPosition);
})