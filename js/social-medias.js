const studentSocials = [
  {
    fullname: "Halushka Viktor",
    img: "halushka.jpeg",
    links: [
      {
        name: "Telegram",
        href: "https://web.telegram.org/a/#564910115",
      },
      {
        name: "Instagram",
        href: "https://www.instagram.com/_stranger_off/",
      },
    ],
  },
  {
    fullname: "Mavrodi Volodymyr",
    img: "mavrodi.jpg",
    links: [
      {
        name: "Telegram",
        href: "https://web.telegram.org/a/#747948386",
      },
      {
        name: "Instagram",
        href: "https://www.instagram.com/vova.mavrodi/",
      },
    ],
  },
  {
    fullname: "Ignatenko Veronika",
    img: "ignatenko.jpg",
    links: [
      {
        name: "Telegram",
        href: "https://web.telegram.org/a/#500018341",
      },
      {
        name: "Instagram",
        href: "https://www.instagram.com/nn.ignatenko/",
      },
    ],
  },
  {
    fullname: "Maruda Maksym",
    img: "maruda.png",
    links: [
      {
        name: "Telegram",
        href: "https://web.telegram.org/a/#554848560",
      },
      {
        name: "Instagram",
        href: "https://www.instagram.com/masasimm/",
      },
    ],
  },
];
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
