// main screen variables 
const headerLink = document.getElementById('headerLink');
const mainScreen = document.getElementById('mainScreen');
const raceOptFast = document.getElementById('mainScreen-optionContainer-op1');
const raceOptGreat = document.getElementById('mainScreen-optionContainer-op2');
const raceOptEnduro = document.getElementById('mainScreen-optionContainer-op3');
const raceOptCustom = document.getElementById('mainScreen-optionContainer-op4');
raceOptFast.addEventListener('click', () => {changeToRaceScreen(0)});
raceOptGreat.addEventListener('click', () => {changeToRaceScreen(1)});
raceOptEnduro.addEventListener('click', () => {changeToRaceScreen(2)});
raceOptCustom.addEventListener('click', () => {changeToRaceScreen(3)});
headerLink.addEventListener('click', changeToMainScreen);

// race screen variables
const raceScreen = document.getElementById('raceScreen');
const raceName = document.getElementById('raceName');
const pedroContainer = document.getElementById('pedro');
const jucaContainer = document.getElementById('juca');
const ednaContainer = document.getElementById('edna');
const winnerContainer = document.getElementById('winner');
const runButton = document.getElementById('sendButton');
runButton.addEventListener('click', playRace);

// custom screen variables
const customRaceScreen = document.getElementById('customRace');
const customRaceLaps = document.getElementById('customRace-laps');
const customRaceSendbutton = document.getElementById('customRace-sendButton');
const warningInsertMessage = document.getElementById('warningInsertMessage');
customRaceSendbutton.addEventListener('click', customRaceCheckingLaps)

// script variables
let numberOfLaps = '';

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
    numberOfLaps = raceTypes[option];
    if (option == 0) {
        raceName.innerHTML = 'Corrida rápida (10 voltas)';
        mainScreen.style.display = "none";
        raceScreen.style.display = "flex";
    } else if (option == 1) {
        raceName.innerHTML = 'Grande Prêmio (70 voltas)';
        mainScreen.style.display = "none";
        raceScreen.style.display = "flex";
    } else if (option == 2) {
        raceName.innerHTML = 'Enduro (160 voltas)';
        mainScreen.style.display = "none";
        raceScreen.style.display = "flex";
    } else {
        mainScreen.style.display = "none";
        customRaceScreen.style.display = "block";
    }
}

function customRaceCheckingLaps () {
    if ((customRaceLaps.value).length > 0 && customRaceLaps.value > 0) {
        numberOfLaps = customRaceLaps.value;
        raceName.innerHTML = 'Corrida Personalizada ('+numberOfLaps+' voltas)';
        customRaceScreen.style.display = "none";
        raceScreen.style.display = "flex";
    } else {
        warningInsertMessage.style.display = "block"
    }
}

function changeToMainScreen () {
    mainScreen.style.display = "flex";
    raceScreen.style.display = "none";
    customRaceLaps.value = 0;
    customRaceScreen.style.display = "none";
    warningInsertMessage.style.display = "none";
    pedroContainer.innerHTML = '';
    jucaContainer.innerHTML = '';
    ednaContainer.innerHTML = '';
}

function playRace() {
    let pedroWins = 0;
    let jucaWins = 0;
    let ednaWins = 0;

    for (let i = 0; i < numberOfLaps; i++) {
        let pedroCarVel = 0;
        let jucaCarVel = 0;
        let ednaCarVel = 0;
        function pedroCar() {
            let minVel = getRandom(100,150); 
            let maxVel = getRandom(200,280);
            let drift = getRandom(1,8);
            pedroCarVel = getRandom(minVel, maxVel);
            pedroCarVel = pedroCarVel-(pedroCarVel*(drift/100));
            pedroCarVel = pedroCarVel.toFixed(1);
            console.log(pedroCarVel);
        }
        pedroCar()
        function jucaCar() {
            let minVel = getRandom(100,150); 
            let maxVel = getRandom(200,280);
            let drift = getRandom(1,8);
            jucaCarVel = getRandom(minVel, maxVel);
            jucaCarVel = jucaCarVel-(jucaCarVel*(drift/100));
            jucaCarVel = jucaCarVel.toFixed(1);
            console.log(jucaCarVel);
        }
        jucaCar()
        function ednaCar() {
            let minVel = getRandom(100,150);
            let maxVel = getRandom(200,280);
            let drift = getRandom(1,8);
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
    
    pedroContainer.innerHTML = pedroWins+' Vitórias';
    jucaContainer.innerHTML = jucaWins+' Vitórias';
    ednaContainer.innerHTML = ednaWins+' Vitórias';
    
    if (pedroWins > jucaWins && pedroWins > ednaWins) {
        winnerContainer.innerHTML = "PEDRO!";
    } else if (jucaWins > ednaWins) {
        winnerContainer.innerHTML = "JUCA!";
    } else {
        winnerContainer.innerHTML = "EDNA!";
    }
}
