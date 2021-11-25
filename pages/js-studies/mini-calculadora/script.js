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

function createResult() {
    createElementInside("main", "div", "resultConteiner");
    createElementInside("#resultConteiner", "h3", "resultH3");
    createElementInside("#resultConteiner", "input", "resultOutput");
    document.querySelector("#resultH3").innerHTML = "Resultado";
}

function valuePlus() {
    let n1 = parseFloat(document.getElementById("numero1").value)
    let n2 = parseFloat(document.getElementById("numero2").value)
    let resultN = n1+n2
    document.querySelector("#resultOutput").innerHTML = resultN;   
}

function valueMinus() {
    let n1 = parseFloat(document.getElementById("numero1").value)
    let n2 = parseFloat(document.getElementById("numero2").value)
    let resultN = n1-n2
    document.querySelector("#resultOutput").innerHTML = resultN;
}

function valueMultiply() {
    let n1 = parseFloat(document.getElementById("numero1").value)
    let n2 = parseFloat(document.getElementById("numero2").value)
    let resultN = n1*n2
    document.querySelector("#resultOutput").innerHTML = resultN;   
}

function valueDivide() {
    let n1 = parseFloat(document.getElementById("numero1").value)
    let n2 = parseFloat(document.getElementById("numero2").value)
    let resultN = n1/n2
    document.querySelector("#resultOutput").innerHTML = resultN;   
}

function resetInputs() {
    document.querySelector("#numero1").value = '';
    document.querySelector("#numero2").value = '';
    document.querySelector("#resultOutput").innerHTML = '';
}

//eventos
function initEventos() {
    document.querySelector("#btnPlus").addEventListener("click", valuePlus);
    document.querySelector("#btnMinus").addEventListener("click", valueMinus);
    document.querySelector("#btnMultiply").addEventListener("click", valueMultiply);
    document.querySelector("#btnDivide").addEventListener("click", valueDivide);
    document.querySelector("#btnReset").addEventListener("click", resetInputs)
}
window.addEventListener("load", initEventos)
