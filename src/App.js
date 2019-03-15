import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';
import { TransitionGroup, CSSTransition } from 'react-transition-group';
import './styles/App.css';
import './styles/navButton.css';
import './styles/Transition.css';
import Landing from './components/Landing.js';
import Background from './images/studio.jpg';
import Header from './components/Header.js'; // this is bringing in header.css, but this file in particular is not being used.
import Logo from './images/logo.png';
import Cactus from './images/cactus.png';
import About from './components/About.js';
import Gallery from './components/Gallery.js';
import Contact from './components/Contact.js';
import Footer from './components/Footer.js';

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
                <Link to={'/'} className="link"> <img className="cactus" src={Cactus} alt="Cactus Logo"/> </Link>
                <Link to={'/'} className="link"> <h1 className="title"> Cactus Sewing Studio. </h1> </Link>
              </div>

              <div className="navBar">
                <Link to={'/about'} className="link navBtn"> About </Link>
                <Link to={'/contact'} className="link navBtn"> Contact </Link>
                <Link to={'/gallery'} className="link navBtn"> Gallery </Link>
              </div>

            </div>

            <div className="body">
            
              <Route render={({ location }) => console.log(location) || (
                <TransitionGroup>
                  <CSSTransition key={location.key} timeout={0} classNames='fade'>
                    <Switch location={location}>
                      <Route exact={true} path="/" component={Landing}/>
                      <Route exact={true} path="/about" component={About}/>
                      <Route exact={true} path="/contact" component={Contact}/>
                      <Route exact={true} path="/gallery" component={Gallery}/>
                    </Switch>
                  </CSSTransition>
                </TransitionGroup>
              )}/>
              
            </div>

            <Footer/>

          </div> 
          
      </Router>
    );
  }
}




export default App;
