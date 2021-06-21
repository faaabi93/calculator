const displayField = document.querySelector(".display");
const operatorBtns = document.querySelectorAll(".operator");
const numbersBtns = document.querySelectorAll(".number");
const equalsBtn = document.querySelector(".equals");
const percentBtn = document.querySelector("#c4");
const clearBtn = document.querySelector("#c2");

let firstValue = "";
let secondValue = "";
let operant = "";
let resetDisplay = true;

numbersBtns.forEach(btn => btn.addEventListener("click", () => {
    if(resetDisplay) {
        displayField.textContent = btn.textContent;
        resetDisplay = false;
    } else {
        displayField.textContent += btn.textContent;
    }
    clearBtn.textContent = "C";
}));

clearBtn.addEventListener("click", reset);

operatorBtns.forEach(btn => btn.addEventListener("click", () => {
    if(operant === "") {
        firstValue = displayField.textContent;
        operant = btn.textContent;
        resetDisplay = true;
    } else {
        result = operate(firstValue, displayField.textContent, operant);
        operant = btn.textContent;
        displayField.textContent = result;
        resetDisplay = true;
    }
}));

function reset() {
    displayField.textContent = "0";
    firstValue = "";
    secondValue = "";
    operant = "";
    clearBtn.textContent = "AC";
    resetDisplay = true;
};

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