let isOver18Date = false;
let isOver18Box = false;
let checkboxArray = [false, false, false, false, false]
let badIndex = -1;
let isOver18Value = false;
var attempt = 0
function verifyAge() {

    const dob = document.getElementById('dob').value;
    const ageInput = parseInt(document.getElementById('ageInput').value);

    if (dob) {
        const birthDate = new Date(dob);
        const today = new Date();
        const ageFromDob = today.getFullYear() - birthDate.getFullYear();
        const monthDiff = today.getMonth() - birthDate.getMonth();
        const dayDiff = today.getDate() - birthDate.getDate();
        if (ageFromDob > 18 || (ageFromDob === 18 && (monthDiff > 0 || (monthDiff === 0 && dayDiff >= 0)))) {
            isOver18Date = true;
        }
    }

    isOver18Box = updateCheckboxArray();

    if (!isNaN(ageInput) && ageInput >= 18) {
        isOver18Value = true;
    }

    if (isOver18Box && isOver18Date && isOver18Value) {
        window.location.href = "Garn47Himself.html";
    } else {
        if (attempt >= 3){
            window.location.href = "https://www.google.com";
        }
        sendProperValidate();
    }
}

function updateCheckboxArray(){
    const checkbox1 = document.getElementById('over18Checkbox1').checked;
    const checkbox2 = document.getElementById('over18Checkbox2').checked;
    const checkbox3 = document.getElementById('over18Checkbox3').checked;
    const checkbox4 = document.getElementById('over18Checkbox4').checked;
    const checkbox5 = document.getElementById('over18Checkbox5').checked;

    if (checkbox5) {
        checkboxArray.splice(4,1,checkbox5);
    }else{
        checkboxArray.splice(4,1,false);
        badIndex = 4;
    }

    if (checkbox4) {
        checkboxArray.splice(3,1,checkbox4);
    }else{
        checkboxArray.splice(3,1,false);
        badIndex = 3;
    }

    if (checkbox3) {
        checkboxArray.splice(2,1,checkbox3);
    }else{
        checkboxArray.splice(2,1,false);
        badIndex = 2;
    }

    if (checkbox2) {
        checkboxArray.splice(1,1,checkbox2);
    }else{
        checkboxArray.splice(1,1,false);
        badIndex = 1;
    }

    if (checkbox1) {
        checkboxArray.splice(0,1,checkbox1);
    }else{
        checkboxArray.splice(0,1,false);
        badIndex = 0;
    }

    return checkboxArray.every(Boolean);
}

function checkboxArrayString(){
    let string = "The boxes that have not been checked are:";
    for (let i = 0; i < checkboxArray.length; i++){
        if(!checkboxArray[i]){
            string = string + " " + (i+1);
            if(i != checkboxArray.length-1){
                string = string + ",";
            }
        }
    }
    return string;
}

function sendProperValidate(){
    attempt += 1;
    const form = document.getElementById('ageForm');

    if(!isOver18Box){
        document.getElementById('over18Checkbox1').setCustomValidity("");
        document.getElementById('over18Checkbox2').setCustomValidity("");
        document.getElementById('over18Checkbox3').setCustomValidity("");
        document.getElementById('over18Checkbox4').setCustomValidity("");
        document.getElementById('over18Checkbox5').setCustomValidity("");
        document.getElementById('over18Checkbox' + (badIndex+1)).setCustomValidity("This box must be checked. You may only do so if you are over 18.");
    }else{
        document.getElementById('over18Checkbox1').setCustomValidity("");
        document.getElementById('over18Checkbox2').setCustomValidity("");
        document.getElementById('over18Checkbox3').setCustomValidity("");
        document.getElementById('over18Checkbox4').setCustomValidity("");
        document.getElementById('over18Checkbox5').setCustomValidity("");
    }
    if(!isOver18Date){
        document.getElementById('dob').setCustomValidity("The date must be at least 18 years ago.");
    }else{
        document.getElementById('dob').setCustomValidity("");
    }
    if(!isOver18Value){
        document.getElementById('ageInput').setCustomValidity("You must be 18 or older.");
    }else{
        document.getElementById('ageInput').setCustomValidity("");
    }
    form.reportValidity();
}