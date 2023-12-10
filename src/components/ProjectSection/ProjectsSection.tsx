import React from "react";
import Project from "./components/Project";
import { projectEl } from "../../constants";

const ProjectsSection: React.FC = () => {
  return (
    <section className="flex flex-col space-y-5">
      <div className="text-center space-y-4">
        <h2>Our Work</h2>
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Laboriosam
          saepe, fugiat labore amet debitis adipisci a at ab porro excepturi!
        </p>
      </div>
      {projectEl.map((p) => (
        <Project {...p} />
      ))}
    </section>
  );
};

export default ProjectsSection;
