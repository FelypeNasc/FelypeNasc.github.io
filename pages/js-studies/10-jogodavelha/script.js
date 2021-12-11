// HTML variables
const cells = Array.from(document.querySelectorAll('.cell'));
const currentPlayerDisplay = document.getElementById('playerTurnImg');
const resultContainer = document.querySelector('.resultContainer');
const resultDisplay = document.getElementById('resultDisplay');
const restartButton = document.getElementById('restartButton');

//script variables
const winConditions = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
]
let gameBoard = [
    '', '', '',
    '', '', '',
    '', '', ''
]
let currentPlayer = 'O';
let gameOver = false;
let nPlays = 0;
let winner = '';

// listeners
cells.forEach( (cell, index) => {
    cell.addEventListener('click', () => makePlay(cell, index));
})
restartButton.addEventListener('click', restartGame);

// display 
if (currentPlayer === 'O') {
    currentPlayerDisplay.classList.remove('checkedX');
    currentPlayerDisplay.classList.add('checkedO');
} else if (currentPlayer === 'X') {
    
}

// functions
function makePlay(cell, index) {
    nPlays += 1
    if(!gameOver) {
        cell.classList.add(`checked${currentPlayer}`);
        function updateGameBoardArray(index) {
            gameBoard[index] = currentPlayer;
        }
        updateGameBoardArray(index)
        console.log(gameBoard)
        if (currentPlayer == 'O') {
            currentPlayerDisplay.classList.remove('checkedO');
            currentPlayerDisplay.classList.add('checkedX');
        } else {
            currentPlayerDisplay.classList.remove('checkedX');
            currentPlayerDisplay.classList.add('checkedO');
        }
        verifyGameStatus()
        if (currentPlayer == 'O') {
            currentPlayer = 'X';
        } else {
            currentPlayer = 'O';
        }
    }
}

function restartGame () {
    gameBoard = ['', '', '','', '', '','', '', '']
    gameOver = false;
    nPlays = 0;
    winner ='';
    
    resultContainer.classList.add('hide');
    resultDisplay.classList.remove('checkedX')
    resultDisplay.classList.remove('checkedO')
    resultDisplay.innerHTML = ''
    currentPlayerDisplay.classList.add('checkedO');

    currentPlayer = 'O';
    cells.forEach( (cell) => {
        cell.classList.remove('checkedX');
        cell.classList.remove('checkedO');
    });
}

function verifyGameStatus() {
    for (let i = 0; i <= 7; i++) {
        const winCondition = winConditions[i];
        const a = gameBoard[winCondition[0]];
        const b = gameBoard[winCondition[1]];
        const c = gameBoard[winCondition[2]];
        if (a === '' || b === '' || c === '') {
            continue;
        }
        if (a === b && b === c) {
            winner = currentPlayer;
            console.log(winner)
            showResults()
            break;
        }
    }
    if (nPlays === 9) {
        gameOver = true;
        showResults()
    }
}

function showResults() {
    currentPlayerDisplay.classList.remove('checkedX');
    currentPlayerDisplay.classList.remove('checkedO');
    if (winner === 'X') {
        resultDisplay.classList.add('checkedX')
    } else if (winner === 'O') {
        resultDisplay.classList.add('checkedO')
    } else {
        resultDisplay.innerHTML = 'Jogo empatado :('
    }
    resultContainer.classList.remove('hide');
};
