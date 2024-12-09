import React from "react";
import "../Header/Header.scss";
import { Link, useLocation } from "react-router-dom";

const Header = () => {
  const location = useLocation();

  const handleProjectsClick = (e) => {
    if (location.pathname === "/") {
      e.preventDefault(); // Empêche le changement de route
      const section = document.getElementById("ProjectList");
      if (section) {
        section.scrollIntoView({ behavior: "smooth" });
      }
    }
  };
  const handleContactClick = (e) => {      
    e.preventDefault(); // Empêche le changement de route
    
    const contactSection = document.getElementById("Contact");

    if (location.pathname === "/about-me" || location.pathname === "/") { 
            // Scroller directement vers la section "Contact" si l'utilisateur est sur "/" ou "/about-me"

      if (contactSection) {
        contactSection.scrollIntoView({ behavior: "smooth" });
      }
    }
  };

  return (
    <header className="header">
      <h1>
        <span className="firstname">Imane</span>
        <span className="lastname">Kherbouche</span>
        <span className="role">Développeur web</span>
      </h1>
      <nav className="main-nav">
        {/* Ajout de la logique de défilement */}
        <Link to="/" onClick={handleProjectsClick}>
          Projets
        </Link>
        <Link to="/about-me">About-me</Link>
        <Link to= "#contact" onClick={handleContactClick}> Contact</Link>
      </nav>
    </header>
  );
};

export default Header;
