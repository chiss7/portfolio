import PropTypes from "prop-types";
import { Button } from "./Button";
import { FaGithub } from "react-icons/fa";
import { LuArrowUpRightFromCircle } from "react-icons/lu";

export const Project = ({ projects }) => {
  return (
    <div className="pt-6 flex flex-col gap-10">
      {projects.map((project, index) => {
        return (
          <article className="flex flex-col-reverse lg:flex-row" key={index}>
            {/* info */}
            <div className="lg:w-1/2 p-3 flex flex-col gap-4">
              <h3 className="h3">{project.title}</h3>
              <span className="uppercase text-white/80">
                {project.category}
              </span>
              <p className="text-pretty">{project.description}</p>
              {/* tech icons */}
              <div className="flex gap-3 flex-wrap text-2xl">
                {project.technologies.map((tech, index) => {
                  const IconComponent = tech.icon;
                  return <IconComponent key={index} color={tech.color} />;
                })}
              </div>
              {/* buttons */}
              <div className="flex gap-3">
                {project.isDeployed && (
                  <Button
                    variant={"primary"}
                    size={"sm"}
                    onClick={() =>
                      window.open(
                        project.urlWebsite,
                        "_blank",
                        "noopener,noreferrer"
                      )
                    }
                  >
                    go live&nbsp;
                    <LuArrowUpRightFromCircle />
                  </Button>
                )}
                <Button
                  variant={"outline"}
                  size={"sm"}
                  onClick={() =>
                    window.open(
                      project.repository,
                      "_blank",
                      "noopener,noreferrer"
                    )
                  }
                >
                  code&nbsp;
                  <FaGithub />
                </Button>
              </div>
            </div>
            {/* todo: add photos to constants */}
            <div
              className="lg:w-1/2 cursor-pointer"
              onClick={() =>
                project.isDeployed
                  ? window.open(
                      project.urlWebsite,
                      "_blank",
                      "noopener,noreferrer"
                    )
                  : window.open(
                      project.repository,
                      "_blank",
                      "noopener,noreferrer"
                    )
              }
            >
              <img
                src={project.image}
                className="rounded-t-xl lg:rounded-r-xl lg:rounded-tl-none object-cover w-full h-full"
              />
            </div>
          </article>
        );
      })}
    </div>
  );
};

Project.propTypes = {
  projects: PropTypes.array.isRequired,
};
