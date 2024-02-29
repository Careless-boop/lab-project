const prevButton = document.querySelector(".about-us__students-prev-btn");
const nextButton = document.querySelector(".about-us__students-next-btn");
const carousel = document.querySelector(".about-us__students-list");

prevButton.addEventListener("click", () => {
  let itemWidth = document.querySelector(".about-us__student").clientWidth;
  console.log(itemWidth);
  carousel.scrollLeft -= itemWidth;
});
nextButton.addEventListener("click", () => {
  let itemWidth = document.querySelector(".about-us__student").clientWidth;
  console.log(itemWidth);
  carousel.scrollLeft += itemWidth;
});
