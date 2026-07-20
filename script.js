document.addEventListener("DOMContentLoaded", function(){

const button = document.getElementById("openBtn");
const start = document.getElementById("start");
const message = document.getElementById("message");


const text = `From the moment you came into my life,
everything became brighter.

Your smile is the most beautiful thing I have ever seen.
Every conversation with you becomes a memory I never want to lose.

I don't promise a perfect life,
but I promise I will always give my best to make you smile.

I will stand beside you in your happiest moments
and hold your hand through every difficult day.

Ruska... ❤️

Will you let me be the one who loves you today,
tomorrow,
and every day after that?`;


button.addEventListener("click", function(){

// Hide first page
start.style.display = "none";


// Show message area
message.style.display = "block";

message.innerHTML = `
<h1>My Dearest Ruska ❤️</h1>

<p id="typing"></p>

<div class="sign">
Forever Yours ❤️
<br>
<span>Amjad</span>
</div>
`;


const typing = document.getElementById("typing");

let index = 0;


function typingEffect(){

if(index < text.length){

let letter = text[index];

if(letter === "\n"){

typing.innerHTML += "<br>";

}
else{

typing.innerHTML += letter;

}


index++;

setTimeout(typingEffect, 180);

}

}


// Start typing
typingEffect();


});

});
