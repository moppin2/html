document.querySelectorAll(".carousel-container").forEach(container => {
    const carousel = container.querySelector(".carousel");
    const prevBtn = container.querySelector(".prev-btn");
    const nextBtn = container.querySelector(".next-btn");

    prevBtn.addEventListener("click", () => {
        carousel.scrollBy({ left: -320, behavior: "smooth" });
    });

    nextBtn.addEventListener("click", () => {
        carousel.scrollBy({ left: 320, behavior: "smooth" });
    });
});