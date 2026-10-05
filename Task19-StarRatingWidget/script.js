const stars = document.querySelectorAll(".star");
const ratingText = document.getElementById("ratingText");

let selectedRating = 0;

const ratingMessages = {
    1: "You selected 1 star",
    2: "You selected 2 stars",
    3: "You selected 3 stars",
    4: "You selected 4 stars",
    5: "You selected 5 stars"
};

function showStars(rating) {
    stars.forEach((star) => {
        const value = Number(star.dataset.value);

        if (value <= rating) {
            star.classList.add("filled");
        } else {
            star.classList.remove("filled");
        }
    });
}

stars.forEach((star) => {

    star.addEventListener("mouseover", () => {
        const hoverRating = Number(star.dataset.value);
        showStars(hoverRating);
    });

    star.addEventListener("mouseout", () => {
        showStars(selectedRating);
    });

    star.addEventListener("click", () => {
        selectedRating = Number(star.dataset.value);

        showStars(selectedRating);

        ratingText.textContent = ratingMessages[selectedRating];
    });
});