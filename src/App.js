import React, { Component } from 'react';
import './styles/App.css';
import NavBar from './components/NavBar.js';
import Logo from './images/logo.png';
import Footer from './components/Footer.js';
import Background from './images/studio.jpg';
import About from './components/About.js';


class App extends Component {
  render() {
    return (
      <div>
        <img
          className="background"
          src={Background}
          alt="background of studio"
        />

        <header className="header">

          <img className="logo" src={Logo} alt="Cactus Logo"/>
          <h1 className="title"> Cactus Sewing Studio. </h1>
          <NavBar />
        </header>

        <body>
          <About/>
        </body>

        <Footer/>
      </div>
    );
  }
}

export default App;
