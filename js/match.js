document.getElementById('btn-generate').addEventListener('click', function(){
    let pinGenerateField = document.getElementById('pin-generator-field');
    
    let randomNumber = Math.floor(1000 + Math.random() * 9000);
    pinGenerateField.value = randomNumber;
});

document.getElementById('calculator').addEventListener('click', function(event){
    let pinMatchField = document.getElementById('pin-match-field');
    let pinAdd = pinMatchField.value;
    let number = event.target.innerText;
    if (isNaN(number)){
        if (number === 'C'){
            pinMatchField.value = '';
        }
        else if (number === '<'){
            pinMatchField.value = pinAdd.slice(0, -1);
        }
    }
    else{
        pinMatchField.value = pinAdd + number;
    }
});

document.getElementById('submit-match').addEventListener('click', function(){
    let pinGenerateField = document.getElementById('pin-generator-field');
    let randomNumber = pinGenerateField.value;
    let pinMatchField = document.getElementById('pin-match-field');
    let pinAdd = pinMatchField.value;

    let notifyFailed = document.getElementById('notify-failed');
    let notifySuccess = document.getElementById('notify-success');

    if(parseInt(randomNumber) === parseInt(pinAdd)){
        notifyFailed.style.display = 'none';
        notifySuccess.style.display = 'block';
        pinMatchField.value = '';
    }
    else{
        let notifySuccess = document.getElementById('notify-success');
        notifyFailed.style.display = 'block';
        notifySuccess.style.display = 'none';
        pinMatchField.value = '';
    }
});