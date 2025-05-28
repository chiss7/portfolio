import photo from "../assets/photo.png";
import project from "../../../Screenshot 2024-10-20 151327.png";
import mnist_cover from "../assets/mnist-predictor-cover.png";
import book_social_cover from "../assets/book-social-cover.png";
import microservices_architecture_cover from "../assets/microservices-architecture.png";

import {
  FaHtml5,
  FaCss3Alt,
  FaReact,
  FaAngular,
  FaJava,
  FaNodeJs,
  FaDocker,
  FaBootstrap,
  FaGithub,
  FaGitAlt,
  FaPython,
} from "react-icons/fa6";
import { IoLogoJavascript } from "react-icons/io5";
import { RiTailwindCssFill } from "react-icons/ri";
import { SiIntellijidea, SiPostman, SiSpringboot, SiTensorflow } from "react-icons/si";
import { VscVscode } from "react-icons/vsc";

export const ME = {
  name: "christopher trujillo",
  role: "fullstack developer",
  photo: photo,
  about:
    "I am a passionate Fullstack Developer with a knack for crafting robust and scalable web applications. My goal is to leverage my expertise to create innovative solutions that drive business growth and deliver exceptional user experiences.",
};

export const ABOUT_TEXT = `I am a dedicated and versatile full stack developer with a passion for creating efficient and user-friendly web applications. With 5 years of professional experience, I have worked with a variety of technologies, including React, Next.js, Node.js, MySQL, PostgreSQL, and MongoDB. My journey in web development began with a deep curiosity for how things work, and it has evolved into a career where I continuously strive to learn and adapt to new challenges. I thrive in collaborative environments and enjoy solving complex problems to deliver high-quality solutions. Outside of coding, I enjoy staying active, exploring new technologies, and contributing to open-source projects.`;

export const STACK = [
  {
    title: "frontend",
    items: [
      {
        name: "HTML",
        icon: FaHtml5,
        color: "#FF5722",
      },
      {
        name: "CSS",
        icon: FaCss3Alt,
        color: "#2196F3",
      },
      {
        name: "JavasScript",
        icon: IoLogoJavascript,
        color: "#F0DC55",
      },
      {
        name: "TailwindCSS",
        icon: RiTailwindCssFill,
        color: "#3EBFF8",
      },
      {
        name: "ReactJs",
        icon: FaReact,
        color: "#58C4DC",
      },
      {
        name: "AngularJs",
        icon: FaAngular,
        color: "#E33236",
      },
    ],
  },
  {
    title: "backend",
    items: [
      {
        name: "Java",
        icon: FaJava,
        color: "#0E73B8",
      },
      {
        name: "SpringBoot",
        icon: SiSpringboot,
        color: "#73B545",
      },
      {
        name: "NodeJs",
        icon: FaNodeJs,
        color: "#93C745",
      },
    ],
  },
  {
    title: "tools",
    items: [
      {
        name: "Git",
        icon: FaGitAlt,
        color: "#F05639",
      },
      {
        name: "GitHub",
        icon: FaGithub,
        color: "#000",
      },
      {
        name: "IntelliJ IDEA",
        icon: SiIntellijidea,
        color: "#000",
      },
      {
        name: "Vs Code",
        icon: VscVscode,
        color: "#087DCE",
      },
      {
        name: "Docker",
        icon: FaDocker,
        color: "#19A2DC",
      },
      {
        name: "Postman",
        icon: SiPostman,
        color: "#FF713E",
      },
    ],
  },
  {
    title: "AI",
    items: [
      {
        name: "Python",
        icon: FaPython,
        color: "#417BAC",
      },
      {
        name: "Tensorflow",
        icon: SiTensorflow,
        color: "#F78200",
      },
    ],
  },
];

export const EXPERIENCES = [
  {
    year: "2023 - Present",
    role: "Senior Full Stack Developer",
    company: "Google Inc.",
    description: `Led a team in developing and maintaining web applications using JavaScript, React.js, and Node.js. Implemented RESTful APIs and integrated with MongoDB databases. Collaborated with stakeholders to define project requirements and timelines.`,
    technologies: [FaHtml5],
  },
  {
    year: "2022 - 2023",
    role: "Frontend Developer",
    company: "Adobe",
    description: `Designed and developed user interfaces for web applications using Next.js and React. Worked closely with backend developers to integrate frontend components with Node.js APIs. Implemented responsive designs and optimized frontend performance.`,
    technologies: [],
  },
  {
    year: "2021 - 2022",
    role: "Full Stack Developer",
    company: "Facebook",
    description: `Developed and maintained web applications using JavaScript, React.js, and Node.js. Designed and implemented RESTful APIs for data communication. Collaborated with cross-functional teams to deliver high-quality software products on schedule.`,
    technologies: [],
  },
  {
    year: "2020 - 2021",
    role: "Software Engineer",
    company: "Paypal",
    description: `Contributed to the development of web applications using JavaScript, React.js, and Node.js. Managed databases and implemented data storage solutions using MongoDB. Worked closely with product managers to prioritize features and enhancements.`,
    technologies: [],
  },
];

export const PROJECTS = [
  {
    title: "E-Commerce Trugarden",
    category: "fullstack",
    image: project,
    repository: "https://github.com/chiss7/trugarden",
    isDeployed: false,
    description:
      "A fully functional e-commerce website with features like product listing, shopping cart, and user authentication.",
    technologies: [
      {
        icon: FaJava,
        color: "#0E73B8",
      },
      {
        icon: SiSpringboot,
        color: "#73B545",
      },
      {
        icon: FaAngular,
        color: "#E33236",
      },
      {
        icon: FaDocker,
        color: "#19A2DC",
      },
    ],
  },
  {
    title: "Book Social App",
    category: "fullstack",
    image: book_social_cover,
    repository: "https://github.com/chiss7/book-social-network",
    isDeployed: false,
    description:
      "An application for managing books, with features such as book creation, borrow book, edit and delete book.",
    technologies: [
      {
        icon: FaJava,
        color: "#0E73B8",
      },
      {
        icon: SiSpringboot,
        color: "#73B545",
      },
      {
        icon: FaAngular,
        color: "#E33236",
      },
      {
        icon: FaDocker,
        color: "#19A2DC",
      },
    ],
  },
  {
    title: "E-Commerce (Microservices)",
    category: "backend",
    image: microservices_architecture_cover,
    repository: "https://github.com/chiss7/ecommerce-microservices-springboot",
    isDeployed: false,
    description:
      "E-commerce app that allows customers to browse products, purchase products and send email notifications for order and payment confirmation.",
    technologies: [
      {
        icon: FaHtml5,
        color: "#FF5722",
      },
      {
        icon: FaBootstrap,
        color: "#7D10F2",
      },
      {
        icon: FaJava,
        color: "#0E73B8",
      },
      {
        icon: SiSpringboot,
        color: "#73B545",
      },
      {
        icon: FaDocker,
        color: "#19A2DC",
      },
    ],
  },
  {
    title: "Number predictor",
    category: "frontend",
    image: mnist_cover,
    repository: "https://github.com/chiss7/mnist-predictor-react",
    isDeployed: true,
    urlWebsite: "https://chiss7.github.io/mnist-predictor-react/",
    description: "Number predictor ui using 3 tensorflow models.",
    technologies: [
      {
        icon: IoLogoJavascript,
        color: "#F0DC55",
      },
      {
        icon: FaReact,
        color: "#58C4DC",
      },
      {
        icon: FaCss3Alt,
        color: "#2196F3",
      },
      {
        icon: SiTensorflow,
        color: "#F78200",
      },
    ],
  },
];

export const CONTACT = {
  address: "767 Fifth Avenue, New York, NY 10153 ",
  phoneNo: "+12 4555 666 00 ",
  email: "me@example.com",
};
