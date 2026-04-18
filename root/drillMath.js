

var soundsArray = [];
soundsArray[0] = new Audio('resources/Drilly_Hi2.mp3');
soundsArray[0].volume = 0.20;
soundsArray[1] = new Audio('resources/Drilly_WhatDidYouFind.mp3');
soundsArray[1].volume = 0.20;
soundsArray[2] = new Audio('resources/Drilly_HowAreYou.mp3');
soundsArray[2].volume = 0.20;
soundsArray[3] = new Audio('resources/Drilly_R3.mp3');
soundsArray[3].volume = 0.20;
soundsArray[4] = new Audio('resources/Drilly_R4.mp3');
soundsArray[4].volume = 0.20;
soundsArray[5] = new Audio('resources/Drilly_R5.mp3');
soundsArray[5].volume = 0.20;
soundsArray[6] = new Audio('resources/Drilly_R6.mp3');
soundsArray[6].volume = 0.20;
soundsArray[7] = new Audio('resources/Drilly_R7.mp3');
soundsArray[7].volume = 0.20;
soundsArray[8] = new Audio('resources/Drilly_R2.mp3');
soundsArray[8].volume = 0.20;
soundsArray[9] = new Audio('resources/Drilly_ThankYou.mp3');
soundsArray[9].volume = 0.20;
soundsArray[10] = new Audio('resources/Drilly_Different.mp3');
soundsArray[10].volume = 0.20;

function playSecretButton(index){
    soundsArray[index].play();
}
function stopSecretButton(index){
    soundsArray[index].pause();
    soundsArray[index].currentTime = 0;
}

function drillySpeak(duration){
    document.getElementById("drillyPic").src = "resources/DrillyChatter.gif"
    setTimeout(() => {
        document.getElementById("drillyPic").src = "resources/Drillyneutral.png"
    }, duration);
}

window.onload = function() {
    playSecretButton(0);
    drillySpeak(470)
};

function thanks(event, url){
    event.preventDefault();
    playSecretButton(9);
    drillySpeak(870)
    setTimeout(() => {
        window.location.href = url;
    }, 1175);
}

document.getElementById("speakButton").addEventListener('click', function(){ playSecretButton((Math.floor(Math.random()*6 + 3))); drillySpeak(900);});

var susClickCount = 0;
susButton = document.getElementById("suspiciousButton");
susButton.addEventListener('click',checkToPlaySong);
function checkToPlaySong(){
    susClickCount += 1;
    susButton.innerHTML = "Unsuspicous Button (" + susClickCount + ")";
    if(susClickCount == 47){
        drillySpeak(1200);
        playSecretButton(1);
    }else{
        stopSecretButton(1);
    }

    if(susClickCount == 21){
        drillySpeak(1000);
        playSecretButton(2);
    }else{
        stopSecretButton(2);
    }

    if(susClickCount == 1){
        drillySpeak(1200);
        playSecretButton(10);
        setTimeout(() => {
            document.getElementById("drillyPic").src = "resources/DrillyBow.png";
        }, 1275);
    }else{
        stopSecretButton(10);
    }

}