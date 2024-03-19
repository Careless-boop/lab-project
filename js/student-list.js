const tempList = [
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
  {
    fullname: "Vovchenko Ivan",
    img: "vovchenko.jpg",
    links: [
      {
        name: "Telegram",
        href: "https://web.telegram.org/a/#508106869",
      },
      {
        name: "Instagram",
        href: "https://www.instagram.com/kycheryavaya_feechka_blum/",
      },
    ],
  },
  {
    fullname: "Lobaevskiy Oleg",
    img: "lobaevskiy.jpeg",
    links: [
      {
        name: "Telegram",
        href: "https://web.telegram.org/a/#377447274",
      },
      {
        name: "Instagram",
        href: "https://www.instagram.com/fuckenigma",
      },
    ],
  },
];
export const studentsList = tempList.toSorted((a, b) => {
  return a.fullname.localeCompare(b.fullname);
});
