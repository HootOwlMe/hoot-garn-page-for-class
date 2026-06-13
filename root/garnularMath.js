

var yearResultBox = document.getElementById('yearOut');
var yearInputBox = document.getElementById('yearBox');
function deduceTimeSinceGarn(year){
    var yearReleased = 2024;

    year = year.replace(/\D/g,"");
    yearInputBox.value = year;

    if (year == 47){
        if (!localStorage.getItem('47')){
            window.alert("You got the: " + secretArray[5].secretTitle() + " achievement!");
            localStorage.setItem('47','true');
        }
    }

    //if, for some reason, the user enters the year with only the last two digits. ex: if they put '2025' in as '25'
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
        if (!localStorage.getItem('TotalGarn')){
            window.alert("You got the: " + secretArray[3].secretTitle() + " achievement!");
            localStorage.setItem('TotalGarn','true');
        }
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


var auctionHouse = document.getElementById('auctionHouse');
const url = 'https://api.hypixel.net/v2/skyblock/auctions_ended'
window.onload = function() {

    var trade = "none";
    fetch(url)
        .then(response => {
            return response.json();
    })
        .then(data => {
            trade = data.auctions[0];
            let tradeItem = data.auctions[0].item_bytes;
            let tradeCost = data.auctions[0].price;

            let temp = atob(tradeItem);
            temp = Uint8Array.from(temp, c => c.charCodeAt(0));

            let penultimate = pako.ungzip(temp, { to: "string" })
            let final = penultimate.substring(penultimate.indexOf("Name"));
            final = final.substring(8, final.indexOf("\n")-1);
            let finalCleaned = final.replace(/[^a-zA-Z0-9\s]/g, " ");

            console.log(finalCleaned);
            auctionHouse.textContent = "The last auction trade in Hypixel Skyblock was: " + finalCleaned + " | For: " + tradeCost + " coins.";
    })
        .catch(err => {
            console.log("uh oh: " + err);
            auctionHouse.textContent = "It is broken.";
    });
};


