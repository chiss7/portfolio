import { Project } from "./Project";
import { PROJECTS } from "../constants";

export const Projects = () => {
  return (
    <section className="h-full text-white pb-12 xl:pb-0">
      <div className="container mx-auto h-full xl:pt-8 xl:pb-16">
        <h2 className="h2">My Projects</h2>
        <Project projects={PROJECTS} />
      </div>
    </section>
  );
};
