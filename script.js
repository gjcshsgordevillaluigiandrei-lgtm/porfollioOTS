// script.js

const buttons = document.querySelectorAll(".nav-btn");
const sections = document.querySelectorAll(".section");

buttons.forEach(button => {

    button.addEventListener("click", () => {

        // REMOVE ACTIVE BUTTON
        buttons.forEach(btn => {
            btn.classList.remove("active");
        });

        // ADD ACTIVE BUTTON
        button.classList.add("active");

        // HIDE ALL SECTIONS
        sections.forEach(section => {
            section.classList.remove("active-section");
        });

        // SHOW SELECTED SECTION
        const target = button.getAttribute("data-section");

        document
        .getElementById(target)
        .classList.add("active-section");

    });

});