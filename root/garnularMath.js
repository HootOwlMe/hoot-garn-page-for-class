
var yearResultBox = document.getElementById("yearOut");
function deduceTimeSinceGarn(year){
    var yearReleased = 2024
    if (year == year%100){
        yearReleased = year - (yearReleased%100);
    }else{
        yearReleased = year - yearReleased;
    }

    try{
        if(year == ""){
            throw "You need to enter a year for this to work!"
        }else if(yearReleased < 0){
            throw "Impossible.";
        }
        yearResultBox.innerHTML = 'It has been ' + yearReleased + ' years';
    }catch(errorMessage){
        yearResultBox.innerHTML = errorMessage;
    }
}

var soundsArray = [];
soundsArray[0] = new Audio('resources/Garn47_Garnular1.ogg');
soundsArray[0].volume = 0.20;
soundsArray[1] = new Audio('resources/21.mp3');
soundsArray[1].volume = 0.20;
soundsArray[2] = new Audio('resources/kendrickSaysNo.mp3');
soundsArray[2].volume = 0.20;

function playSecretButton(index){
    soundsArray[index].play();
}
function stopSecretButton(index){
    soundsArray[index].pause();
    soundsArray[index].currentTime = 0;
}

var susClickCount = 0;
susButton = document.getElementById("suspiciousButton");
susButton.addEventListener('click',checkToPlaySong);
function checkToPlaySong(){
    susClickCount += 1;
    susButton.innerHTML = "Unsuspicous Button (" + susClickCount + ")";
    if(susClickCount == 47){
        playSecretButton(0);
    }else{
        stopSecretButton(0);
    }

    if(susClickCount == 21){
        playSecretButton(1);
    }else{
        stopSecretButton(1);
    }

    if(susClickCount == 67){
        playSecretButton(2);
    }else{
        stopSecretButton(2);
    }

}