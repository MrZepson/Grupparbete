const header = document.querySelector("header");
const burger = document.querySelector(".burger");
const navMenu = document.querySelector(".nav");
const links = document.querySelectorAll(".nav-link");
let navOpen = false;

// Making the Nav-Bar transparent on scroll
document.addEventListener("scroll", function () {
    let windowPosition = window.scrollY;
    if (windowPosition >= 1) {
        header.classList.add("scrolling-active");
    } else if (windowPosition <= 0) {
        header.classList.remove("scrolling-active");
    }
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


// About us image slide-in
const animatedImage = document.getElementById("about-us-image");
const target = document.getElementById("about-us");

window.addEventListener("load", function () {
    document.addEventListener("scroll", function () {
        if (window.scrollY >= target.getBoundingClientRect().top) {
            animatedImage.classList.add("about-us-image-animation");
        }
    })
})

// Gallery
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


// Contqact US
function sendFormInfo() {
    alert("Thank you,Your message has been sent!");
}