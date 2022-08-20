function getPin() {
    const pin = generatePin();
    const pinString = pin + '';
    if (pinString.length === 4) {
        return pin;
    }
    else {
        // console.log('pin not 4 digit', pin)
        return getPin();
    }
}

function generatePin() {
    const random = Math.round(Math.random() * 10000);
    return random;
}

document.getElementById('generate-pin').addEventListener('click', function () {
    const pin = getPin();
    // display pin
    const displayPin = document.getElementById('display-pin');
    displayPin.value = pin;
    // const pinSuccessMessage = document.getElementById('pin-success');
    // pinSuccessMessage.style.display = 'none';
    // const pinFailurMessage = document.getElementById('pin-failur');
    // pinFailurMessage.style.display = 'none';
})

document.getElementById('calculetor').addEventListener('click', function (event) {
    const number = event.target.innerText;
    const typedNumberField = document.getElementById('typed-number');
    const previousTypedNumber = typedNumberField.value;
    if (isNaN(number)) {
        if (number === 'C') {
            typedNumberField.value = '';
        }
        else if (number === '<') {
            const digits = previousTypedNumber.split('');
            digits.pop();
            const remainingDigits = digits.join('');
            typedNumberField.value = remainingDigits;
        }
    }
    else {
        const newTypedNumber = previousTypedNumber + number;
        typedNumberField.value = newTypedNumber;
    }
})

document.getElementById('verify-pin').addEventListener('click', function () {
    const displayPinField = document.getElementById('display-pin');
    const currentPin = displayPinField.value;
    const typedNumberField = document.getElementById('typed-number');
    const typedNumber = typedNumberField.value;
    const pinSuccessMessage = document.getElementById('pin-success');
    const pinFailurMessage = document.getElementById('pin-failur');
    if (currentPin === typedNumber) {
        pinSuccessMessage.style.display = 'block';
        pinFailurMessage.style.display = 'none';
    }
    else {
        pinFailurMessage.style.display = 'block';
        pinSuccessMessage.style.display = 'none';
    }
})