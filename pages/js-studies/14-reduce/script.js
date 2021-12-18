// html variables
const addBtn = document.getElementById('addBtn');
const calcBtn = document.getElementById('calcBtn');
const inputName = document.getElementById('inputName');
const sortByNameBtn = document.getElementById('sortByNameBtn');
const sortByDateBtn = document.getElementById('sortByDateBtn');
const verifyTotalBtn = document.getElementById('verifyTotalBtn');
const tbody = document.getElementById('tbody');
const tbody2 = document.getElementById('tbody2');
addBtn.addEventListener('click', newEntry);
calcBtn.addEventListener('click', calcTax);
sortByNameBtn.addEventListener('click', sortByName);
sortByDateBtn.addEventListener('click', sortByDate);
verifyTotalBtn.addEventListener('click', getNameTotalValue);

// script variable
const mora = 2;
const dailyTax = 0.1;
const entriesDatabase = [];
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
            //console.log(entry.taxValue);
            entry.totalValue = parseFloat(entry.entryValue) + parseFloat(entry.taxValue);
            //console.log(entry.totalValue);
        }
        entry.lateDays = dateDiff;
        tbody.innerHTML += `
        <tr>
            <td>${entry.name}</td>
            <td>${entry.date}</td>
            <td>R$ ${entry.entryValue.toFixed(2)}</td>
            <td>R$ ${entry.taxValue.toFixed(2)}</td>
            <td>${entry.lateDays}</td>
            <td>R$ ${entry.totalValue.toFixed(2)}</td>
        </tr>
        `;
    });
}

function sortByName() {
    entriesDatabase.sort((a, b) => a.name.localeCompare(b.name));
    calcTax()
}

function sortByDate() {
    entriesDatabase.sort((a, b) => a.date.localeCompare(b.date))
    calcTax()
}

function getNameTotalValue() {
    tbody2.innerHTML = '';
    const totalForClient = [];

    function isInside(arr, nameToVerify) {
        if (arr.some(e => e.name === nameToVerify)) return true
        else return false     
    };
    
    for (let i = 0; i < entriesDatabase.length; i++) {
        if (!isInside(totalForClient, entriesDatabase[i].name)) {
            let newClient = {name: entriesDatabase[i].name, entries: [], totalOf: 0}
            totalForClient.push(newClient)
        }
        for (let j = 0; j < totalForClient.length; j++) {
            if (entriesDatabase[i].name === totalForClient[j].name) {
                totalForClient[j].entries.push(entriesDatabase[i].totalValue)
            }
        }
    }

    totalForClient.forEach((actualClient) => {
        actualClient.totalOf = actualClient.entries.reduce((total, entry) => {
            return total + entry;
        })
        tbody2.innerHTML += `
        <tr>
            <td>${actualClient.name}</td>
            <td>R$ ${actualClient.totalOf.toFixed(2)}</td>
        </tr>`
    })
}
