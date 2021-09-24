const header = document.querySelector("header");
const burger = document.querySelector(".burger");
const navMenu = document.querySelector(".nav");
const links = document.querySelectorAll(".nav-link");
let navOpen = false;

// Making the Nav-Bar transparent on scroll
window.addEventListener("scroll", function () {
    let windowPosition = window.scrollY > 0;
    header.classList.toggle("scrolling-active", windowPosition);
})

// Responsive Nav-Bar things
const toggleMenu = () => {
    if (!navOpen) {
        navMenu.style.right = "0";
        navOpen = true;
    } else {
        navMenu.style.right = "-100%";
        navOpen = false;
    }
}

window.addEventListener("load", function () {
    burger.addEventListener("click", function () {
        toggleMenu();
    })
})