
var soundsArray = [];
soundsArray[0] = new Audio("resources/Carr_WhatAreYouTrying.ogg");
soundsArray[0].volume = 0.14;
soundsArray[1] = new Audio('resources/Carr_ImBusy.ogg');
soundsArray[1].volume = 0.1;
soundsArray[2] = new Audio('resources/Carr_Wonder.ogg');
soundsArray[2].volume = 0.1;
soundsArray[3] = new Audio('resources/Carr_Bother.ogg');
soundsArray[3].volume = 0.1;
soundsArray[4] = new Audio('resources/The Where (Carr).opus');
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

};

var susClickCount = 0;
var susButton = document.getElementById("suspiciousButton");
var secretButton = document.getElementById("secretButton");
susButton.addEventListener('click',checkToPlaySong);
secretButton.addEventListener('click',theWhereCarr);
function checkToPlaySong(){
    susClickCount += 1;
    susButton.textContent = "Unsuspicous Button (" + susClickCount + ")";

    if(susClickCount == 1){
        playSecretButton(0);

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

let achieveFound = false;
var secretClickedCount = 0;
function theWhereCarr(){
    secretClickedCount += 1;
    if(secretClickedCount >= 1 && secretClickedCount < 10){
        playSecretButton(4);
    }else{
        stopSecretButton(0);
    }


    if (!localStorage.getItem('WhereCarr')){
        window.alert("You got the: " + secretArray[4].secretTitle() + " achievement!");
        achieveFound = true;
        carrFound = true;
        localStorage.setItem('WhereCarr','true');
    }
    if(carFound){
        ohTheWhere();
    }
}

var navList = document.getElementById("navList");
function ohTheWhere(){
    if(!document.getElementById('whereList')){
        let li = document.createElement("li");
        let a = document.createElement("a");

        a.href = "TheWhere.html";
        a.textContent = "Oh, The Where";
        a.style.color = "black";
        a.style.fontWeight = "999";
        li.id = "whereList";
        li.appendChild(a);
        navList.appendChild(li);
    }
}