const startDraw = document.getElementById('startDraw');
const numbersDisplay = document.getElementById('numbersContainer');

const maxNum = 60;
let drawnNumbers = [];

function getRandom(min, max) {
    return Math.random() * (max - min + 1) + min;
}

startDraw.addEventListener('click', drawNumbers)

const drawNumbers = () => {
    numbersDisplay.innerHTML = '';
    setInterval(() => {
        if (!drawnNumbers.length === 6) {
            let currNum = getRandom(1, 60)

        } else {

        }
    }, 1000)
}+