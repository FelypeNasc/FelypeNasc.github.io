// main screen variables 
const headerLink = document.getElementById('headerLink');
const mainScreen = document.getElementById('mainScreen');
const raceOptFast = document.getElementById('mainScreen-optionConteiner-op1');
const raceOptGreat = document.getElementById('mainScreen-optionConteiner-op2');
const raceOptEnduro = document.getElementById('mainScreen-optionConteiner-op3');
raceOptFast.addEventListener('click', () => {changeToRaceScreen(0)});
raceOptGreat.addEventListener('click', () => {changeToRaceScreen(1)});
raceOptEnduro.addEventListener('click', () => {changeToRaceScreen(2)});
headerLink.addEventListener('click', changeToMainScreen);

// race screen variables
const raceScreen = document.getElementById('raceScreen');
const raceName = document.getElementById('raceName');
const pedroConteiner = document.getElementById('pedro');
const jucaConteiner = document.getElementById('juca');
const ednaConteiner = document.getElementById('edna');
const winnerConteiner = document.getElementById('winner');
const runButton = document.getElementById('sendButton');
runButton.addEventListener('click', playRace);

// script variables
let chosenType = '';

// base functions
function createElementInside(location, elementType, elementID, elementClass) {
    let elementCreated = document.createElement(elementType);
    if (elementID != undefined) {
        elementCreated.setAttribute("id", elementID);
    }
    if (elementClass != undefined) {
        elementCreated.setAttribute("class", elementClass);
    }
    document.querySelector(location).appendChild(elementCreated);
}

function getRandom(min, max) {
    return Math.random() * (max - min + 1) + min;
}

// change screen functions
function changeToRaceScreen (option) {
    const raceTypes = Array(10, 70, 160);
    chosenType = raceTypes[option];
    if (option == 0) {
        raceName.innerHTML = 'Corrida rápida (10 voltas)';
    } else if (option == 1) {
        raceName.innerHTML = 'Grande Prêmio (70 voltas)';
    } else if (option == 2) {
        raceName.innerHTML = 'Enduro (160 voltas)';
    }
    mainScreen.style.display = "none";
    raceScreen.style.display = "flex";
}

function changeToMainScreen () {
    mainScreen.style.display = "flex";
    raceScreen.style.display = "none";
    pedroConteiner.innerHTML = '';
    jucaConteiner.innerHTML = '';
    ednaConteiner.innerHTML = '';
}

function playRace() {
    let pedroWins = 0;
    let jucaWins = 0;
    let ednaWins = 0;

    for (let i = 0; i < chosenType; i++) {
        let pedroCarVel = 0;
        let jucaCarVel = 0;
        let ednaCarVel = 0;
        function pedroCar() {
            let minVel = 150; 
            let maxVel = 230;
            let drift = 3;
            pedroCarVel = getRandom(minVel, maxVel);
            pedroCarVel = pedroCarVel-(pedroCarVel*(drift/100));
            pedroCarVel = pedroCarVel.toFixed(1);
            console.log(pedroCarVel);
        }
        pedroCar()
        function jucaCar() {
            let minVel = 120; 
            let maxVel = 260;
            let drift = 5;
            jucaCarVel = getRandom(minVel, maxVel);
            jucaCarVel = jucaCarVel-(jucaCarVel*(drift/100));
            jucaCarVel = jucaCarVel.toFixed(1);
            console.log(jucaCarVel);
        }
        jucaCar()
        function ednaCar() {
            let minVel = 180;
            let maxVel = 220;
            let drift = 1;
            ednaCarVel = getRandom(minVel, maxVel);
            ednaCarVel = ednaCarVel-(ednaCarVel*(drift/100));
            ednaCarVel = ednaCarVel.toFixed(1);
            console.log(ednaCarVel);
        }
        ednaCar()
        
        if (pedroCarVel > jucaCarVel && pedroCarVel > ednaCarVel) {
            pedroWins += 1;
        } else if (jucaCarVel > ednaCarVel) {
            jucaWins += 1;
        } else {
            ednaWins += 1;
        }
    }
    
    pedroConteiner.innerHTML = pedroWins+' Vitórias';
    jucaConteiner.innerHTML = jucaWins+' Vitórias';
    ednaConteiner.innerHTML = ednaWins+' Vitórias';
    
    if (pedroWins > jucaWins && pedroWins > ednaWins) {
        winnerConteiner.innerHTML = "PEDRO!";
    } else if (jucaWins > ednaWins) {
        winnerConteiner.innerHTML = "JUCA!";
    } else {
        winnerConteiner.innerHTML = "EDNA!";
    }
}