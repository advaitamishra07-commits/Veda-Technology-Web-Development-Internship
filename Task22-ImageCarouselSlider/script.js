const slides = document.querySelectorAll(".slide");
const prevBtn = document.getElementById("prevBtn");
const nextBtn = document.getElementById("nextBtn");
const indicatorsContainer = document.getElementById("indicators");
const carousel = document.querySelector(".carousel");

let currentSlide = 0;
let autoSlide;

/* Create indicators */

slides.forEach((slide, index) => {
    const indicator = document.createElement("button");

    indicator.classList.add("indicator");

    if (index === 0) {
        indicator.classList.add("active");
    }

    indicator.addEventListener("click", () => {
        showSlide(index);
        restartAutoSlide();
    });

    indicatorsContainer.appendChild(indicator);
});

const indicators = document.querySelectorAll(".indicator");

/* Show selected slide */

function showSlide(index) {

    if (index >= slides.length) {
        currentSlide = 0;
    } else if (index < 0) {
        currentSlide = slides.length - 1;
    } else {
        currentSlide = index;
    }

    slides.forEach((slide, i) => {
        slide.classList.toggle("active", i === currentSlide);
    });

    indicators.forEach((indicator, i) => {
        indicator.classList.toggle(
            "active",
            i === currentSlide
        );
    });
}

/* Next slide */

function nextSlide() {
    showSlide(currentSlide + 1);
}

/* Previous slide */

function previousSlide() {
    showSlide(currentSlide - 1);
}

/* Button events */

nextBtn.addEventListener("click", () => {
    nextSlide();
    restartAutoSlide();
});

prevBtn.addEventListener("click", () => {
    previousSlide();
    restartAutoSlide();
});

/* Automatic rotation */

function startAutoSlide() {
    autoSlide = setInterval(nextSlide, 4000);
}

function stopAutoSlide() {
    clearInterval(autoSlide);
}

function restartAutoSlide() {
    stopAutoSlide();
    startAutoSlide();
}

/* Pause when mouse is over carousel */

carousel.addEventListener("mouseenter", stopAutoSlide);

carousel.addEventListener("mouseleave", startAutoSlide);

/* Start slider */

startAutoSlide();