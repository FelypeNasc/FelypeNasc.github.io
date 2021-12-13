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
const pedroConteiner = document.getElementById('pedroConteiner');
const pedroWinsOutput = document.getElementById('pedro');
const pedroCarModel = document.getElementById('pedroCarModel');
const jucaConteiner = document.getElementById('jucaConteiner');
const jucaWinsOutput = document.getElementById('juca');
const jucaCarModel = document.getElementById('jucaCarModel');
const ednaConteiner = document.getElementById('ednaConteiner');
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

// script variables
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
};

const raceSpecs = [
    {
        numberOfLaps: 10, 
        firstPlace: 200, 
        secondPlace: 120, 
        thirdPlace: 50},
    {
        numberOfLaps: 70, 
        firstPlace: 220, 
        secondPlace: 130, 
        thirdPlace: 75},
    {
        numberOfLaps: 160, 
        firstPlace: 250, 
        secondPlace: 150, 
        thirdPlace: 90}
];

const playersInfo = [
    {name: 'Pedro', lvl: 0, exp: 0},
    {name: 'Juca', lvl: 0, exp: 0},
    {name: 'Edna', lvl: 0, exp: 0}
];

let numberOfLaps = '';
let raceType = '';


// base functions
function getRandom(min, max) {
    return Math.random() * (max - min + 1) + min;
};

function randomizeCarType () {
    x = Math.random() * 100;
    if (x <= 60) return 'popular';
    if (x <= 95) return 'sport';
    if (x <= 100) return 'superSport';
};

function generateNewCar() {
    carType = carSpecs[randomizeCarType()];
    let newCar = {};
    newCar.category = carType.category;
    newCar.minVel = getRandom(carType.minVel.min, carType.minVel.max);
    newCar.maxVel = getRandom(carType.maxVel.min, carType.maxVel.max);
    newCar.drift = getRandom(carType.drift.min, carType.drift.max);
    return newCar;
};

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
};

function changeToRaceScreen (option) {
    raceType = option;
    numberOfLaps = raceSpecs[option].numberOfLaps;
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
    } else if (option == 3){
        mainScreen.style.display = "none";
        customRaceScreen.style.display = "block";
    }
};

function customRaceCheckingLaps () {
    if ((customRaceLaps.value).length > 0 && customRaceLaps.value > 0) {
        numberOfLaps = customRaceLaps.value;
        raceName.innerHTML = 'Corrida Personalizada ('+numberOfLaps+' voltas)';
        customRaceScreen.style.display = "none";
        raceScreen.style.display = "flex";
    } else {
        warningInsertMessage.style.display = "block";
    }
};

function expCheck(player) {
        if (player.exp >= 450 && player.lvl < 10) {
        player.lvl += 1;
        player.exp = player.exp % 450;
        }
};

// play race function
function playRace() {
    let playersRanking = [
        {name: 'Pedro', wins: 0, id: 0},
        {name: 'Juca', wins: 0, id: 1},
        {name: 'Edna', wins: 0, id: 2}
    ];
    pedroCar = generateNewCar();
    jucaCar = generateNewCar();
    ednaCar = generateNewCar();

    // checking lap winner
    for (let i = 0; i < numberOfLaps; i++) {
        let pedroCarVelTemp = getRandom(pedroCar.minVel, pedroCar.maxVel)-pedroCar.drift;
        let pedroCarVel = pedroCarVelTemp - (pedroCarVelTemp*(playersInfo[0].lvl/100))
        let jucaCarVelTemp = getRandom(jucaCar.minVel, jucaCar.maxVel)-jucaCar.drift;
        let jucaCarVel = jucaCarVelTemp - (jucaCarVelTemp*(playersInfo[1].lvl/100))
        let ednaCarVelTemp = getRandom(ednaCar.minVel, ednaCar.maxVel)-ednaCar.drift;
        let ednaCarVel = ednaCarVelTemp - (ednaCarVelTemp*(playersInfo[2].lvl/100))

        if (pedroCarVel > jucaCarVel && pedroCarVel > ednaCarVel) {
            playersRanking[0].wins += 1;
        } else if (jucaCarVel > pedroCarVel && jucaCarVel > ednaCarVel) {
            playersRanking[1].wins += 1;
        } else if (ednaCarVel > pedroCarVel && ednaCarVel > jucaCarVel){
            playersRanking[2].wins += 1;
        };
    };

    // outputing to html the race info
    pedroWinsOutput.innerHTML = playersRanking[0].wins+' Vitórias';
    pedroContainer.classList.remove('winner');
    pedroCarModel.innerHTML = "Modelo: "+pedroCar.category;
    pedroCarModel.classList.remove('popular', 'sport', 'superSport');
    pedroCarModel.classList.add(pedroCar.category);

    jucaWinsOutput.innerHTML = playersRanking[1].wins+' Vitórias';
    jucaContainer.classList.remove('winner');
    jucaCarModel.innerHTML = "Modelo: "+jucaCar.category;
    jucaCarModel.classList.remove('popular', 'sport', 'superSport');
    jucaCarModel.classList.add(jucaCar.category);

    ednaWinsOutput.innerHTML = playersRanking[2].wins+' Vitórias';
    ednaContainer.classList.remove('winner');
    ednaCarModel.innerHTML = "Modelo: "+ednaCar.category;
    ednaCarModel.classList.remove('popular', 'sport', 'superSport');
    ednaCarModel.classList.add(ednaCar.category);
    
    // defining winner
    playersRanking.sort((a, b) => a.wins - b.wins);
    console.log(playersRanking);

    if (playersRanking[playersRanking.length - 1].wins == playersRanking[playersRanking.length - 2].wins) {
        let player1 = generateNewCar();
        let player2 = generateNewCar();
        let player1CarVel = 0;
        let player2CarVel = 1;
        while (player1CarVel == player2CarVel) {
            player1CarVel = getRandom(player1.minVel, player1.maxVel)-player1.drift;
            player2CarVel = getRandom(player2.minVel, player2.maxVel)-player2.drift;
        }
        if (player1 > player2) {
            playersRanking[playersRanking.length - 1].wins += 1;
        } else {
            playersRanking[playersRanking.length - 2].wins += 1;
        }
    }

    winnerContainer.innerHTML = playersRanking[playersRanking.length - 1].name
    if (playersRanking[playersRanking.length - 1].name == 'Pedro') {
        pedroContainer.classList.add('winner');
    } else if (playersRanking[playersRanking.length - 1].name == 'Juca') {
        jucaContainer.classList.add('winner');
    } else {
        ednaContainer.classList.add('winner');
    }
    playersInfo[playersRanking[playersRanking.length-1].id].exp += raceSpecs[raceType].firstPlace
    playersInfo[playersRanking[playersRanking.length-2].id].exp += raceSpecs[raceType].secondPlace
    playersInfo[playersRanking[playersRanking.length-3].id].exp += raceSpecs[raceType].thirdPlace
    playersInfo.forEach(expCheck)
    document.getElementById('pedrolvl').innerHTML = playersInfo[0].lvl
    document.getElementById('jucalvl').innerHTML = playersInfo[1].lvl
    document.getElementById('ednalvl').innerHTML = playersInfo[2].lvl
};
