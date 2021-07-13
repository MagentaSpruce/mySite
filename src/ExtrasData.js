import { FaGithub } from "react-icons/fa";
import forkify from "./forkifyIcon.png";

const extras = [
  {
    id: 1,
    name: "Forkify",
    project: "HTML, CSS, JavaScript",
    image: { forkify },
    text: "This React app presents menu items in card format. Data is dynamically rendered, including the buttons, depending on category type. This menu can be changed easily - to display data of any type with only changes to styling required.",
    label1: <FaGithub />,
    label2: "https://forkify-spruce.netlify.app/",
  },
  {
    id: 2,
    name: "Project 2",
    project: "React",
    image: "",
    text: "Some stuff about this project",
    label1: <FaGithub />,
    label2: "https://github.com/MagentaSpruce",
  },
  {
    id: 3,
    name: "Project 3",
    project: "React",
    image: "",
    text: "Some stuff about this project",
    label1: <FaGithub />,
    label2: "See Demo",
  },
  {
    id: 4,
    name: "Project 4",
    project: "React",
    image: "",
    text: "Some stuff about this project",
    label1: <FaGithub />,
    label2: "See Demo",
  },
  {
    id: 5,
    name: "Project 5",
    project: "React",
    image: "",
    text: "Some stuff about this project",
    label1: <FaGithub />,
    label2: "See Demo",
  },
];

export default extras;
