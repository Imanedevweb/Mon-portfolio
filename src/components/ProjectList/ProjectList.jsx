import React from "react";

import "../ProjectList/ProjectList.scss";
import ProjectCard from "../../components/ProjectCard/ProjectCard";
import projects from "../../Data/projects.json";


const ProjectsList = () => {
  return (
    <>
    <h2 className="section-title">PROJETS</h2>
    <section className="projects-list" id="ProjectList">
      {projects.map((project) => (
        <ProjectCard
          key={project.id}
          id={project.id}
          title={project.title}
          description={project.description}
          image={project.image}
        />
      ))}
    </section>
    </>
  );
};

export default ProjectsList;

