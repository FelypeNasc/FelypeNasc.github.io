function createElementInside(location, elementType, elementID, phrase) {
    let elementCreated = document.createElement(elementType);
    
    function typeWriter (element) {
        const textArray = phrase.split('');
        element.innerHTML = ''
        textArray.forEach((letter, i) => {
            setTimeout(() => element.innerHTML += letter, 50 * i);
        })
    }

    elementCreated.innerHTML = phrase
    typeWriter(elementCreated)

    if (elementID != undefined) {
        elementCreated.setAttribute("id", elementID);
    }

    document.querySelector(location).appendChild(elementCreated);
}

function writePhrases () {
    let numbOfPhrases = document.getElementById('numOfPhrases').value;
    const phraseList = [
        "Eu não desperdiçarei giz.",
        "Eu não arrotarei na aula",
        "Eu não instigarei revoluções",
        "Eu não vi Elvis",
        "Chiclete de alho não é engraçado",
        "Eles estão rindo de mim, e não comigo.",
        "“O presidente fez isso!” não é desculpa",
        "Bart Grana não é moeda corrente",
        "Eu não vou fingir estar com rábia",
        "A peça de Natal não fede",
        "Eu não vou esculpir deuses",
        "Eu não espancarei outros",
        "Não vou mirar na cabeça"
    ]
    let pCount = 0;
    let lPhrases = 0;
    let rPhrases = 0;
    let boardwipes = 0;
    let phrase = phraseList[Math.floor(Math.random()*phraseList.length)];

    document.getElementById('leftConteiner').innerHTML = '';
    document.getElementById('rightConteiner').innerHTML = '';
    document.getElementById('bWipeConteiner').innerHTML = '';

    while (true) {
        
        if (pCount < numbOfPhrases) {   
            if (lPhrases < 11) {
                lPhrases +=1;
                setInterval(createElementInside('#leftConteiner','p', 'pL' + lPhrases, phrase), 1000 );
            } else if (rPhrases < 11) {
                rPhrases +=1;
                setInterval(createElementInside('#rightConteiner','p', 'pR'+ rPhrases, phrase), 1000 );
            } else {
                boardwipes += 1;
                lPhrases = 0;
                rPhrases = 0;
                document.getElementById('leftConteiner').innerHTML = '';
                document.getElementById('rightConteiner').innerHTML = '';
                setInterval(createElementInside('#leftConteiner','p', 'pL' + lPhrases, phrase), 1000 );
                lPhrases += 1
            }
            pCount += 1;
            console.log(phrase.split('').length)

        } else {
            document.getElementById('bWipeConteiner').append(boardwipes);
            break;
        }
    }
}
