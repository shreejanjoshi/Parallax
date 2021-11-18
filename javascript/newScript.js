var key = document.querySelectorAll(".key");

for (var i = 0; i < key.length; i++) {
    key[i].addEventListener("click", function () {

    var buttonInnerHTML = this.innerHTML;
    
    makeSound(buttonInnerHTML);    
    });
}

addEventListener("keydown",function(event){

    makeSound(event.key);
})

function makeSound(key){

    if(key == "h"){
        var audio = new Audio("audio/horn.mp3");
        audio.play();
    } 

    if(key == "m"){
        var audio = new Audio("audio/music.mp3");
        audio.play();
    }
    
    if(key == "s"){
        var stopOrStart = document.querySelectorAll(".moveRight")
        stopOrStart.classList.toggle("moveRight");
    }
}