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
import About from './components/About.js';
import Gallery from './components/Gallery.js';
import Contact from './components/Contact.js';
import Footer from './components/Footer.js';

class App extends Component {

  render() {
    return (
      <Router>
        <Route render={({ location }) => console.log(location) || (
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
                <Link to={'/contact'} className="link"> <button className="navBtn"> Contact </button> </Link>
                <Link to={'/gallery'} className="link"> <button className="navBtn"> Gallery </button> </Link>
              </div>

            </div>

            <div className="body">
            
               
                <TransitionGroup>
                  <CSSTransition key={location.key} timeout={0} classNames='fade'>
                    <Switch location={location}>
                      <Route path="/" component={Landing}/>
                      <Route exact={true} path="/about" component={About}/>
                      <Route exact={true} path="/contact" component={Contact}/>
                      <Route exact={true} path="/gallery" component={Gallery}/>
                    </Switch>
                  </CSSTransition>
                </TransitionGroup>
              
            </div>

            <Footer/>

          </div> 
          )}/>
      </Router>
    );
  }
}




export default App;
