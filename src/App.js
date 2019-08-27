import React from "react";
import { BrowserRouter, Route, Switch, NavLink } from "react-router-dom";

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
    <BrowserRouter>
      <div className="page-content">
        <img
          className="background"
          src={Background}
          alt="background of studio"
        />

        <div id="headercontainer">
          <div id="titlecontainer">
            <NavLink to="/" className="link">
              <img className="cactus" src={Cactus} alt="Cactus Logo" />
            </NavLink>
          </div>

          <div className="navBar">
            <NavLink
              to="/about"
              className="link navBtn"
              activeClassName="active"
            >
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

        <div>
          <Route
            render={() => (
              <Switch>
                <Route exact path="/" component={Landing} />
                <Route path="/about" component={About} />
                <Route path="/gallery" component={Gallery} />
                <Route path="/contact" component={Contact} />
              </Switch>
            )}
          />
        </div>

        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
