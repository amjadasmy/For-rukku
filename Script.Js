const button = document.getElementById("openBtn");

const start = document.getElementById("start");

const message = document.getElementById("message");

button.addEventListener("click", () => {

    button.disabled = true;

    start.style.display = "none";

    message.style.display = "block";

    setTimeout(() => {

        message.classList.add("show");

    }, 100);

});document.addEventListener("DOMContentLoaded", function () {

    const button = document.getElementById("openBtn");
    const start = document.getElementById("start");
    const message = document.getElementById("message");

    button.onclick = function () {

        start.style.display = "none";

        message.style.display = "block";

        setTimeout(function () {
            message.classList.add("show");
        }, 50);

    };

});
