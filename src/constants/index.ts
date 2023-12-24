import html5 from "../assets/stack/html5.svg";
import css from "../assets/stack/css.svg";
import react from "../assets/stack/react.svg";
import typescript from "../assets/stack/typescript.svg";

export const navEl = [
  {
    path: "home",
    title: "Home",
  },
  {
    path: "blog",
    title: "Blog",
  },
];

export const projectEl = [
  {
    id: 1,
    img: "https://placehold.co/600x400",
    title: "Lorem, ipsum dolor",
    link: "https://lorem.example",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis eos in corporis sunt expedita dolores vero aspernatur, quam doloremque laborum doloribus hic quo quibusdam consectetur possimus debitis laudantium, rem inventore.",
    stacks: [
      { name: "HTML5", path: html5 },
      { name: "CSS", path: css },
    ],
  },
  {
    id: 2,
    img: "https://placehold.co/600x400",
    title: "Lorem, ipsum dolor",
    link: "https://lorem.example",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis eos in corporis sunt expedita dolores vero aspernatur, quam doloremque laborum doloribus hic quo quibusdam consectetur possimus debitis laudantium, rem inventore.",
    stacks: [
      { name: "ReactJs", path: react },
      { name: "TypeScript", path: typescript },
    ],
  },
  {
    id: 3,
    img: "https://placehold.co/600x400",
    title: "Lorem, ipsum dolor",
    link: "https://lorem.example",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis eos in corporis sunt expedita dolores vero aspernatur, quam doloremque laborum doloribus hic quo quibusdam consectetur possimus debitis laudantium, rem inventore.",
    stacks: [
      { name: "ReactJs", path: react },
      { name: "TypeScript", path: typescript },
      { name: "HTML5", path: html5 },
      { name: "CSS", path: css },
    ],
  },
];
