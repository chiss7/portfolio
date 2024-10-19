import { useState } from "react";
import { Button } from "./Button";
import {
  FaHtml5,
  FaCss3Alt,
  FaReact,
  FaAngular,
  FaJava,
  FaNodeJs,
  FaGitAlt,
  FaGithub,
  FaDocker,
} from "react-icons/fa6";
import { IoLogoJavascript } from "react-icons/io5";
import { RiTailwindCssFill } from "react-icons/ri";
import { SiSpringboot, SiIntellijidea, SiPostman } from "react-icons/si";
import { VscVscode } from "react-icons/vsc";

const stack = [
  {
    title: "frontend",
    items: [
      {
        name: "HTML",
        icon: <FaHtml5 color="#FF5722" />,
      },
      {
        name: "CSS",
        icon: <FaCss3Alt color="#2196F3" />,
      },
      {
        name: "JavasScript",
        icon: <IoLogoJavascript color="#F0DC55" />,
      },
      {
        name: "TailwindCSS",
        icon: <RiTailwindCssFill color="#3EBFF8" />,
      },
      {
        name: "ReactJs",
        icon: <FaReact color="#58C4DC" />,
      },
      {
        name: "AngularJs",
        icon: <FaAngular color="#E33236" />,
      },
    ],
  },
  {
    title: "backend",
    items: [
      {
        name: "Java",
        icon: <FaJava color="#0E73B8" />,
      },
      {
        name: "SpringBoot",
        icon: <SiSpringboot color="#73B545" />,
      },
      {
        name: "NodeJs",
        icon: <FaNodeJs color="#93C745" />,
      },
    ],
  },
  {
    title: "tools",
    items: [
      {
        name: "Git",
        icon: <FaGitAlt color="#F05639" />,
      },
      {
        name: "GitHub",
        icon: <FaGithub color="#000" />,
      },
      {
        name: "IntelliJ IDEA",
        icon: <SiIntellijidea color="#000" />,
      },
      {
        name: "Vs Code",
        icon: <VscVscode color="#087DCE" />,
      },
      {
        name: "Docker",
        icon: <FaDocker color="#19A2DC" />,
      },
      {
        name: "Postman",
        icon: <SiPostman color="#FF713E" />,
      },
    ],
  },
];

export const Stack = () => {
  const [value, setValue] = useState(0);
  const [hoveredIndex, setHoveredIndex] = useState(null);

  const category = stack[value];

  return (
    <section className="h-full text-white pb-12 xl:pb-0">
      <div className="container mx-auto h-full xl:pt-8 xl:pb-16">
        <h2 className="h2 text-center">Tech Stack</h2>
        <div className="flex justify-center py-6">
          {stack.map((item, index) => {
            return (
              <Button
                size={"md"}
                variant={"underline"}
                key={index}
                onClick={() => setValue(index)}
                className={`${
                  index === value && "border-teal-400 text-teal-400"
                }`}
              >
                {item.title}
              </Button>
            );
          })}
        </div>
        <div className="flex justify-center gap-12 flex-wrap">
          {/* icon */}
          {category.items.map((item, index) => {
            return (
              <div key={index} className="relative">
                <i
                  className="text-4xl"
                  onMouseEnter={() => setHoveredIndex(index)}
                  onMouseLeave={() => setHoveredIndex(null)}
                >
                  {item.icon}
                </i>
                {hoveredIndex === index && (
                  <span className="absolute top-12 left-12 transform -translate-x-1/2 px-2 py-1 bg-zinc-800 text-white text-sm rounded-xl">
                    {item.name}
                  </span>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
