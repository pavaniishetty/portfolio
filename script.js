let message = document.getElementById("welcome-message");
message.textContent = "Welcome to my portfolio!👋";

let button = document.getElementById("change-message");
button.addEventListener("click", function() {
    if (message.textContent === "Welcome to my portfolio! 👋") {
        message.textContent = "Thanks for visiting my portfolio! 😊";
    } else {
        message.textContent = "Welcome to my portfolio! 👋";
    }
});