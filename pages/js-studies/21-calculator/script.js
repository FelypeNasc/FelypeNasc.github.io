//html variables
const numberButtonsContainer = document.querySelector(".number-buttons");
const screen = document.getElementById('result');

const clearButton = document.getElementById('clear-calculator');
const getResultButton = document.getElementById('get-result');

// listeners
clearButton.addEventListener('click', () => calculator.clearCalculator())
numberButtonsContainer.addEventListener("click", (ev) => {
    screen.innerHTML += ev.target.id;
});

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
        this.op = _operand1;
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
        screen.innerHTML = '0';
    }
}

const calculator = new CalculatorClass();
