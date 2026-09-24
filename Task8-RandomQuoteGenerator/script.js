const quotes = [

    {
        quote: "The future depends on what you do today.",
        author: "Mahatma Gandhi"
    },

    {
        quote: "It always seems impossible until it's done.",
        author: "Nelson Mandela"
    },

    {
        quote: "The only way to do great work is to love what you do.",
        author: "Steve Jobs"
    },

    {
        quote: "Believe you can and you're halfway there.",
        author: "Theodore Roosevelt"
    },

    {
        quote: "Success is not final, failure is not fatal.",
        author: "Winston Churchill"
    },

    {
        quote: "Do what you can, with what you have, where you are.",
        author: "Theodore Roosevelt"
    },

    {
        quote: "Great things are done by a series of small things brought together.",
        author: "Vincent van Gogh"
    },

    {
        quote: "Act as if what you do makes a difference. It does.",
        author: "William James"
    },

    {
        quote: "Dream big and dare to fail.",
        author: "Norman Vincent Peale"
    },

    {
        quote: "The secret of getting ahead is getting started.",
        author: "Mark Twain"
    },

    {
        quote: "Quality means doing it right when no one is looking.",
        author: "Henry Ford"
    },

    {
        quote: "Everything you can imagine is real.",
        author: "Pablo Picasso"
    },

    {
        quote: "Turn your wounds into wisdom.",
        author: "Oprah Winfrey"
    },

    {
        quote: "What we think, we become.",
        author: "Buddha"
    },

    {
        quote: "If you want to lift yourself up, lift up someone else.",
        author: "Booker T. Washington"
    },

    {
        quote: "Happiness depends upon ourselves.",
        author: "Aristotle"
    },

    {
        quote: "Start where you are. Use what you have. Do what you can.",
        author: "Arthur Ashe"
    },

    {
        quote: "A journey of a thousand miles begins with a single step.",
        author: "Lao Tzu"
    },

    {
        quote: "The harder the conflict, the greater the triumph.",
        author: "George Washington"
    },

    {
        quote: "You miss 100% of the shots you don't take.",
        author: "Wayne Gretzky"
    },

    {
        quote: "Everything has beauty, but not everyone sees it.",
        author: "Confucius"
    },

    {
        quote: "Keep your eyes on the stars, and your feet on the ground.",
        author: "Theodore Roosevelt"
    },

    {
        quote: "Well done is better than well said.",
        author: "Benjamin Franklin"
    },

    {
        quote: "If opportunity doesn't knock, build a door.",
        author: "Milton Berle"
    },

    {
        quote: "The best way out is always through.",
        author: "Robert Frost"
    },

    {
        quote: "You must be the change you wish to see in the world.",
        author: "Mahatma Gandhi"
    },

    {
        quote: "Learning never exhausts the mind.",
        author: "Leonardo da Vinci"
    },

    {
        quote: "Knowledge is power.",
        author: "Francis Bacon"
    },

    {
        quote: "Nothing will work unless you do.",
        author: "Maya Angelou"
    },

    {
        quote: "Don't watch the clock; do what it does. Keep going.",
        author: "Sam Levenson"
    }

];


const quoteElement = document.getElementById("quote");

const authorElement = document.getElementById("author");

const newQuoteButton =
    document.getElementById("newQuoteBtn");

const shareButton =
    document.getElementById("shareBtn");

const statusElement =
    document.getElementById("status");


let lastQuoteIndex = -1;


function getRandomQuoteIndex() {

    let index;

    do {

        index = Math.floor(
            Math.random() * quotes.length
        );

    } while (
        index === lastQuoteIndex &&
        quotes.length > 1
    );

    return index;
}


function displayRandomQuote() {

    const index =
        getRandomQuoteIndex();

    const selectedQuote =
        quotes[index];

    lastQuoteIndex = index;


    quoteElement.classList.remove("fade");

    void quoteElement.offsetWidth;

    quoteElement.classList.add("fade");


    quoteElement.textContent =
        selectedQuote.quote;

    authorElement.textContent =
        `— ${selectedQuote.author}`;

    statusElement.textContent = "";
}


async function shareQuote() {

    const text =
        `"${quoteElement.textContent}" — ${authorElement.textContent.replace("— ", "")}`;


    if (navigator.share) {

        try {

            await navigator.share({

                title: "Random Quote",

                text: text

            });

            statusElement.textContent =
                "Quote shared successfully.";

        }

        catch (error) {

            if (error.name !== "AbortError") {

                statusElement.textContent =
                    "Sharing was cancelled.";

            }

        }

    }

    else if (navigator.clipboard) {

        try {

            await navigator.clipboard.writeText(text);

            statusElement.textContent =
                "Quote copied to clipboard.";

        }

        catch (error) {

            statusElement.textContent =
                "Unable to copy the quote.";

        }

    }

    else {

        statusElement.textContent =
            "Sharing is not supported in this browser.";

    }
}


newQuoteButton.addEventListener(
    "click",
    displayRandomQuote
);


shareButton.addEventListener(
    "click",
    shareQuote
);


displayRandomQuote();