import React from "react";
import "./Banner.scss";
import imageLogo from "../../Assets/images/Banniere2IK.webp";

const Banner = () => {
  return (
    <div className="banner">
      <img src={imageLogo} alt="logo de Imane Kherbouche" />
      <div className="text-container">
        <span className="text line1">Bonjour,</span>
        <span className="text line2">je suis Imane Kherbouche, Développeur web débutant,</span>
        <span className="text line3">passionnée par la création de solutions digitales innovantes.</span>
        <span className="text line4">
          Mon objectif est d'apprendre, de me perfectionner, et de contribuer à
          des projets stimulants.
        </span>
      </div>
    </div>
  );
};

export default Banner;
