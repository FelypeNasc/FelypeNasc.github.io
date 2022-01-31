//html variables
const numberButtonsContainer = document.querySelector(".number-buttons");
const operationsButtonsContainer = document.querySelector('.operations-buttons');
const screen = document.getElementById('result');

const clearButton = document.getElementById('clear-calculator');
const getResultButton = document.getElementById('get-result');

// listeners
clearButton.addEventListener('click', () => clearCalculator());
getResultButton.addEventListener('click', () => getResult());

numberButtonsContainer.addEventListener("click", (ev) => {
    if (!calculator.operand1 == null, !calculator.operand2 == null) return;
    if (screen.innerHTML == '' || screen.innerHTML == '0') {
        screen.innerHTML = ev.target.value;
    } else {
        screen.innerHTML += ev.target.value;
    }
});
operationsButtonsContainer.addEventListener('click', (ev) => {
    setValues()
    calculator.operator = ev.target.value;
    screen.innerHTML += ` ${ev.target.value} `;
})

// functions 

function setValues() {
    if (calculator.operand1 == null) {
        calculator.operand1 = screen.innerHTML;
    } else if (calculator.n2 == null) {
        calculator.operand2 = screen.innerHTML.split(' ')[2];
    }
    console.log(calculator.operand1, calculator.operator, calculator.operand2);
}

function getResult() {
    setValues()
    screen.innerHTML = calculator.getResult();
    calculator.clearCalculator();
    console.log(calculator.getResult());
    calculator.operand1 = screen.innerHTML;
}

function clearCalculator() {
    screen.innerHTML = '0';
    calculator.clearCalculator;
}

// calculator class
class CalculatorClass {
    //getters

    get operand1() {
        return this.n1;
    }
    get operand2() {
        return this.n2;
    }
    get operator() {
        return this.op;
    }
    //setters

    set operand1(_operand1) {
        this.n1 = _operand1;
    }
    set operand2(_operand2) {
        this.n2 = _operand2;
    }
    set operator(_operator) {
        this.op = _operator;
    }

    // calculate result
    getResult() {
        switch (this.op) {
            case "-":
                return this.n1 - this.n2;
            case "+":
                return this.n1 + this.n2;
            case "/":
                return this.n1 / this.n2;
            case "*":
                return this.n1 * this.n2;
        }
    }

    // clear calculator values
    clearCalculator() {
        this.n1 = this.n2 = this.op = null;
    }
}

const calculator = new CalculatorClass();
