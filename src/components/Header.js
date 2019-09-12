import React, { useState } from "react";
import { NavLink } from "react-router-dom";

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
          <NavLink to="/" className="link">
            <img className="cactus" src={Cactus} alt="Cactus Logo" />
          </NavLink>
        </div>

        <div className="navBar">
          <NavLink to="/about" className="link navBtn" activeClassName="active">
            About
          </NavLink>
          <NavLink
            to="/gallery"
            className="link navBtn"
            activeClassName="active"
          >
            Gallery
          </NavLink>
          <NavLink
            to="/contact"
            className="link navBtn"
            activeClassName="active"
          >
            Contact
          </NavLink>
        </div>
      </div>
      <div id="mobile-header">
        <NavLink to="/" className="link">
          <img className="cactus" src={Cactus} alt="Cactus Logo" />
        </NavLink>
        <button onClick={() => setdropMenu(!dropMenu)}>
          <FontAwesomeIcon
            className="menu-icon"
            color="white"
            icon={faBars}
            size="3x"
          />
          ˝
        </button>
      </div>
      {dropMenu && <div className="menu-container">Hello</div>}
    </>
  );
};

export default Header;
