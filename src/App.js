import React, { Component } from 'react';
import './styles/App.css';
import './styles/navButton.css';
import Background from './images/studio.jpg';
import Header from './components/Header.js';
import About from './components/About.js';
import Gallery from './components/Gallery.js';
import Contact from './components/Contact.js';
import Footer from './components/Footer.js';



class App extends Component {


  render() {
    return (
      <div>
        <img
          className="background"
          src={Background}
          alt="background of studio"
        />

          <Header/>

        <div className="body">

          <About active={this.state.active}/>
          <Gallery active={this.state.active}/>
          <Contact active={this.state.active}/>

        </div>

        <Footer/>
      </div>
    );
  }
}

export default App;
