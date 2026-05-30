var beeping;
let audio = new Audio("resources/TheWhere.ogg");
audio.volume = 0.08;
let audio2 = new Audio("resources/Oh, The Where.opus");
audio2.volume = 0.23;

window.onload = function() {
    playScaryBeep();
    var whereImg = document.createElement('img');
    whereImg.src = 'resources/WhereFull.png';
    whereImg.style.width = "55%";
    whereImg.style.opacity = "0.02";
    document.body.appendChild(whereImg);

    setTimeout(() => {
        clearInterval(beeping);
        setTimeout(() => {
            audio2.play();
            whereImg.style.opacity = "0.042";
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