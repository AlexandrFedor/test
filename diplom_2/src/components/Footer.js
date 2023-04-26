import React from "react";
import links_podv from "../img/footer/carbon_link.png";

function Footer() {
  return (
    <footer className="main-footer">
      <img src={links_podv} alt="LA links" className="podval-links" />
      <a href="#" className="links_button">Контакты</a>
    </footer>
  );
}

export default Footer;
