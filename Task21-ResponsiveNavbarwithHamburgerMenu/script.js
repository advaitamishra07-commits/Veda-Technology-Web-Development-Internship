// Select elements
const menuToggle = document.getElementById("menuToggle");
const navMenu = document.getElementById("navMenu");

// Toggle mobile menu
menuToggle.addEventListener("click", function () {
    menuToggle.classList.toggle("active");
    navMenu.classList.toggle("active");
});

// Close menu when a navigation link is clicked
const navLinks = document.querySelectorAll(".nav-menu a");

navLinks.forEach(function (link) {
    link.addEventListener("click", function () {
        menuToggle.classList.remove("active");
        navMenu.classList.remove("active");
    });
});