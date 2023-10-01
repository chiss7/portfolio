import Image from "next/image";
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

export default function Home() {
  return (
    <>
      {/* HOME */}
      <section className="flex flex-col items-center justify-center py-4 md:py-7 lg:py-20 xl:py-32">
        <article className="flex flex-col-reverse gap-6 xl:gap-16 items-center lg:flex-row lg:justify-center px-5 sm:px-0 w-full sm:w-2/3 lg:w-3/4 xl:w-2/3 2xl:w-1/2">
          <div className="text-center lg:text-left sm:w-3/4 lg:w-full lg:pr-10">
            <h1 className="text-4xl sm:text-6xl font-bold">
              Hi, I&apos;m Christopher Trujillo
            </h1>
            <h3 className="text-2xl mt-4">Fullstack Developer</h3>
            <p className="text-xl mt-4">
              This is a website built with Next.js and Tailwind CSS. It is
              hosted on Vercel.
            </p>
          </div>
          <Image
            alt=""
            src={"/images/face.jpg"}
            width={350}
            height={350}
            priority
            className="shadow-2xl"
          />
        </article>
      </section>

      {/* STACK */}
      <section className="flex flex-col items-center justify-center py-4 md:py-7 lg:py-20 xl:py-32">
        <article className="flex flex-col gap-6 items-center px-5 sm:px-0 w-full sm:w-2/3 lg:w-3/4 xl:w-2/3 2xl:w-1/2">
          <h1 className="text-3xl font-semibold">Tech Stack</h1>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-7 w-full">
            <div className="md:col-span-2 shadow-xl p-4 text-center transition duration-300 hover:-translate-y-1 hover:scale-105">
              <h2 className="text-xl font-semibold mb-3">Web Development</h2>
              <div className="flex justify-evenly text-3xl lg:text-4xl">
                <FaHtml5 color="#E5532D" title="Html5" />
                <FaCss3Alt color="#0870C2" title="CSS3" />
                <BiLogoJavascript color="#F7E025" title="JavaScript" />
                <BiLogoTailwindCss color="#3EBFF8" title="TailwindCSS" />
                <FaNodeJs color="#66A060" title="NodeJs" />
                <FaReact color="#1BA1CC" title="ReactJs" />
                <TbBrandNextjs color="#080808" title="NextJs" />
              </div>
            </div>
            <div className="shadow-xl p-4 text-center transition duration-300 hover:-translate-y-1 hover:scale-105">
              <h2 className="text-xl font-semibold mb-3">Databases</h2>
              <div className="flex justify-evenly text-3xl lg:text-4xl">
                <SiMysql color="#08658F" title="MySql" />
                <BiLogoPostgresql color="#396C94" title="PostgreSql" />
                <SiMongodb color="#17AD55" title="MongoDb" />
              </div>
            </div>
            <div className="shadow-xl p-4 text-center transition duration-300 hover:-translate-y-1 hover:scale-105">
              <h2 className="text-xl font-semibold mb-3">Desktop</h2>
              <div className="flex justify-evenly text-3xl lg:text-4xl">
                <FaJava color="#DE5541" title="Java" />
                <FaPython color="#3C77A8" title="Python" />
                <SiCsharp color="#6D287E" title="CSharp" />
              </div>
            </div>
            <div className="shadow-xl p-4 text-center transition duration-300 hover:-translate-y-1 hover:scale-105">
              <h2 className="text-xl font-semibold mb-3">Version Control</h2>
              <div className="flex justify-evenly text-3xl lg:text-4xl">
                <FaGitAlt color="#F05639" title="Git" />
                <FaGithub color="#23262B" title="GitHub" />
              </div>
            </div>
            <div className="shadow-xl p-4 text-center transition duration-300 hover:-translate-y-1 hover:scale-105">
              <h2 className="text-xl font-semibold mb-3">IDE</h2>
              <div className="flex justify-evenly text-3xl lg:text-4xl">
                <TbBrandVscode color="#34A6F2" title="VsCode" />
                <SiEclipseide color="#31255B" title="Eclipse" />
                <SiApachenetbeanside color="" title="Apache Netbeans" />
                <SiIntellijidea color="#080808" title="IntelliJ IDEA" />
              </div>
            </div>
          </div>
        </article>
      </section>

      {/* ABOUT */}
      {/* PROJECTS */}
      {/* CONTACT */}
    </>
  );
}
