import React from "react";
import "./Footer.scss";

const Footer = () => {
  const contactInfo = {
    name: "Imane Kherbouche",
    email: "imane.kherbouche@gmail.com",
    phone: "+33 7 62 74 55 84",
    socials: [
      { name: "GitHub", link: "https://github.com/Imanedevweb" },
      { name: "LinkedIn", link: "https://www.linkedin.com/in/imane-kherbouche-54287962/" },
    ],
  };

  return (
    <footer className="footer">
      <div className="footer__container">
        <div className="footer__info">
          <h2 className="footer__title" id="contact">Contactez-moi</h2>
          <p>Email : <a href={`mailto:${contactInfo.email}`}>{contactInfo.email}</a></p>
          <p>Téléphone : <a href={`tel:${contactInfo.phone}`}>{contactInfo.phone}</a></p>
        </div>
        <div className="footer__socials">
          <h2 className="footer__title">Suivez-moi</h2>
          <ul className="footer__social-list">
            {contactInfo.socials.map((social, index) => (
              <li key={index}>
                <a href={social.link} target="_blank" rel="noopener noreferrer">
                  {social.name}
                </a>
              </li>
            ))}
          </ul>
        </div>
        <div className="footer__copyright">
          <p>© {new Date().getFullYear()} {contactInfo.name}. Tous droits réservés.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
