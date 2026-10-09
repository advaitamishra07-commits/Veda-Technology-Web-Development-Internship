const billInput = document.getElementById("bill");
const peopleInput = document.getElementById("people");
const customTipInput = document.getElementById("customTip");
const tipButtons = document.querySelectorAll(".tip-buttons button");

const tipPerPerson = document.getElementById("tipPerPerson");
const totalPerPerson = document.getElementById("totalPerPerson");
const totalBill = document.getElementById("totalBill");
const errorMessage = document.getElementById("error");
const resetButton = document.getElementById("reset");

let selectedTip = 15;

function formatCurrency(amount) {
    return new Intl.NumberFormat("en-IN", {
        style: "currency",
        currency: "INR",
        minimumFractionDigits: 2,
        maximumFractionDigits: 2
    }).format(amount);
}

function updateActiveButton() {
    tipButtons.forEach(button => {
        const isActive = Number(button.dataset.tip) === selectedTip;
        button.classList.toggle("active", isActive);
    });
}

function calculateTip() {
    const bill = Number(billInput.value);
    const people = Number(peopleInput.value);

    const tip = customTipInput.value.trim() === ""
        ? selectedTip
        : Number(customTipInput.value);

    errorMessage.textContent = "";

    if (billInput.value.trim() === "" ||
        !Number.isFinite(bill) || bill < 0) {
        errorMessage.textContent = "Please enter a valid bill amount.";
        showZero();
        return;
    }

    if (!Number.isFinite(tip) || tip < 0 || tip > 100) {
        errorMessage.textContent =
            "Tip percentage must be between 0 and 100.";
        showZero();
        return;
    }

    if (peopleInput.value.trim() === "" ||
        !Number.isInteger(people) || people < 1) {
        errorMessage.textContent =
            "Please enter a number of people greater than zero.";
        showZero();
        return;
    }

    const tipAmount = bill * tip / 100;
    const total = bill + tipAmount;

    tipPerPerson.textContent =
        formatCurrency(tipAmount / people);

    totalPerPerson.textContent =
        formatCurrency(total / people);

    totalBill.textContent = formatCurrency(total);
}

function showZero() {
    tipPerPerson.textContent = formatCurrency(0);
    totalPerPerson.textContent = formatCurrency(0);
    totalBill.textContent = formatCurrency(0);
}

tipButtons.forEach(button => {
    button.addEventListener("click", () => {
        selectedTip = Number(button.dataset.tip);
        customTipInput.value = "";
        updateActiveButton();
        calculateTip();
    });
});

customTipInput.addEventListener("input", () => {
    tipButtons.forEach(button => button.classList.remove("active"));
    calculateTip();
});

billInput.addEventListener("input", calculateTip);
peopleInput.addEventListener("input", calculateTip);

resetButton.addEventListener("click", () => {
    billInput.value = "";
    peopleInput.value = 1;
    customTipInput.value = "";
    selectedTip = 15;

    updateActiveButton();
    errorMessage.textContent = "";
    showZero();
});

calculateTip();