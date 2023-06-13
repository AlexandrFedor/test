import React from "react";
import links_podv from "../img/footer/carbon_link.png";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer className="main-footer">
      <img src={links_podv} alt="LA links" className="podval-links" />
      <Link to="/links" className="links_button">Контакты</Link>
    </footer>
  );
}

export default Footer;
