// html variables
const addButton = document.getElementById('addButton');
const calcButton = document.getElementById('calcButton');
const inputName = document.getElementById('inputName');
const tbody = document.getElementById('tbody')
addButton.addEventListener('click', newEntry)

// script variable
const mora = 2;
const dailyTax = 0.1;
let entriesDatabase = [aaaaaaaaa, 2222222222];
const currentDate = new Date().getTime();

// script functions

function newEntry() {
    const newElement = {};
    newElement.name = inputName.value;
    newElement.date = inputDate.value;
    newElement.entryValue = parseFloat(inputValue.value).toFixed(2);
    newElement.taxValue = 0;
    newElement.totalValue = inputValue.value;
    entriesDatabase.push(newElement);
    
    tbody.innerHTML += `
    <tr>
        <td>${newElement.name}</td>
        <td>${newElement.date}</td>
        <td>R$ ${newElement.entryValue}</td>
        <td></td>
        <td></td>
    </tr>`
    inputName.value = inputDate.value = inputValue.value = ''
}

function calcTax() {
    const currentDate = new Date().getTime()
    tbody.innerHTML = ''
    for(let i = 0; i < entriesDatabase.length; i++) {
        let entryDate = new Date(entriesDatabase[i].date).getTime()
        let dateDiff = currentDate - entryDate;
        if (dateDiff > 0) {
            dateDiff = Math.floor(dateDiff / (1000 * 3600 * 24));
            entriesDatabase[i].taxValue = parseFloat(entriesDatabase[i].entryValue).toFixed(2) * parseFloat(mora + (dateDiff*dailyTax)).toFixed(2)
            console.log(entriesDatabase[i].taxValue)
            entriesDatabase[i].totalValue = parseFloat(entriesDatabase[i].totalValue) + parseFloat(entriesDatabase[i].taxValue)
            console.log(entriesDatabase[i].totalValue)
        }
    }
}


const mapReturn = entriesDatabase.map((entry, i) => {
    console.log(entry, i);
    return 'aaa'
})

console.log(mapReturn)
