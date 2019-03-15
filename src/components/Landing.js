import React, { Component } from 'react';
import Logo2 from '../images/logo2.png';
import Logo3 from '../images/logo3.png';
import Cactus from '../images/cactus.png';
import '../styles/clickPage.css';
import '../styles/Landing.css';



class Landing extends Component {

  render() {

    return(
      <div className="container">
        <div className="flex-column">
          <h1 className="typewriter"> 
            Welcome to Cactus Sewing Studio  
          </h1>
        </div>
      </div>
    )
  }
}


export default Landing;