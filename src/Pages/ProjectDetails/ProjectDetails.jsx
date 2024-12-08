import React from "react";
import { useParams } from "react-router-dom";
import projects from "../../Data/projects.json";
import "../ProjectDetails/ProjectDetails.scss";
import { Link } from "react-router-dom";

const ProjectDetails = () => {
  const { id } = useParams();
  const project = projects.find((proj) => proj.id === parseInt(id));

  if (!project) {
    return <h2>Projet introuvable</h2>;
  }

  return (
    <div className="project-details">
      <h2 className="titleProject">{project.title}</h2>
      {/* Bannière */}
      <div className="banner-Project" style={{ backgroundImage:`url(${process.env.PUBLIC_URL}/Projets/${project.image})` }}>
      </div>

      {/* Contenu principal */}
      <section className="content-Project">
        <h3>Description :</h3>
        <p>{project.description}</p>
        <h3>Outils utilisés : </h3>
        <p>{project.Outils}</p>
        <h3>Compétences acquises : </h3>
        <p>{project.Compétences}</p>
      </section>
      <Link to={project.link} className="lienGit specific-link" target="_blank" rel="noopener noreferrer">
        Voir le projet sur GitHub
      </Link>
    </div>
  );
};

export default ProjectDetails;

