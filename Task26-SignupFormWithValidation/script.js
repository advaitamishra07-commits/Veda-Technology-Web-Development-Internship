
const form = document.getElementById("signupForm");

const nameInput = document.getElementById("name");
const emailInput = document.getElementById("email");
const passwordInput = document.getElementById("password");
const confirmInput = document.getElementById("confirmPassword");

const strengthBar = document.getElementById("strengthBar");
const strengthText = document.getElementById("strengthText");
const successMessage = document.getElementById("successMessage");

const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;

function showError(input, errorId, message) {
    document.getElementById(errorId).textContent = message;
    input.classList.toggle("invalid", Boolean(message));
    input.classList.toggle("valid", !message && input.value.trim() !== "");
    input.setAttribute("aria-invalid", String(Boolean(message)));
}

function validateName() {
    const name = nameInput.value.trim();

    if (!name) {
        showError(nameInput, "nameError", "Full name is required.");
        return false;
    }

    if (name.length < 2) {
        showError(nameInput, "nameError", "Name must contain at least 2 characters.");
        return false;
    }

    if (!/^[\p{L}][\p{L}\p{M} .'-]*$/u.test(name)) {
        showError(nameInput, "nameError", "Enter a valid name.");
        return false;
    }

    showError(nameInput, "nameError", "");
    return true;
}

function validateEmail() {
    const email = emailInput.value.trim();

    if (!email) {
        showError(emailInput, "emailError", "Email address is required.");
        return false;
    }

    if (!emailPattern.test(email)) {
        showError(emailInput, "emailError", "Enter a valid email address.");
        return false;
    }

    showError(emailInput, "emailError", "");
    return true;
}

function getPasswordStrength(password) {
    let score = 0;

    if (password.length >= 8) score++;
    if (/[a-z]/.test(password) && /[A-Z]/.test(password)) score++;
    if (/\d/.test(password)) score++;
    if (/[^A-Za-z0-9]/.test(password)) score++;

    return score;
}

function updatePasswordStrength() {
    const password = passwordInput.value;
    const score = getPasswordStrength(password);

    const levels = [
        { label: "Not entered", width: "0%", color: "transparent" },
        { label: "Weak", width: "25%", color: "#ff7185" },
        { label: "Fair", width: "50%", color: "#ffbd69" },
        { label: "Good", width: "75%", color: "#75c9ff" },
        { label: "Strong", width: "100%", color: "#52e0ae" }
    ];

    const level = levels[password.length === 0 ? 0 : score];

    strengthBar.style.width = level.width;
    strengthBar.style.backgroundColor = level.color;
    strengthText.textContent = `Password strength: ${level.label}`;
}

function validatePassword() {
    const password = passwordInput.value;

    if (!password) {
        showError(passwordInput, "passwordError", "Password is required.");
        return false;
    }

    if (password.length < 8) {
        showError(passwordInput, "passwordError", "Use at least 8 characters.");
        return false;
    }

    if (
        !/[a-z]/.test(password) ||
        !/[A-Z]/.test(password) ||
        !/\d/.test(password) ||
        !/[^A-Za-z0-9]/.test(password)
    ) {
        showError(
            passwordInput,
            "passwordError",
            "Include uppercase, lowercase, a number, and a special character."
        );
        return false;
    }

    showError(passwordInput, "passwordError", "");
    return true;
}

function validateConfirmPassword() {
    const confirmPassword = confirmInput.value;

    if (!confirmPassword) {
        showError(confirmInput, "confirmError", "Please confirm your password.");
        return false;
    }

    if (confirmPassword !== passwordInput.value) {
        showError(confirmInput, "confirmError", "Passwords do not match.");
        return false;
    }

    showError(confirmInput, "confirmError", "");
    return true;
}

function validateForm() {
    const nameValid = validateName();
    const emailValid = validateEmail();
    const passwordValid = validatePassword();
    const confirmValid = validateConfirmPassword();

    return nameValid && emailValid && passwordValid && confirmValid;
}

nameInput.addEventListener("input", () => {
    successMessage.textContent = "";
    validateName();
});

emailInput.addEventListener("input", () => {
    successMessage.textContent = "";
    validateEmail();
});

passwordInput.addEventListener("input", () => {
    successMessage.textContent = "";
    updatePasswordStrength();
    validatePassword();

    if (confirmInput.value) {
        validateConfirmPassword();
    }
});

confirmInput.addEventListener("input", () => {
    successMessage.textContent = "";
    validateConfirmPassword();
});

form.addEventListener("submit", (event) => {
    event.preventDefault();
    successMessage.textContent = "";

    if (!validateForm()) {
        const firstInvalid = form.querySelector(".invalid");
        firstInvalid?.focus();
        return;
    }

    successMessage.textContent =
        `Success! Your signup form is valid, ${nameInput.value.trim()}.`;

    form.reset();

    [nameInput, emailInput, passwordInput, confirmInput].forEach((input) => {
        input.classList.remove("valid", "invalid");
        input.removeAttribute("aria-invalid");
    });

    ["nameError", "emailError", "passwordError", "confirmError"].forEach((id) => {
        document.getElementById(id).textContent = "";
    });

    updatePasswordStrength();
});
