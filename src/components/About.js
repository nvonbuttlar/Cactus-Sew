import React, { Component } from "react";
import Spacewoman from "../images/spacewoman.jpg";
import "../styles/About.css";

class About extends Component {
  render() {
    return (
      <div className="container">
        <img className="about-picture" src={Spacewoman} alt="Spacewoman" />
        <div className="flex-column">
          <h1 className="about-heading"> Hey, my name is Melinda. </h1>
          <p className="about-info">
            
            The Brady Bunch the Brady Bunch that's the way we all became the
            Brady Bunch. The movie star the professor and Mary Ann here on
            Gilligans Isle. Movin' on up to the east side. We finally got a
            piece of the pie. Flying away on a wing and a prayer. Who could it
            be? Believe it or not its just me? Come and play. Everything's A-OK.
            Friendly neighbors there that's where we meet. Can you tell me how
            to get how to get to Sesame Street. Just sit right back and you'll
            hear a tale a tale of a fateful trip that started from this tropic
            port aboard this tiny ship.
          </p>
        </div>  
      </div>
    );
  }
}

export default About;
