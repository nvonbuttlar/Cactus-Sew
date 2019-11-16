import React from "react";
import { HashLink as Link } from "react-router-hash-link";

import "../styles/Header.css";
import "../styles/navButton.css";

import Cactus from "../images/cactus.png";

const Header = () => {

  window.onscroll = () => {
    const top = window.pageYOffset || document.documentElement.scrollTop;
    const header = document.getElementById("nav");
    if (top > 150) {
      header.style.background = "#6fbda0";
      header.style.boxShadow = "0px 1px 8px 1px rgba(0, 0, 0, 1)";
    } else {
      header.style.background = "transparent";
      header.style.boxShadow = "none";
      header.style.transition = "background .2s ease-in-out";
    }
  };

  return (
    <div id="nav" className="header">
      <div className="titlecontainer">
        <Link to="#landing" className="link">
          <img className="cactus" src={Cactus} alt="Cactus Logo" />
        </Link>
      </div>

      <div className="navBar">
        <Link to="#about" className="link navBtn" activeClassName="active">
          About
        </Link>
        <Link to="#gallery" className="link navBtn" activeClassName="active">
          Gallery
        </Link>
        <Link to="#contact" className="link navBtn" activeClassName="active">
          Contact
        </Link>
      </div>
    </div>
  );
};

export default Header;
