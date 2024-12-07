import React from "react";
import "./AboutMe.scss";

const AboutMe = () => {
  return (
    <main className="about-me">
      <section className="about-me-content">
        <h1>À propos de moi</h1>
        <p>
          Passionnée par le digital et la création, j’ai entrepris une
          reconversion professionnelle dans le développement web en suivant une
          formation avec <strong>OpenClassrooms</strong>. Diplômée d’un{" "}
          <strong>Master 2 en communication</strong>, j’ai acquis une solide
          expérience en <strong>rédaction</strong> et <strong>journalisme</strong>, 
          des domaines où j’ai développé des compétences en storytelling et en gestion 
          de contenu.
        </p>
        <p>
          Lors de ma formation en communication, j’ai eu l’opportunité de
          m’initier au <strong>web design</strong> et au{" "}
          <strong>développement web</strong>. Cette première immersion dans le monde
          du numérique a éveillé ma curiosité et nourri mon envie d’aller plus
          loin dans ce domaine.
        </p>
        <p>
          Aujourd’hui, en complétant cette initiation avec une formation
          technique et pratique, je me spécialise dans le développement web,
          avec pour objectif de transformer cette passion en une nouvelle
          carrière. Cette reconversion représente pour moi une belle opportunité
          d’allier créativité, rigueur et compétences techniques dans des projets
          porteurs de sens.
        </p>
      </section>
    </main>
  );
};

export default AboutMe;
