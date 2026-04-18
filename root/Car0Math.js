

var soundsArray = [];
soundsArray[0] = new Audio('resources/KeepsTheme.mp3');
soundsArray[0].volume = 0.14;
soundsArray[1] = new Audio('resources/order66.mp3');
soundsArray[1].volume = 0.06;

function playSecretButton(index){
    soundsArray[index].play();
}
function stopSecretButton(index){
    soundsArray[index].pause();
    soundsArray[index].currentTime = 0;
}

function Car0Happy(){
    document.getElementById("car0Pic").style = "width: 36vw; height: auto;"
    document.getElementById("car0Pic").src = "resources/Car0Happy.gif"
    setTimeout(() => {
        document.getElementById("car0Pic").style = "width: 30vw; height: auto;"
        document.getElementById("car0Pic").src = "resources/CarZeroRender.png"
    }, 1300);
}

document.getElementById("celebrateButton").addEventListener('click', Car0Happy);

var susClickCount = 0;
susButton = document.getElementById("suspiciousButton");
susButton.addEventListener('click',checkToPlaySong);
function checkToPlaySong(){
    susClickCount += 1;
    susButton.innerHTML = "Unsuspicous Button (" + susClickCount + ")";

    if(susClickCount == 1){
        document.getElementById("car0Pic").style = "width: 20vw; height: auto;"
        document.getElementById("car0Pic").src = "resources/Keepsrend.png";
        document.getElementById("headerTitle").innerHTML = "This is <span style='color:red;'>Ke</span><span style='color:yellow;'>epM</span><span style='color:blue;'>eSa</span><span style='color:green;'>fe</span>! They were abandoned on a different planet by Carr...";
        document.getElementById("description").innerHTML = "KeepMeSafe has the power to draw their attacks into reality. Particularly powerful if you were to fight them...";
        document.getElementById("celebrateButton").hidden = true;

        playSecretButton(0);
    }else{
        document.getElementById("car0Pic").style = "width: 30vw; height: auto;"
        document.getElementById("car0Pic").src = "resources/CarZeroRender.png";
        document.getElementById("headerTitle").innerHTML = "This is Car0! They control the Marblob and befriend KeepMeSafe!";
        document.getElementById("description").innerHTML = "We don't know too much about them yet, but you do get to play as them!";
        document.getElementById("celebrateButton").hidden = false;
        stopSecretButton(0);
    }

    if(susClickCount == 66){
        playSecretButton(1);
    }else{

        stopSecretButton(1);
    }



}