import { studentsList } from "./student-list.js";
const prevButton = document.querySelector(".about-us__students-prev-btn");
const nextButton = document.querySelector(".about-us__students-next-btn");
const studentsCarousel = document.querySelector(".about-us__students-list");

initializeList(studentsList, studentsCarousel);

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

const slides = document.querySelectorAll(".about-us__student");
const indicators = document.querySelectorAll(".about-us__students-indicator");

const options = {
  threshold: 0.5,
};

const observer = new IntersectionObserver((entries, observer) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      const index = Array.from(slides).indexOf(entry.target);
      activateSlide(index);
      console.log("triggered");
    }
  });
}, options);

slides.forEach((slide) => {
  observer.observe(slide);
});

function activateSlide(index) {
  resetIndicators();
  indicators[index].classList.add("active");
}

function resetIndicators() {
  indicators.forEach((indicator) => {
    indicator.classList.remove("active");
  });
}

function initializeList(students, carousel) {
  const indicators = document.querySelector(".about-us__students-indicators");
  let studentsTemp = "";
  let indicatorsTemp = "";
  students.forEach((student) => {
    studentsTemp += `<div class="about-us__student">
    <img
      class="about-us__student-photo"
      src="img/${student.img}"
      alt="Photo of ${student.fullname}"
    />
    <h3 class="about-us__student-fullname">${student.fullname}</h3>
  </div>`;
    indicatorsTemp += `<li class="about-us__students-indicator"></li>`;
  });
  carousel.innerHTML = studentsTemp;
  indicators.innerHTML = indicatorsTemp;
}
