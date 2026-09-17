// ============================================
// Currency Converter
// ============================================

const API_URL = "https://api.frankfurter.dev/v2";

// DOM Elements
const amountInput = document.getElementById("amount");
const fromCurrency = document.getElementById("fromCurrency");
const toCurrency = document.getElementById("toCurrency");
const swapButton = document.getElementById("swapButton");
const convertButton = document.getElementById("convertButton");

const resultText = document.getElementById("resultText");
const rateText = document.getElementById("rateText");
const loading = document.getElementById("loading");
const errorMessage = document.getElementById("errorMessage");
const updatedText = document.getElementById("updatedText");

// Cache
let currencyCache = null;
let ratesCache = null;


// ============================================
// Loading
// ============================================

function showLoading() {
    loading.classList.remove("hidden");
}

function hideLoading() {
    loading.classList.add("hidden");
}


// ============================================
// Error
// ============================================

function showError(message) {
    errorMessage.textContent = message;
    errorMessage.classList.remove("hidden");
}

function hideError() {
    errorMessage.textContent = "";
    errorMessage.classList.add("hidden");
}


// ============================================
// Fetch Currencies
// ============================================

async function fetchCurrencies() {

    if (currencyCache) {
        return currencyCache;
    }

    const response = await fetch(
        `${API_URL}/currencies`
    );

    if (!response.ok) {
        throw new Error("Unable to load currencies.");
    }

    const data = await response.json();

    currencyCache = data;

    return data;
}


// ============================================
// Populate Currency Dropdowns
// ============================================

function populateCurrencies(currencies) {

    fromCurrency.innerHTML = "";
    toCurrency.innerHTML = "";

    currencies.sort(function(a, b) {
        return a.iso_code.localeCompare(b.iso_code);
    });

    currencies.forEach(function(currency) {

        const code = currency.iso_code;
        const name = currency.name;

        const optionFrom =
            document.createElement("option");

        optionFrom.value = code;
        optionFrom.textContent =
            `${code} - ${name}`;

        const optionTo =
            document.createElement("option");

        optionTo.value = code;
        optionTo.textContent =
            `${code} - ${name}`;

        fromCurrency.appendChild(optionFrom);
        toCurrency.appendChild(optionTo);
    });

    // Default currencies
    fromCurrency.value = "USD";
    toCurrency.value = "INR";
}


// ============================================
// Fetch Exchange Rates
// ============================================

async function fetchRates() {

    if (ratesCache) {
        return ratesCache;
    }

    const response = await fetch(
        `${API_URL}/rates?base=EUR`
    );

    if (!response.ok) {
        throw new Error("Unable to load exchange rates.");
    }

    const data = await response.json();

    // Convert API array into an object
    const rates = {};

    // EUR is the base currency
    rates["EUR"] = 1;

    data.forEach(function(item) {

        rates[item.quote] = item.rate;

    });

    // Store date
    if (data.length > 0) {
        rates.date = data[0].date;
    }

    ratesCache = rates;

    return rates;
}


// ============================================
// Calculate Exchange Rate
// ============================================

function getExchangeRate(from, to, rates) {

    if (from === to) {
        return 1;
    }

    const fromRate =
        from === "EUR"
            ? 1
            : rates[from];

    const toRate =
        to === "EUR"
            ? 1
            : rates[to];

    if (
        fromRate === undefined ||
        toRate === undefined
    ) {
        throw new Error(
            "Exchange rate not available."
        );
    }

    return toRate / fromRate;
}


// ============================================
// Convert Currency
// ============================================

async function convertCurrency() {

    hideError();

    const amount =
        Number(amountInput.value);

    const from =
        fromCurrency.value;

    const to =
        toCurrency.value;


    // Validate amount
    if (
        amountInput.value === "" ||
        !Number.isFinite(amount) ||
        amount < 0
    ) {

        showError(
            "Please enter a valid amount."
        );

        return;
    }


    try {

        showLoading();

        const rates =
            await fetchRates();

        const exchangeRate =
            getExchangeRate(
                from,
                to,
                rates
            );

        const convertedAmount =
            amount * exchangeRate;


        // Display result
        resultText.textContent =
            `${amount.toFixed(2)} ${from} = ${convertedAmount.toFixed(2)} ${to}`;

        rateText.textContent =
            `1 ${from} = ${exchangeRate.toFixed(6)} ${to}`;


        if (rates.date) {

            updatedText.textContent =
                `Exchange rates updated: ${rates.date}`;
        }

    } catch (error) {

        console.error(error);

        showError(
            "Unable to get exchange rates. Please check your internet connection."
        );

    } finally {

        hideLoading();
    }
}


// ============================================
// Swap Currencies
// ============================================

function swapCurrencies() {

    const oldFrom =
        fromCurrency.value;

    const oldTo =
        toCurrency.value;

    fromCurrency.value = oldTo;
    toCurrency.value = oldFrom;

    convertCurrency();
}


// ============================================
// Event Listeners
// ============================================

convertButton.addEventListener(
    "click",
    convertCurrency
);

swapButton.addEventListener(
    "click",
    swapCurrencies
);

amountInput.addEventListener(
    "keydown",
    function(event) {

        if (event.key === "Enter") {
            convertCurrency();
        }

    }
);


// ============================================
// Initialize Application
// ============================================

async function initializeApp() {

    try {

        showLoading();
        hideError();

        // Get currencies
        const currencies =
            await fetchCurrencies();

        populateCurrencies(currencies);

        // Get exchange rates
        await fetchRates();

        // Initial conversion
        await convertCurrency();

    } catch (error) {

        console.error(
            "Initialization error:",
            error
        );

        showError(
            "Unable to load the currency converter. Please refresh the page."
        );

    } finally {

        hideLoading();
    }
}


// ============================================
// Start Application
// ============================================

initializeApp();