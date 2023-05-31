import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  meta,
  starbucks,
  tesla,
  shopify,
  carrent,
  jobit,
  tripguide,
  threejs,
} from "../assets";
import everexpert from "../assets/company/everexpert.png";
import paragon from "../assets/paragon.png";
import bazar from "../assets/bazar365.png";
import prokitibilash from "../assets/prokitibilash.png";
import robo from "../assets/robo-friends.png";
import trillo from "../assets/trillo-app.png";
import face from "../assets/face-app.png";
import beauty from "../assets/beautyshop.png";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Front-end Developer",
    icon: web,
  },
  {
    title: "React Native Developer",
    icon: mobile,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "Programming Instructor",
    icon: creator,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  },
  {
    name: "docker",
    icon: docker,
  },
];

const experiences = [
  {
    title: "React.js Developer",
    company_name: "Glam World It",
    icon: starbucks,
    iconBg: "#383E56",
    date: "March 2021 - April 2022",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    title: "Full stack Developer",
    company_name: "EverExpert Info Systems Ltd.",
    icon: everexpert,
    iconBg: "#E6DEDD",
    date: "May 2022 - Present",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "It is always a great pleasure working with Rajib. He understands my requirements and how to help me well to accomplish my goals in my code. He explains things very well and is always there, I am happy to be working with him",
    name: "Nick",
    designation: "Backend Developer",
    company: "Fiverr",
    image: "https://randomuser.me/api/portraits/men/4.jpg",
  },
  {
    testimonial:
      "Rajib is very kind, patient and helpful. I was having some issues with my application and he was determined to help solve everything I needed help with. I am happy to work with him, please reach out to him for help !",
    name: "Roland Green",
    designation: "COO",
    company: "Fiverr",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "Very much worth the money. The seller is very easy to reach, has great availability and went beyond of what was originally requested to serve my needs. I will continue my work with the seller in the future!",
    name: "Maxnols",
    designation: "CTO",
    company: "Fiverr",
    image: "https://randomuser.me/api/portraits/men/6.jpg",
  },
];

const projects = [
  {
    name: "Paragon Food",
    description: "An ecommerce application for food products",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "nodejs",
        color: "green-text-gradient",
      },
      {
        name: "ant design",
        color: "pink-text-gradient",
      },
    ],
    image: paragon,
    source_code_link: "https://github.com/",
  },
  {
    name: "Bazar365",
    description: "Web application for ecommerce bussiness for grocery items",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "restapi",
        color: "green-text-gradient",
      },
      {
        name: "nextjs",
        color: "blue-text-gradient",
      },
      {
        name: "nest.js",
        color: "pink-text-gradient",
      },
    ],
    image: bazar,
    source_code_link: "https://github.com/",
  },
  {
    name: "prokitibilash",
    description:
      "A comprehensive travel booking platform that allows users to tours and travels",
    tags: [
      {
        name: "js",
        color: "blue-text-gradient",
      },
      {
        name: "html",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: prokitibilash,
    source_code_link: "https://github.com/",
  },
  {
    name: "face detection app",
    description: "A full stack applicaton of the face detection",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "node",
        color: "green-text-gradient",
      },
      {
        name: "mongodb",
        color: "pink-text-gradient",
      },
    ],
    image: face,
    source_code_link: "https://github.com/",
  },
  {
    name: "Robo friends app",
    description:
      "A react application that provides the ability to search robot and fully responsive features",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "scss",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: robo,
    source_code_link: "https://github.com/",
  },
  {
    name: "Beauty shop",
    description: "A react application that is fully responsive beauty shop",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "scss",
        color: "green-text-gradient",
      },
    ],
    image: beauty,
    source_code_link: "https://github.com/",
  },
];

export { services, technologies, experiences, testimonials, projects };
