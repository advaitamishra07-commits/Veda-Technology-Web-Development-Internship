
/* Responsive Personal Portfolio Website */

// Mobile navigation
const menuToggle = document.getElementById("menuToggle");
const navLinks = document.getElementById("navLinks");

if (menuToggle && navLinks) {
  menuToggle.addEventListener("click", function () {
    const isOpen = navLinks.classList.toggle("open");

    menuToggle.setAttribute("aria-expanded", String(isOpen));

    menuToggle.setAttribute(
      "aria-label",
      isOpen ? "Close navigation menu" : "Open navigation menu"
    );

    menuToggle.textContent = isOpen ? "✕" : "☰";
  });

  // Close menu after clicking a navigation link
  navLinks.querySelectorAll("a").forEach(function (link) {
    link.addEventListener("click", function () {
      navLinks.classList.remove("open");

      menuToggle.setAttribute("aria-expanded", "false");
      menuToggle.setAttribute("aria-label", "Open navigation menu");
      menuToggle.textContent = "☰";
    });
  });
}

// Display the current year automatically
const year = document.getElementById("year");

if (year) {
  year.textContent = new Date().getFullYear();
}

// Contact form validation
const contactForm = document.getElementById("contactForm");
const formStatus = document.getElementById("formStatus");

if (contactForm && formStatus) {
  const fields = contactForm.querySelectorAll("input, textarea");

  // Remove error styling when the user edits a field
  fields.forEach(function (field) {
    field.addEventListener("input", function () {
      field.classList.remove("invalid");
      field.removeAttribute("aria-invalid");
    });
  });

  contactForm.addEventListener("submit", function (event) {
    event.preventDefault();

    let firstInvalidField = null;

    fields.forEach(function (field) {
      const value = field.value.trim();
      let isValid = field.checkValidity();

      // Name must contain at least two characters
      if (field.name === "name" && value.length < 2) {
        isValid = false;
      }

      // Message must contain at least ten characters
      if (field.name === "message" && value.length < 10) {
        isValid = false;
      }

      if (!isValid) {
        field.classList.add("invalid");
        field.setAttribute("aria-invalid", "true");

        if (!firstInvalidField) {
          firstInvalidField = field;
        }
      } else {
        field.classList.remove("invalid");
        field.removeAttribute("aria-invalid");
      }
    });

    // Display validation errors
    if (firstInvalidField) {
      formStatus.textContent =
        "Please enter valid information in all required fields.";

      formStatus.className = "form-status error";

      firstInvalidField.focus();
      return;
    }

    // Display success when all fields are valid
    formStatus.textContent =
      "Validation successful! This demo does not send messages. " +
      "Connect a backend or form service to receive submissions.";

    formStatus.className = "form-status success";

    contactForm.reset();
  });
}
