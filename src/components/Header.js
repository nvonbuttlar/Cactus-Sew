import React, { useState } from "react";
import { HashLink as Link } from "react-router-hash-link";

import "../styles/Header.css";
import "../styles/navButton.css";

import Cactus from "../images/cactus.png";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";

const Header = () => {
  const [dropMenu, setdropMenu] = useState(false);
  return (
    <>
      <div id="desktop-header">
        <div id="titlecontainer">
          <Link to="/" className="link">
            <img className="cactus" src={Cactus} alt="Cactus Logo" />
          </Link>
        </div>

        <div className="navBar">
          <Link to="#about" className="link navBtn" activeClassName="active">
            About
          </Link>
          <Link to="#contact" className="link navBtn" activeClassName="active">
            Contact
          </Link>
          <Link to="#gallery" className="link navBtn" activeClassName="active">
            Gallery
          </Link>
        </div>
      </div>
    </>
  );
};

export default Header;
