// $(document).ready(function(){

//     $background = $('#background');

//     $car = $('.car');

//     $(document).on('keypress', function(e){
//         if(e.which == 115){
//             $($background).toggleClass('moveRight');
//         }
//     })
// });

let key = document.querySelectorAll(".key");
let stopCarOrStart = document.getElementById("background");
let moveCloudsOrStop = document.getElementById("clouds");
let moveNearCloudsOrStop = document.getElementById("nearClouds");
let suspension = document.getElementById("car");

// let toggle = document.querySelectorAll(".toggle");

for (var i = 0; i < key.length; i++) {
    key[i].addEventListener("click", function () {

        var buttonInnerHTML = this.innerHTML;

        makeSound(buttonInnerHTML);
    });
}

// toggle.addEventListener('click', () => {
//     stopCarOrStart.classList.remove('moveRight');
// })

// var startCar = document.querySelectorAll(".moveRight")
// stopOrStart.classList.add(".moveRight");

document.addEventListener("keydown", function (event) {

    // makeSound(event.key);
    let key = event.key;
    if (key == "h") {
        var audio = new Audio("audio/horn.mp3");
        audio.play();
    }

    if (key == "m") {
        var audio = new Audio("audio/music.mp3");
        audio.play();
    }

    // not stoping
    if (key == "s") {
        console.log("Hello");
        stopCarOrStart.classList.toggle("moveRight");
        moveCloudsOrStop.classList.toggle("moveRightClouds");
        moveNearCloudsOrStop.classList.toggle("moveRightNearClouds");
        suspension.classList.toggle("suspension");
    }
})