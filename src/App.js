import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import './styles/App.css';
import './styles/navButton.css';
import Background from './images/studio.jpg';
import Header from './components/Header.js'; // this is bringing in header.css, but this file in particular is not being used.
import Logo from './images/logo.png';
import About from './components/About.js';
import Gallery from './components/Gallery.js';
import Contact from './components/Contact.js';
import Footer from './components/Footer.js';
import Transition from './components/Transition.js';


class App extends Component {


  render() {
    return (
      <Router>

        <div>

          <img
            className="background"
            src={Background}
            alt="background of studio"
            />

          <div id="headercontainer">
            <div id="titlecontainer">
              <Link to={'/'} className="link"> <img className="logo" src={Logo} alt="Cactus Logo"/> </Link>
              <Link to={'/'} className="link"> <h1 className="title"> Cactus Sewing Studio. </h1> </Link>
            </div>

            <div className="navBar">
              <Link to={'/about'} className="link"> <button className="navBtn"> About </button> </Link>
              <Link to={'/gallery'} className="link"> <button className="navBtn"> Gallery </button> </Link>
              <Link to={'/contact'} className="link"> <button className="navBtn"> Contact </button> </Link>
            </div>
          </div>

          <div className="body">
              <Route path="/about" component={About}/>
              <Route path="/gallery" component={Gallery}/>
              <Route path="/contact" component={Contact}/>
          </div>

          <Footer/>

        </div>

      </Router>
    );
  }
}

export default App;
