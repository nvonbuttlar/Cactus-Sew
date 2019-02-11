import React, { Component } from 'react';
import './styles/App.css';
import './styles/navButton.css';
import Background from './images/studio.jpg';
import Header from './components/Header.js'; // this is bringing in header.css
import Logo from './images/logo.png';
import About from './components/About.js';
import Gallery from './components/Gallery.js';
import Contact from './components/Contact.js';
import Footer from './components/Footer.js';



class App extends Component {
  constructor(props) {
      super(props);
      this.state = {
        active: {
          about: false,
          gallery: false,
          contact: false,
        }
      }

    this.aboutClicked = this.aboutClicked.bind(this);
    this.galleryClicked = this.galleryClicked.bind(this);
    this.contactClicked = this.contactClicked.bind(this);
    }


    aboutClicked() {
      if (this.state.active.about === false) {
        this.setState({
          active: {
            about: true
          }
        })
      } else {
        this.setState({
          active: {
            about: false
          }
        })
      }
    }

    galleryClicked() {
      if (this.state.active.gallery === false) {
        this.setState({
          active: {
            gallery: true
          }
        })
      } else {
        this.setState({
          active: {
            gallery: false
          }
        })
      }
    }

    contactClicked() {
      if (this.state.active.contact === false) {
        this.setState({
          active: {
            contact: true
          }
        })
      } else {
        this.setState({
          active: {
            contact: false
          }
        })
      }
    }


  render() {
    return (
      <div>
        <img
          className="background"
          src={Background}
          alt="background of studio"
        />

        <div id="headercontainer">

          <div id="titlecontainer">
            <img className="logo" src={Logo} alt="Cactus Logo"/>
            <h1 className="title"> Cactus Sewing Studio. </h1>
          </div>

          <div className="navBar">
            <button className="navBtn" onClick={this.aboutClicked}> About </button>
            <button className="navBtn" onClick={this.galleryClicked}> Gallery </button>
            <button className="navBtn" onClick={this.contactClicked}> Contact </button>
          </div>

        </div>

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
