const header = document.querySelector("header");
const menu = document.querySelector("#menu-icon");
const navbar = document.querySelector(".navbar");

// Sticky header on scroll
window.addEventListener("scroll", function () {
    header.classList.toggle("sticky", window.scrollY > 0);
});

// Toggle menu on click
menu.onclick = () => {
    menu.classList.toggle("bx-x");
    navbar.classList.toggle("open");
};

// Close menu on scroll
window.onscroll = () => {
    menu.classList.remove('bx-x');
    navbar.classList.remove('open');
};
