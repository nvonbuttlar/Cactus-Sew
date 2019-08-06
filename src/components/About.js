import React from "react";
import Spacewoman from "../images/spacewoman.jpg";
import { useSpring, animated } from "react-spring";
import "../styles/About.css";

function About() {
  const fade_transition = useSpring({ opacity: 1, from: { opacity: 0 } });
  return (
      <animated.div style={fade_transition} className="about-container">
        <img className="about-picture" src={Spacewoman} alt="Spacewoman" />
        <div className="flex-column">
          <h1 className="about-heading"> Hello there, </h1>
          <p className="about-info">
            The Brady Bunch the Brady Bunch that's the way we all became the
            Brady Bunch. The movie star the professor and Mary Ann here on
            Gilligans Isle. Movin' on up to the east side. We finally got a
            piece of the pie. Flying away on a wing and a prayer. Who could it
            be? Believe it or not its just me? Come and play. Everything's A-OK.
            Friendly neighbors there that's where we meet. Can you tell me how
            to get how to get to Sesame Street.
          </p>
        </div>
      </animated.div>
  );
}

export default About;
