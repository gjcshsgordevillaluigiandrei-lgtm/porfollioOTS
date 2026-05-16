// script.js

document.getElementById("btn").addEventListener("click", function() {

    alert("Welcome to my portfolio!");

    document.querySelector(".projects").scrollIntoView({
        behavior: "smooth"
    });

});