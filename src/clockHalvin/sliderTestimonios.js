const container = document.querySelector(".section-slider .container");

const arrowLeft = document.querySelector(".arrow-left");
const arrowRight = document.querySelector(".arrow-right");

const slideWidth = 300 + 50; // imagen + gap

arrowRight.addEventListener("click", () => {
  if (window.innerWidth >= 1024) {
    container.scrollBy({ left: slideWidth, behavior: "smooth" });
  }
});

arrowLeft.addEventListener("click", () => {
  if (window.innerWidth >= 1024) {
    container.scrollBy({ left: -slideWidth, behavior: "smooth" });
  }
});
