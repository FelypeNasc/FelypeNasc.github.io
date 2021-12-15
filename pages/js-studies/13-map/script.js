// html variables
const addButton = document.getElementById('addButton');
const calcButton = document.getElementById('calcButton');
const inputName = document.getElementById('inputName');
const tbody = document.getElementById('tbody');
addButton.addEventListener('click', newEntry);
calcButton.addEventListener('click', calcTax);

// script variable
const mora = 2;
const dailyTax = 0.1;
let entriesDatabase = [];
const currentDate = new Date().getTime();

// script functions
function newEntry() {
    const newElement = {};
    newElement.name = inputName.value;
    newElement.date = inputDate.value;
    newElement.entryValue = parseFloat(inputValue.value).toFixed(2);
    newElement.taxValue = 0;
    newElement.lateDays = 0;
    newElement.totalValue = inputValue.value;
    entriesDatabase.push(newElement);
    
    tbody.innerHTML += `
    <tr>
        <td>${newElement.name}</td>
        <td>${newElement.date}</td>
        <td>R$ ${newElement.entryValue}</td>
        <td></td>
        <td></td>
        <td></td>
    </tr>`
    inputName.value = inputDate.value = inputValue.value = ''
}

function calcTax() {
    const currentDate = new Date().getTime()
    tbody.innerHTML = ''
    entriesDatabase.map((entry) => {
        let entryDate = new Date(entry.date).getTime()
        let dateDiff = currentDate - entryDate;
        entry.lateDays = dateDiff;
        if (dateDiff > 0) {
            dateDiff = Math.floor(dateDiff / (1000 * 3600 * 24));
            entry.entryValue = parseFloat(entry.entryValue);
            entry.taxValue = entry.entryValue * parseFloat((mora +(dateDiff*dailyTax)) / 100).toFixed(2);
            console.log(entry.taxValue);
            entry.totalValue = parseFloat(entry.entryValue) + parseFloat(entry.taxValue);
            console.log(entry.totalValue);
        }
        entry.lateDays = dateDiff;
        tbody.innerHTML += `
        <tr>
            <td>${entry.name}</td>
            <td>${entry.date}</td>
            <td>R$ ${entry.entryValue}</td>
            <td>R$ ${entry.taxValue}</td>
            <td>${entry.lateDays}</td>
            <td>R$ ${entry.totalValue}</td>
        </tr>
        `
        entry.taxValue = entry.totalValue = 0;
    })
}
