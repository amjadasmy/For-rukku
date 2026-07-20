document.addEventListener("DOMContentLoaded", function(){

const button = document.getElementById("openBtn");

const start = document.getElementById("start");

const message = document.getElementById("message");


button.addEventListener("click", function(){

start.style.display = "none";

message.classList.add("show");

});

});
