import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

import "./styles/App.css";
import "./styles/Header.css";
import "./styles/navButton.css";

import Landing from "./components/Landing.js";
import Background from "./images/studio.jpg";
import Cactus from "./images/cactus.png";
import About from "./components/About.js";
import Contact from "./components/Contact.js";
import Gallery from "./components/Gallery.js";
import Footer from "./components/Footer.js";

function App() {
  return (
    <Router>
      <div className="page-content">
        <img
          className="background"
          src={Background}
          alt="background of studio"
        />

        <div id="headercontainer">
          <div id="titlecontainer">
            <Link to="/" className="link">
              <img className="cactus" src={Cactus} alt="Cactus Logo" />
            </Link>
          </div>

          <div className="navBar">
            <Link to="/about" className="link navBtn">
              About
            </Link>
            <Link to="/gallery" className="link navBtn">
              Gallery
            </Link>
            <Link to="/contact" className="link navBtn">
              Contact
            </Link>
          </div>
        </div>

        <Route exact path="/" component={Landing} />
        <Route path="/about" component={About} />
        <Route path="/gallery" component={Gallery} />
        <Route path="/contact" component={Contact} />

        <Footer />
      </div>
    </Router>
  );
}

export default App;
