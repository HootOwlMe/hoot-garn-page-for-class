let isOver18Date = false;
let isOver18Box = false;
let isOver18Value = false;
var attempt = 0
function verifyAge() {

    const dob = document.getElementById('dob').value;
    const checkbox = document.getElementById('over18Checkbox').checked;
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

    if (checkbox) {
        isOver18Box = true;
    }

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


function sendProperValidate(){
    attempt += 1;
    const form = document.getElementById('ageForm');

    if(!isOver18Box){
        document.getElementById('over18Checkbox').setCustomValidity("This box must be checked. You may only do so if you are over 18.")
    }else{
        document.getElementById('over18Checkbox').setCustomValidity("")
    }
    if(!isOver18Date){
        document.getElementById('dob').setCustomValidity("The date must be at least 18 years ago.")
    }else{
        document.getElementById('dob').setCustomValidity("")
    }
    if(!isOver18Value){
        document.getElementById('ageInput').setCustomValidity("You must be 18 or older.")
    }else{
        document.getElementById('ageInput').setCustomValidity("")
    }
    form.reportValidity();

}