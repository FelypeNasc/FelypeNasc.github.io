$(document).ready(function(){
    // listeners
    $("#clear-calculator").on("click", () => clearCalculator());
    $("#get-result").on("click", () => getResult());  
}); 


$(".number-buttons").on("click", (ev) => {
    if ((!calculator.operand1 == null, !calculator.operand2 == null)) return;
    if ($("#result").html() == "" || $("#result").html() == "0") {
        $("#result").html(parseInt(ev.target.value));
    } else {
        $("#result").append(parseInt(ev.target.value));
    }
});
$(".operations-buttons").on("click", (ev) => {
    setValues();
    calculator.operator = ev.target.value;
    $("#result").append(` ${ev.target.value} `);
});

// functions

function setValues() {
    if (calculator.operand1 == null) {
        calculator.operand1 = parseInt($("#result").html());
    } else if (calculator.n2 == null) {
        calculator.operand2 = parseInt($("#result").html().split(" ")[2]);
    }
    console.log(calculator.operand1, calculator.operator, calculator.operand2);
}

function getResult() {
    setValues();
    $("#result").html(calculator.getResult());
    calculator.clearCalculator();
    console.log(calculator.getResult());
}

function clearCalculator() {
    $("#result").html("0");
    calculator.clearCalculator;
    console.log(calculator.operand1, calculator.operator, calculator.operand2);
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
        this.n1 = null;
        this.n2 = null;
        this.op = null;
    }
}

const calculator = new CalculatorClass();
