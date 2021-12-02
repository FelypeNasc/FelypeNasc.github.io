// script variables
let inputtedNumbers = [];
let destinationNumbers = [];

// html elements 
const number1 = document.getElementById('number1');
const number2 = document.getElementById('number2');
const number3 = document.getElementById('number3');
const number4 = document.getElementById('number4');
destinationNumbers[0] = document.getElementById('destinationNumber1');
destinationNumbers[1] = document.getElementById('destinationNumber2');
destinationNumbers[2] = document.getElementById('destinationNumber3');
destinationNumbers[3] = document.getElementById('destinationNumber4');
const sendButton = document.getElementById('sendButton');
const invertButton = document.getElementById('invertButton');
const sortButton = document.getElementById('sortButton');

// eventlisteners
sendButton.addEventListener('click', getNumbers)
invertButton.addEventListener('click', () => {invertOrder(inputtedNumbers)})
sortButton.addEventListener('click', () => {sortNumbers(inputtedNumbers)})

// internal functions
function pushToDestiny() {
    destinationNumbers[0].value = inputtedNumbers[0];
    destinationNumbers[1].value = inputtedNumbers[1];
    destinationNumbers[2].value = inputtedNumbers[2];
    destinationNumbers[3].value = inputtedNumbers[3];
}

// button functions

function getNumbers () {
    inputtedNumbers = [number1.value, number2.value, number3.value, number4.value];
    pushToDestiny();
}

function invertOrder(numbers) {
    let inverted = [];
    for (let i = 0; i < numbers.length; i++) {
        inverted[numbers.length - i] = numbers[i];
    }
    for (let i = 0; i < inverted.length; i++) {
        destinationNumbers[i] = inverted[i];
    }
}

function sortNumbers (numbers) {
    let sorted = [];
    for (let i = 0; numbers.length != sorted.length; i++) {
        if (i == 0) {
            sorted.push(numbers[i])
        } else {
            for (let a = 0; a < sorted.length; a++) {
                if (numbers[i] > sorted[sorted.length - 1]) {
                    sorted.push(numbers[i])
                    break
                } else if (numbers[i] <= sorted[a]) {
                    sorted.splice(a, 0, numbers[i])
                    break
                }
            }
        }
    }
    for (let i = 0; i < sorted.length; i++) {
        inputtedNumbers[i] = sorted[i];
    }
    pushToDestiny()
}
