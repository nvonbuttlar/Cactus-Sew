import React from "react";
import Spacewoman from "../images/spacewoman.jpg";
import "../styles/About.css";

const About = () => {
  return (
    <div id="about" className="about-container">
      <img className="about-picture" src={Spacewoman} alt="Spacewoman" />
      <div className="flex-column">
        <h1 className="about-heading"> Hello there, </h1>
        <p className="about-info">
          My name is Melinda, head of operations at Cactus Sewing. We are a
          custom costume, garment and alterations studio located in the west end
          of Toronto, where we make magic happen!
          <br />
          <br />
          These stitches be crazy!
        </p>
      </div>
    </div>
  );
};

export default About;
