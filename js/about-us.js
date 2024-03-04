const prevButton = document.querySelector(".about-us__students-prev-btn");
const nextButton = document.querySelector(".about-us__students-next-btn");
const studentsCarousel = document.querySelector(".about-us__students-list");
const studentsIndicators = document.querySelector(
  ".about-us__students-indicators"
);
const studentsList = [
  {
    img: "halushka.jpeg",
    fullname: "Halushka Viktor",
    alt: "halushka photo",
  },
  {
    img: "mavrodi.jpg",
    fullname: "Mavrodi Volodymyr",
    alt: "mavrodi photo",
  },
  {
    img: "ignatenko.jpg",
    fullname: "Ignatenko Veronika",
    alt: "ignatenko photo",
  },
  {
    img: "maruda.png",
    fullname: "Maruda Maksym",
    alt: "maruda photo",
  },
];

initializeList(studentsList, studentsCarousel);

initializeIndicators();

prevButton.addEventListener("click", () => {
  let itemWidth = document.querySelector(".about-us__student").clientWidth;
  console.log(itemWidth);
  studentsCarousel.scrollLeft -= itemWidth;
});
nextButton.addEventListener("click", () => {
  let itemWidth = document.querySelector(".about-us__student").clientWidth;
  console.log(itemWidth);
  studentsCarousel.scrollLeft += itemWidth;
});

function initializeList(students, carousel) {
  const indicators = document.querySelector(".about-us__students-indicators");
  let studentsTemp = "";
  let indicatorsTemp = "";
  students.forEach((student) => {
    studentsTemp += `<div class="about-us__student">
    <img
      class="about-us__student-photo"
      src="img/${student.img}"
      alt="${student.alt}"
    />
    <h3 class="about-us__student-fullname">${student.fullname}</h3>
  </div>`;
    indicatorsTemp += `<li class="about-us__students-indicator"></li>`;
  });
  carousel.innerHTML = studentsTemp;
  indicators.innerHTML = indicatorsTemp;
}
function resetIndicators(indicators) {
  indicators.forEach((indicator) => {
    indicator.classList.remove("active");
  });
}
function initializeIndicators() {
  const indicators = document.querySelectorAll(".about-us__students-indicator");
  activateIndicator(indicators);
  studentsCarousel.addEventListener("scroll", () => {
    resetIndicators(indicators);
    activateIndicator(indicators);
  });
}
function activateIndicator(indicators) {
  const itemWidth = document.querySelector(".about-us__student").clientWidth;
  const fullItemWidth = itemWidth + 48; /*48 is a column gap*/
  const slideIndex = Math.floor(studentsCarousel.scrollLeft / fullItemWidth);
  indicators[slideIndex].classList.add("active");
}
