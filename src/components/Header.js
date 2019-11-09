import React, { useState } from "react";
import { HashLink as Link } from "react-router-hash-link";

import "../styles/Header.css";
import "../styles/navButton.css";

import Cactus from "../images/cactus.png";

const Header = () => {
  return (
    <>
      <div className="header">
        <div className="titlecontainer">
          <Link to="#landing" className="link">
            <img className="cactus" src={Cactus} alt="Cactus Logo" />
          </Link>
        </div>

        <div className="navBar">
          <Link
            to="#about"
            className="link navBtn"
            activeClassName="active"
          >
            About
          </Link>
          <Link
            to="#contact"
            className="link navBtn"
            activeClassName="active"
          >
            Contact
          </Link>
          <Link
            to="#gallery"
            className="link navBtn"
            activeClassName="active"
          >
            Gallery
          </Link>
        </div>
      </div>
    </>
  );
};

export default Header;
