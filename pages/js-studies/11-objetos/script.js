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
const pedroConteiner = document.getElementById('pedroConteiner')
const pedroWinsOutput = document.getElementById('pedro');
const pedroCarModel = document.getElementById('pedroCarModel');
const jucaConteiner = document.getElementById('jucaConteiner')
const jucaWinsOutput = document.getElementById('juca');
const jucaCarModel = document.getElementById('jucaCarModel');
const ednaConteiner = document.getElementById('ednaConteiner')
const ednaWinsOutput = document.getElementById('edna');
const ednaCarModel = document.getElementById('ednaCarModel');
const winnerContainer = document.getElementById('winner');
const runButton = document.getElementById('sendButton');
runButton.addEventListener('click', playRace);

// custom screen variables
const customRaceScreen = document.getElementById('customRace');
const customRaceLaps = document.getElementById('customRace-laps');
const customRaceSendbutton = document.getElementById('customRace-sendButton');
const warningInsertMessage = document.getElementById('warningInsertMessage');
customRaceSendbutton.addEventListener('click', customRaceCheckingLaps);

const carSpecs = {
    popular: {
        category: 'popular',
        minVel: {min: 110, max: 130},
        maxVel: {min: 180, max: 200},
        drift: {min: 3, max: 4}
    },
    sport: {
        category: 'sport',
        minVel: {min: 125, max: 145},
        maxVel: {min: 195, max: 215},
        drift: {min: 2, max: 3}
    },
    superSport: {
        category: 'superSport',
        minVel: {min: 140, max: 160},
        maxVel: {min: 210, max: 230},
        drift: {min: 1, max: 1.75}
    },
}

let numberOfLaps = '';

// base functions
function getRandom(min, max) {
    return Math.random() * (max - min + 1) + min;
}

function randomizeCarType() {
    x = Math.random() * 100;
    if (x <= 60) return 'popular';
    if (x <= 95) return 'sport';
    if (x <= 100) return 'superSport';
}

function generateNewCar() {
    carType = carSpecs[randomizeCarType()];
    let newCar = {};
    newCar.category = carType.category;
    newCar.minVel = getRandom(carType.minVel.min, carType.minVel.max);
    newCar.maxVel = getRandom(carType.maxVel.min, carType.maxVel.max);
    newCar.drift = getRandom(carType.drift.min, carType.drift.max);
    return newCar;
}

// change screen functions

function changeToMainScreen () {
    mainScreen.style.display = "flex";
    raceScreen.style.display = "none";
    customRaceLaps.value = 0;
    customRaceScreen.style.display = "none";
    warningInsertMessage.style.display = "none";
    pedroWinsOutput.innerHTML = '';
    jucaWinsOutput.innerHTML = '';
    ednaWinsOutput.innerHTML = '';
    pedroCarModel.classList.remove('popular', 'sport', 'superSport');
    jucaCarModel.classList.remove('popular', 'sport', 'superSport');
    ednaCarModel.classList.remove('popular', 'sport', 'superSport');
}

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
        warningInsertMessage.style.display = "block";
    }
}

// play race function

function playRace() {
    let pedroWins = 0;
    let jucaWins = 0;
    let ednaWins = 0;
    pedroCar = generateNewCar();
    jucaCar = generateNewCar();
    ednaCar = generateNewCar();

    // checking lap winner
    for (let i = 0; i < numberOfLaps; i++) {
        let pedroCarVel = getRandom(pedroCar.minVel, pedroCar.maxVel)-pedroCar.drift;
        let jucaCarVel = getRandom(jucaCar.minVel, jucaCar.maxVel)-jucaCar.drift;
        let ednaCarVel = getRandom(ednaCar.minVel, ednaCar.maxVel)-ednaCar.drift;

        if (pedroCarVel > jucaCarVel && pedroCarVel > ednaCarVel) {
            pedroWins += 1;
        } else if (jucaCarVel > ednaCarVel) {
            jucaWins += 1;
        } else {
            ednaWins += 1;
        }
    }   

    // outputing to html the race info
    pedroWinsOutput.innerHTML = pedroWins+' Vitórias';
    pedroContainer.classList.remove('winner');
    pedroCarModel.innerHTML = "Modelo: "+pedroCar.category;
    pedroCarModel.classList.remove('popular', 'sport', 'superSport');
    pedroCarModel.classList.add(pedroCar.category);

    jucaWinsOutput.innerHTML = jucaWins+' Vitórias';
    jucaContainer.classList.remove('winner');
    jucaCarModel.innerHTML = "Modelo: "+jucaCar.category;
    jucaCarModel.classList.remove('popular', 'sport', 'superSport');
    jucaCarModel.classList.add(jucaCar.category);

    ednaWinsOutput.innerHTML = ednaWins+' Vitórias';
    ednaContainer.classList.remove('winner');
    ednaCarModel.innerHTML = "Modelo: "+ednaCar.category;
    ednaCarModel.classList.remove('popular', 'sport', 'superSport');
    ednaCarModel.classList.add(ednaCar.category);
    
    // defining winner
    if (pedroWins > jucaWins && pedroWins > ednaWins) {
        winnerContainer.innerHTML = "PEDRO!";
        pedroContainer.classList.add('winner')
    } else if (jucaWins > ednaWins) {
        winnerContainer.innerHTML = "JUCA!";
        jucaContainer.classList.add('winner')
    } else if (ednaWins > jucaWins){
        winnerContainer.innerHTML = "EDNA!";
        ednaContainer.classList.add('winner')
    }
}
