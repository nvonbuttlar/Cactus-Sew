import React from "react";
import SewMachine from '../images/sewing-machine.svg';

import "../styles/About.css";

const About = () => {
  return (
    <div id="about" className="about-container">
      <div className="flex-column">
        <h1 className="about-heading"> Hello there, </h1>
        <p className="about-info">
          Welcome to Cactus Sewing Studio. We are a
          custom costume, garment and alterations studio located in the west end
          of Toronto, where we make magic happen!
        </p>
      </div>
    </div>
  );
};

export default About;
