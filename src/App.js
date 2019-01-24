import React, { Component } from 'react';
import './styles/App.css';
import Background from './images/studio.jpg';
import Logo from './images/logo.png';
import About from './components/About.js';
import Gallery from './components/Gallery.js';
import Contact from './components/Contact.js';
import Footer from './components/Footer.js';



class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      myClass: '',
    }

  this.aboutClicked = this.aboutClicked.bind(this);
  // this.galleryClicked = this.galleryClicked.bind(this);
  // this.aboutClicked = this.aboutClicked.bind(this);
  }

  aboutClicked(props) {
    if (this.state.myClass === '') {
      this.setState({
        myClass: 'about',
      })
    } else {
      this.setState({
        myClass:'',
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

        <header className="header">

          <img className="logo" src={Logo} alt="Cactus Logo"/>
          <h1 className="title"> Cactus Sewing Studio. </h1>

          <div className="navBar">
            <button onClick={this.aboutClicked}> about </button>
            <button onClick={this.galleryClicked}> gallery </button>
            <button onClick={this.contactClicked}> contact </button>
          </div>

        </header>

        <body className="body">
          <About/>
        </body>

        <Footer/>
      </div>
    );
  }
}

export default App;
