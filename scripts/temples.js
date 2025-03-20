document.addEventListener("DOMContentLoaded", function () {
    const menuButton = document.querySelector(".menu-button");
    const closeButton = document.querySelector(".close-button");
    const navMenu = document.querySelector("nav");

    // Open menu when clicking the hamburger button
    menuButton.addEventListener("click", function () {
        navMenu.classList.add("active");
    });

    // Close menu when clicking the "X" button
    closeButton.addEventListener("click", function () {
        navMenu.classList.remove("active");
    });
});
