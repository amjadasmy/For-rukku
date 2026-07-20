document.addEventListener("DOMContentLoaded", function () {

    const button = document.getElementById("openBtn");
    const start = document.getElementById("start");
    const message = document.getElementById("message");

    if (!button || !start || !message) {
        console.log("Required elements not found");
        return;
    }

    button.addEventListener("click", function () {

        // Prevent clicking multiple times
        button.disabled = true;

        // Hide opening screen
        start.style.display = "none";

        // Show message
        message.style.display = "block";

        // Smooth reveal animation
        setTimeout(function () {
            message.classList.add("show");
        }, 100);

    });

});
