const celsiusInput = document.getElementById("celsius");
const fahrenheitInput = document.getElementById("fahrenheit");
const kelvinInput = document.getElementById("kelvin");

const errorMessage = document.getElementById("error-message");
const clearButton = document.getElementById("clear-btn");

// -----------------------------
// Conversion Functions
// -----------------------------

function celsiusToFahrenheit(celsius) {
    return (celsius * 9 / 5) + 32;
}

function celsiusToKelvin(celsius) {
    return celsius + 273.15;
}

function fahrenheitToCelsius(fahrenheit) {
    return (fahrenheit - 32) * 5 / 9;
}

function kelvinToCelsius(kelvin) {
    return kelvin - 273.15;
}

// -----------------------------
// Helper Functions
// -----------------------------

function roundValue(value) {
    return Number(value.toFixed(2));
}

function showError(message) {
    errorMessage.textContent = message;
}

function clearError() {
    errorMessage.textContent = "";
}

// -----------------------------
// Celsius Conversion
// -----------------------------

celsiusInput.addEventListener("input", function () {

    clearError();

    if (celsiusInput.value === "") {
        fahrenheitInput.value = "";
        kelvinInput.value = "";
        return;
    }

    const celsius = parseFloat(celsiusInput.value);

    if (!Number.isFinite(celsius)) {
        showError("Please enter a valid number.");
        return;
    }

    if (celsius < -273.15) {
        showError("Celsius cannot be below -273.15°C.");
        fahrenheitInput.value = "";
        kelvinInput.value = "";
        return;
    }

    fahrenheitInput.value = roundValue(
        celsiusToFahrenheit(celsius)
    );

    kelvinInput.value = roundValue(
        celsiusToKelvin(celsius)
    );
});

// -----------------------------
// Fahrenheit Conversion
// -----------------------------

fahrenheitInput.addEventListener("input", function () {

    clearError();

    if (fahrenheitInput.value === "") {
        celsiusInput.value = "";
        kelvinInput.value = "";
        return;
    }

    const fahrenheit = parseFloat(fahrenheitInput.value);

    if (!Number.isFinite(fahrenheit)) {
        showError("Please enter a valid number.");
        return;
    }

    const celsius = fahrenheitToCelsius(fahrenheit);

    if (celsius < -273.15) {
        showError("Temperature cannot be below absolute zero.");
        celsiusInput.value = "";
        kelvinInput.value = "";
        return;
    }

    celsiusInput.value = roundValue(celsius);

    kelvinInput.value = roundValue(
        celsiusToKelvin(celsius)
    );
});

// -----------------------------
// Kelvin Conversion
// -----------------------------

kelvinInput.addEventListener("input", function () {

    clearError();

    if (kelvinInput.value === "") {
        celsiusInput.value = "";
        fahrenheitInput.value = "";
        return;
    }

    const kelvin = parseFloat(kelvinInput.value);

    if (!Number.isFinite(kelvin)) {
        showError("Please enter a valid number.");
        return;
    }

    if (kelvin < 0) {
        showError("Kelvin cannot be below 0 K.");
        celsiusInput.value = "";
        fahrenheitInput.value = "";
        return;
    }

    const celsius = kelvinToCelsius(kelvin);

    celsiusInput.value = roundValue(celsius);

    fahrenheitInput.value = roundValue(
        celsiusToFahrenheit(celsius)
    );
});

// -----------------------------
// Clear Button
// -----------------------------

clearButton.addEventListener("click", function () {

    celsiusInput.value = "";
    fahrenheitInput.value = "";
    kelvinInput.value = "";

    clearError();

    celsiusInput.focus();
});