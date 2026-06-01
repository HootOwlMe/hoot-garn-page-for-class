var beeping;
let audio = new Audio("resources/TheWhere.ogg");
audio.volume = 0.08;
let audio2 = new Audio("resources/Oh, The Where.opus");
audio2.volume = 0.23;

let playButton = document.getElementById('playButton');
playButton.onclick = function() {
    playButton.hidden = 'true';
    playScaryBeep();
    var whereImg = document.createElement('img');
    whereImg.src = 'resources/WhereFull.png';
    whereImg.style.width = "45%";
    whereImg.style.opacity = "0.05";
    document.body.appendChild(whereImg);

    setTimeout(() => {
        clearInterval(beeping);
        setTimeout(() => {
            audio2.play();
            whereImg.style.opacity = "0.1";
            setTimeout(() => {
                whereImg.style.opacity = "0.85";
            }, 17000);
        }, 1800);

    }, 35990);
};

function playScaryBeep(){
    beeping = setInterval(() => {
        audio.play();
    }, 3541);
}