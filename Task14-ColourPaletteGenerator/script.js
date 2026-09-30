const palette = document.getElementById("palette");

const generateBtn =
    document.getElementById("generateBtn");

const message =
    document.getElementById("message");


// Generate a random HEX color
function generateRandomColor() {

    const randomNumber =
        Math.floor(Math.random() * 16777216);

    const hexColor =
        "#" +
        randomNumber
            .toString(16)
            .padStart(6, "0")
            .toUpperCase();

    return hexColor;
}


// Generate the palette
function generatePalette() {

    // Clear previous colors
    palette.innerHTML = "";

    // Generate 5 colors
    for (let i = 0; i < 5; i++) {

        const color =
            generateRandomColor();

        // Create color swatch
        const swatch =
            document.createElement("div");

        swatch.classList.add("swatch");

        swatch.style.backgroundColor =
            color;

        // Create HEX code
        const hexCode =
            document.createElement("div");

        hexCode.classList.add("hex-code");

        hexCode.textContent =
            color;

        // Add HEX code to swatch
        swatch.appendChild(hexCode);

        // Add swatch to palette
        palette.appendChild(swatch);


        // Copy color when clicked
        swatch.addEventListener(
            "click",
            function () {

                copyColor(color);

            }
        );
    }

    message.textContent =
        "New palette generated! Click a color to copy it.";
}


// Copy HEX color
async function copyColor(color) {

    try {

        await navigator.clipboard.writeText(color);

        message.textContent =
            color + " copied to clipboard!";

    } catch (error) {

        message.textContent =
            "Unable to copy the color.";

    }
}


// Generate new palette
generateBtn.addEventListener(
    "click",
    generatePalette
);


// Generate first palette
generatePalette();