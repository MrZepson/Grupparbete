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


/* about us image slider*/



/* gallery*/

var slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
showSlides(slideIndex += n);
}

function currentSlide(n) {
showSlides(slideIndex = n);
}

function showSlides(n) {
var i;
var slides = document.getElementsByClassName("mySlides");
var dots = document.getElementsByClassName("demo");
var captionText = document.getElementById("caption");
if (n > slides.length) {slideIndex = 1}
if (n < 1) {slideIndex = slides.length}
for (i = 0; i < slides.length; i++) {
slides[i].style.display = "none";
}
for (i = 0; i < dots.length; i++) {
dots[i].className = dots[i].className.replace(" active", "");
}
slides[slideIndex-1].style.display = "block";
dots[slideIndex-1].className += " active";
captionText.innerHTML = dots[slideIndex-1].alt;
}
