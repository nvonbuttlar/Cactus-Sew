import React from "react";
import Spacewoman from "../images/spacewoman.jpg";
import { useSpring, animated } from "react-spring";
import "../styles/About.css";

const About = () => {
  const fade_transition = useSpring({ opacity: 1, from: { opacity: 0 } });
  return (
    <animated.div id="about" style={fade_transition} className="about-container">
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
    </animated.div>
  );
};

export default About;
