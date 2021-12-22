const startDraw = document.getElementById('startDraw');
const numbersDisplay = document.getElementById('numbersContainer');

const maxNum = 60;
const maxNumToDraw = 6;
let numbersDrawn = [];

function getRandom(min, max) {
    return Math.random() * (max - min + 1) + min;
}

startDraw.addEventListener('click', drawNumbers)

function pushNum(num) {
    numbersDrawn.push(num)
}

function drawNumbers() {
    numbersDisplay.innerHTML = '';
    numbersDrawn = []
    let tmp = setInterval(() => {
        let currNum = Math.ceil(getRandom(0, maxNum));

        while (numbersDrawn.includes(currNum)) {
            currNum = Math.ceil(getRandom(0, maxNum))
        }

        if (numbersDrawn.length !== maxNumToDraw) {
            numbersDrawn.push(currNum)
            numbersDisplay.innerHTML += `<div class=numbers>${currNum}</div>`
        } else {
            clearInterval(tmp)
        }
    }, 1000)
}
