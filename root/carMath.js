

var soundsArray = [];
soundsArray[0] = new Audio("resources/Car's_Little_Song.opus");
soundsArray[0].volume = 0.14;
soundsArray[1] = new Audio('resources/Car_IAm.mp3');
soundsArray[1].volume = 0.1;
soundsArray[2] = new Audio('resources/Car_CoolStuff.ogg');
soundsArray[2].volume = 0.1;
soundsArray[3] = new Audio('resources/Car_NotGarn.ogg');
soundsArray[3].volume = 0.1;
soundsArray[4] = new Audio('resources/The Where (Car).opus');
soundsArray[4].volume = 0.1;

function playSecretButton(index){
    soundsArray[index].play();
}
function stopSecretButton(index){
    soundsArray[index].pause();
    soundsArray[index].currentTime = 0;
}

window.onload = function() {
    playSecretButton(1);
    drillySpeak(470)
};

var susClickCount = 0;
var susButton = document.getElementById("suspiciousButton");
var secretButton = document.getElementById("secretButton");
susButton.addEventListener('click',checkToPlaySong);
secretButton.addEventListener('click',theWhereCar);
function checkToPlaySong(){
    susClickCount += 1;
    susButton.textContent = "Unsuspicous Button (" + susClickCount + ")";

    if(susClickCount == 1){
        playSecretButton(0);
        susButton.textContent = "This is Car's first hit song! (1)"
    }else{
        stopSecretButton(0);
    }

    if(susClickCount == 47){
        playSecretButton(3);
    }else{
        stopSecretButton(3);
    }

    if(susClickCount == 100){
        playSecretButton(2);
    }else{
        stopSecretButton(2);
    }
}

var secretClickedCount = 0;
function theWhereCar(){
    secretClickedCount += 1;
    if(secretClickedCount >= 1 && secretClickedCount < 10){
        playSecretButton(4);
    }else{
        stopSecretButton(0);
    }
}