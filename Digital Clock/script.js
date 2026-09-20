function updateClock() {

    const now = new Date();

    // Get current time
    let hours = now.getHours();
    let minutes = now.getMinutes();
    let seconds = now.getSeconds();

    // Add leading zeros
    hours = String(hours).padStart(2, "0");
    minutes = String(minutes).padStart(2, "0");
    seconds = String(seconds).padStart(2, "0");

    // Display time
    document.getElementById("clock").textContent =
        `${hours}:${minutes}:${seconds}`;

    // Get current date
    const dateOptions = {
        weekday: "long",
        year: "numeric",
        month: "long",
        day: "numeric"
    };

    const currentDate = now.toLocaleDateString(
        "en-US",
        dateOptions
    );

    // Display date
    document.getElementById("date").textContent = currentDate;
}

// Run immediately
updateClock();

// Update every second
setInterval(updateClock, 1000);