const displayField = document.querySelector(".display");
const operatorBtns = document.querySelectorAll(".operator");
const numbersBtns = document.querySelectorAll(".number");
const equalsBtn = document.querySelector(".equals");
const percentBtn = document.querySelector("#c4");
const clearBtn = document.querySelector("#c2");
const plusMinusBtn = document.querySelector("#c3");
const pointBtn = document.querySelector(".point");

clearAll();

pointBtn.addEventListener("click", () => appendPoint());
clearBtn.addEventListener("click", () => clearAll());
equalsBtn.addEventListener("click", () => evaluate());
percentBtn.addEventListener("click", () => percentage());
plusMinusBtn.addEventListener("click", () => changeSign());

numbersBtns.forEach(btn => btn.addEventListener("click", () => appendNum(btn.textContent)));
operatorBtns.forEach(btn => btn.addEventListener("click", () => setOperation(btn.textContent)));

function appendNum(num) {
    if (displayField.textContent === "0" || resetDisplay) clearDisplay();
    displayField.textContent += num;
    clearBtn.textContent  = "C";
};

function appendPoint() {
    if (!displayField.textContent.includes(".")){
        displayField.textContent += ".";
    }
    return;
}

function evaluate() {
    secondOperand = displayField.textContent;
    if(secondOperand === "0" && currentOperation === "/") {
        alert("You can't divide by 0!")
        clearAll();
        return;
    }
    displayField.textContent = roundResult(operate(firstOperand, secondOperand, currentOperation));
    firstOperand = roundResult(operate(firstOperand, secondOperand, currentOperation));
};

function setOperation(op) {
    if(currentOperation !== null) {
        evaluate();
    }
    currentOperation = op;
    console.log(currentOperation);
    firstOperand = displayField.textContent;
    resetDisplay = true;
};

function changeSign(){
    displayField.textContent = parseFloat(displayField.textContent) * (-1);
}

function clearDisplay() {
    displayField.textContent = "";
    resetDisplay = false;
};

function percentage() {
    displayField.textContent = displayField.textContent / 100;
};

function clearAll() {
    clearBtn.textContent = "AC";
    displayField.textContent = "0";
    firstOperand = "";
    secondOperand = "";
    currentOperation = null;
    resetDisplay = false;
}

function roundResult(num) {
    return Math.round(num * 1000) / 1000;
}

function operate(a, b, op) {
    a = parseFloat(a);
    b = parseFloat(b);
    
    switch (op) {
        case "+":
            return add(a, b);
        case "-":
            return substract(a, b);
        case "*":
            return  multiply(a, b);
        case "/":
            return  divide(a, b);
    };
};

function add(a, b) {
    return a + b;
};

function substract(a, b) {
    return a - b;
};

function multiply(a, b) {
    return a * b;
};

function divide(a, b) {
    return (a / b);
};