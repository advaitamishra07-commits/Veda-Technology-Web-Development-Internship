const currentDisplay = document.getElementById("current-display");
const previousDisplay = document.getElementById("previous-display");

const numberButtons = document.querySelectorAll("[data-number]");
const operatorButtons = document.querySelectorAll("[data-operator]");
const clearButton = document.querySelector('[data-action="clear"]');
const equalsButton = document.querySelector('[data-action="equals"]');
const decimalButton = document.querySelector('[data-action="decimal"]');

let currentValue = "0";
let previousValue = null;
let selectedOperator = null;
let waitingForOperand = false;


// Update calculator display
function updateDisplay() {
    currentDisplay.textContent = currentValue;

    if (previousValue !== null && selectedOperator !== null) {
        previousDisplay.textContent =
            `${formatNumber(previousValue)} ${getOperatorSymbol(selectedOperator)}`;
    } else {
        previousDisplay.textContent = "";
    }
}


// Format large numbers
function formatNumber(value) {
    const number = Number(value);

    if (!Number.isFinite(number)) {
        return value;
    }

    return number.toLocaleString("en-US", {
        maximumFractionDigits: 10
    });
}


// Get operator symbol for display
function getOperatorSymbol(operator) {
    const symbols = {
        "+": "+",
        "-": "−",
        "*": "×",
        "/": "÷"
    };

    return symbols[operator] || operator;
}


// Enter number
function enterNumber(number) {

    if (waitingForOperand) {
        currentValue = number;
        waitingForOperand = false;
    } else if (currentValue === "0") {
        currentValue = number;
    } else {
        currentValue += number;
    }

    updateDisplay();
}


// Add decimal
function addDecimal() {

    if (waitingForOperand) {
        currentValue = "0.";
        waitingForOperand = false;
        updateDisplay();
        return;
    }

    if (!currentValue.includes(".")) {
        currentValue += ".";
    }

    updateDisplay();
}


// Select operator
function selectOperator(operator) {

    if (selectedOperator !== null && !waitingForOperand) {
        calculate();
    }

    previousValue = currentValue;
    selectedOperator = operator;
    waitingForOperand = true;

    updateDisplay();
}


// Perform calculation
function calculate() {

    if (
        previousValue === null ||
        selectedOperator === null ||
        waitingForOperand
    ) {
        return;
    }

    const firstNumber = Number(previousValue);
    const secondNumber = Number(currentValue);

    let result;

    switch (selectedOperator) {

        case "+":
            result = firstNumber + secondNumber;
            break;

        case "-":
            result = firstNumber - secondNumber;
            break;

        case "*":
            result = firstNumber * secondNumber;
            break;

        case "/":

            if (secondNumber === 0) {
                currentValue = "Cannot divide by 0";
                previousValue = null;
                selectedOperator = null;
                waitingForOperand = true;

                updateDisplay();
                return;
            }

            result = firstNumber / secondNumber;
            break;

        default:
            return;
    }

    // Prevent very long decimal results
    result = Number(result.toFixed(10));

    currentValue = String(result);

    previousValue = null;
    selectedOperator = null;
    waitingForOperand = true;

    updateDisplay();
}


// Clear calculator
function clearCalculator() {

    currentValue = "0";
    previousValue = null;
    selectedOperator = null;
    waitingForOperand = false;

    updateDisplay();
}


// Number button events
numberButtons.forEach(button => {

    button.addEventListener("click", () => {
        enterNumber(button.dataset.number);
    });

});


// Operator button events
operatorButtons.forEach(button => {

    button.addEventListener("click", () => {
        selectOperator(button.dataset.operator);
    });

});


// Decimal button
decimalButton.addEventListener("click", addDecimal);


// Equals button
equalsButton.addEventListener("click", calculate);


// Clear button
clearButton.addEventListener("click", clearCalculator);


// Keyboard support
document.addEventListener("keydown", (event) => {

    const key = event.key;

    if (/^[0-9]$/.test(key)) {
        enterNumber(key);
        return;
    }

    if (key === ".") {
        addDecimal();
        return;
    }

    if (["+", "-", "*", "/"].includes(key)) {
        selectOperator(key);
        return;
    }

    if (key === "Enter" || key === "=") {
        calculate();
        return;
    }

    if (key === "Escape" || key === "Delete") {
        clearCalculator();
    }
});


// Initial display
updateDisplay();