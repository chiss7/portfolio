import {
  FaCss3Alt,
  FaGitAlt,
  FaGithub,
  FaHtml5,
  FaJava,
  FaNodeJs,
  FaPython,
  FaReact,
} from "react-icons/fa";
import {
  BiLogoJavascript,
  BiLogoPostgresql,
  BiLogoTailwindCss,
} from "react-icons/bi";
import { TbBrandNextjs } from "react-icons/tb";
import {
  SiApachenetbeanside,
  SiCsharp,
  SiEclipseide,
  SiIntellijidea,
  SiMongodb,
  SiMysql,
} from "react-icons/si";
import { TbBrandVscode } from "react-icons/tb";

const TechStack = () => {
  const techStack = {
    "Web Development": [
      { name: "HTML5", icon: <FaHtml5 color="#E5532D" title="HTML5" /> },
      { name: "CSS3", icon: <FaCss3Alt color="#0870C2" title="CSS3" /> },
      { name: "JavaScript", icon: <BiLogoJavascript color="#F7E025" title="JavaScript" /> },
      { name: "TailwindCSS", icon: <BiLogoTailwindCss color="#3EBFF8" title="TailwindCSS" /> },
      { name: "NodeJs", icon: <FaNodeJs color="#66A060" title="NodeJs" /> },
      { name: "ReactJs", icon: <FaReact color="#1BA1CC" title="ReactJs" /> },
      { name: "NextJs", icon: <TbBrandNextjs color="#080808" title="NextJs" /> },
    ],
    "Databases": [
      { name: "MySql", icon: <SiMysql color="#08658F" title="MySql" /> },
      { name: "PostgreSql", icon: <BiLogoPostgresql color="#396C94" title="PostgreSql" /> },
      { name: "MongoDb", icon: <SiMongodb color="#17AD55" title="MongoDb" /> },
    ],
    "Desktop": [
      { name: "Java", icon: <FaJava color="#DE5541" title="Java" /> },
      { name: "Python", icon: <FaPython color="#3C77A8" title="Python" /> },
      { name: "CSharp", icon: <SiCsharp color="#6D287E" title="CSharp" /> },
    ],
    "Version Control": [
      { name: "Git", icon: <FaGitAlt color="#F05639" title="Git" /> },
      { name: "GitHub", icon: <FaGithub color="#23262B" title="GitHub" /> },
    ],
    "IDE": [
      { name: "VsCode", icon: <TbBrandVscode color="#34A6F2" title="VsCode" /> },
      { name: "Eclipse", icon: <SiEclipseide color="#31255B" title="Eclipse" /> },
      { name: "Apache Netbeans", icon: <SiApachenetbeanside color="" title="Apache Netbeans" /> },
      { name: "IntelliJ IDEA", icon: <SiIntellijidea color="#080808" title="IntelliJ IDEA" /> },
    ],
  };

  return (
    <section className="section-container">
      <article className="flex flex-col gap-6 items-center responsive">
        <h1 className="text-3xl font-semibold">Tech Stack</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-7 w-full">
          {Object.entries(techStack).map(([category, technologies], index) => (
            <div
              key={category}
              className={`${
                index === 0 && "md:col-span-2"
              } shadow-xl p-4 text-center transition duration-300 hover:-translate-y-1 hover:scale-105`}
            >
              <h2 className="text-xl font-semibold mb-3">{category}</h2>
              <div className="flex justify-evenly text-3xl lg:text-4xl">
                {technologies.map((tech) => (
                  <span key={tech.name}>{tech.icon}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </article>
    </section>
  );
};

export default TechStack;
