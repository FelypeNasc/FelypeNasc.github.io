// script variables
let inputtedNumbers = [];
let destinationNumbers = [];

// html elements 
const number1 = document.getElementById('number1');
const number2 = document.getElementById('number2');
const number3 = document.getElementById('number3');
const number4 = document.getElementById('number4');
parseInt(destinationNumbers[0] = document.getElementById('destinationNumber1'));
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
    inputtedNumbers = [parseInt(number1.value), parseInt(number2.value), parseInt(number3.value), parseInt(number4.value)];
    pushToDestiny();
}

function invertOrder(numbers) {
    let inverted = [];
    for (let i = 0; i < numbers.length; i++) {
        inverted[numbers.length - i -1] = numbers[i];
    }
    for (let i = 0; i < inverted.length; i++) {
        inputtedNumbers[i] = inverted[i];
    }
    pushToDestiny();
}

function sortNumbers (numbers) {
    for (let i = 0; i < numbers.length; i++) {
        for (let x = 0; x < numbers.length-1; x++) {
            if (numbers[x] > numbers[x + 1]) {
                [numbers[x], numbers[x+1]] = [numbers[x+1], numbers[x]];
            }
        }
    }
    pushToDestiny();
    console.log(numbers)
}
