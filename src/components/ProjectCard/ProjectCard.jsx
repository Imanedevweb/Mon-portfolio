import React from "react";
import { Link } from "react-router-dom";
import "../ProjectCard/ProjectCard.scss";

const ProjectCard = ({ id, title, image,}) => {

  return (
     <Link to={`/projets/${id}`}>
          <div className="project-card" >
            <img src={`/images/projets/${image}`}   alt={`Aperçu de ${title}`} className="project-card__image" />
            <div className="project-card__content">
              <h3 className="project-card__title">{title}</h3>
            </div>
          </div>
    </Link>
  );
};

export default ProjectCard;
