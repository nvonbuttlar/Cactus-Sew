import React, { Component } from 'react';
import Logo from '../images/logo.png';
import '../styles/Header.css';
import '../styles/navButton.css';

class Header extends Component {
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

    return(
      <div className="header">

        <img className="logo" src={Logo} alt="Cactus Logo"/>
        <h1 className="title"> Cactus Sewing Studio. </h1>

        <div className="navBar">
          <button className="navBtn" onClick={this.aboutClicked}> About </button>
          <button className="navBtn" onClick={this.galleryClicked}> Gallery </button>
          <button className="navBtn" onClick={this.contactClicked}> Contact </button>
        </div>

      </div>
    )
  }
}



export default Header;
