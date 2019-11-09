import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import "./styles/App.css";

import Landing from "./components/Landing.js";
import Background from "./images/studio.jpg";
// import Cactus from "./images/cactus.png";
import Header from "./components/Header";
import About from "./components/About.js";
import Contact from "./components/Contact.js";
import Gallery from "./components/Gallery.js";
import Footer from "./components/Footer.js";

const App = () => {
  return (
    <BrowserRouter>
      <div className="page-content">
        <div className="overlay"></div>
{/* 
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
        </div> */}
        
        <Header />
        <Landing />
        <About />
        <Contact />
        <Gallery />
        <Footer />
      </div>
    </BrowserRouter>
  );
};

export default App;
