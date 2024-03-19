import { studentsList } from "./student-list.js";
const studentSocials = studentsList;
const studentList = document.querySelector(".social-medias__list");
initLinks(studentSocials);

function initLinks(students) {
  students.forEach((student) => {
    const studentContainer = document.createElement("div");
    studentContainer.classList.add("social-medias__student");

    const studentImg = document.createElement("img");
    studentImg.classList.add("student__img");
    studentImg.src = `img/${student.img}`;
    studentImg.alt = `Photo of ${student.fullname}`;

    const studentInfo = document.createElement("div");
    studentInfo.classList.add("student__info");

    const studentName = document.createElement("h4");
    studentName.classList.add("student__name");
    studentName.textContent = student.fullname;

    studentInfo.appendChild(studentName);
    student.links.forEach((link) => {
      const studentLinkItem = document.createElement("div");
      studentLinkItem.classList.add("student__links-item");

      const studentLinkName = document.createElement("p");
      studentLinkName.classList.add("student__link-name");
      studentLinkName.textContent = link.name;

      const studentLink = document.createElement("a");
      studentLink.classList.add("student__link");
      studentLink.href = link.href;
      studentLink.textContent = link.href;
      studentLink.target = "_blank";
      studentLinkItem.appendChild(studentLinkName);
      studentLinkItem.appendChild(studentLink);
      studentInfo.appendChild(studentLinkItem);
    });
    studentContainer.appendChild(studentImg);
    studentContainer.appendChild(studentInfo);

    studentList.appendChild(studentContainer);
  });
}
