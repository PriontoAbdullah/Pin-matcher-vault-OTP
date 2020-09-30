const outputNumber = document.getElementById('outputNumber');
const failed = document.getElementById('failed');
const success = document.getElementById('success');
const iteration = document.getElementById('iteration');
const submitButton = document.getElementById('submit-btn');

failed.style.display = 'none';
success.style.display = 'none';

function status() {
    setTimeout(() => {
        failed.style.display = 'none';
        success.style.display = 'none';
    }, 3000);
};

function clearData() {
    document.getElementById('generatePinNumber').value = '';
    document.getElementById('outputNumber').value = '';
}

function pinGenerator() {
    const generatePinNumber = Math.floor(Math.random() * 9000 + 1000);
    document.getElementById('generatePinNumber').value = generatePinNumber.toString();
}

function getValue(data) {
    switch (data) {
        case 'C':
            outputNumber.value = '';
            break;
        case '<':
            outputNumber.value = outputNumber.value.substr(0, outputNumber.value.length - 1);
            break;
        default:
            if (outputNumber.value.length < 4) {
                outputNumber.value += data;
                break;
            }
    }
}

let attempt = 2;

function submitted() {
    const pinNumber = document.getElementById('generatePinNumber').value;
    const submittedNumber = document.getElementById('outputNumber').value;

    if (submittedNumber === '') {
        failed.style.display = 'none';
        success.style.display = 'none';
    }
    else if (pinNumber === submittedNumber) {
        success.style.display = 'block';
        failed.style.display = 'none';
        status();
        clearData();
    }
    else {
        failed.style.display = 'block';
        success.style.display = 'none';
        status();
        clearData();

        iteration.innerText = attempt;
        attempt--;

        if (attempt < 0) {
            submitButton.disabled = true;
            submitButton.style.backgroundColor = 'red';
        }
    }
}
