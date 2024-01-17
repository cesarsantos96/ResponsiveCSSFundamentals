const carousel = document.querySelector(".carousel");

const nextButton = document.querySelector(".next");
const prevButton = document.querySelector(".prev");

const interval = setInterval(() => {
  const currentSlide = carousel.querySelector(".active");
  const nextSlide = currentSlide.nextElementSibling;

  if (nextSlide) {
    carousel.classList.remove("active");
    nextSlide.classList.add("active");
  }
}, 2000);

nextButton.addEventListener("click", () => {
  carousel.classList.remove("active");
  carousel.querySelector(".next").classList.add("active");
});

prevButton.addEventListener("click", () => {
  carousel.classList.remove("active");
  carousel.querySelector(".prev").classList.add("active");
});
