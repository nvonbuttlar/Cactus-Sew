import React, { Component } from 'react';
import '../styles/Footer.css';
import { FaInstagram } from 'react-icons/fa';
import { FaFacebookSquare } from 'react-icons/fa';


const currentYear = new Date().getFullYear();

class Footer extends Component {

  render() {
    return (

      <div className="footer">

        <div className="social">
          <a className="social-link" href="https://www.instagram.com/cactussewingstudio/?hl=en" target="_blank">
            <FaInstagram className="insta"/>
          </a>
          <a className="social-link" href="https://www.facebook.com/Cactussewingstudio/" target="_blank">
            <FaFacebookSquare className="fb"/>
          </a>
        </div>

        <p className="year"> {currentYear} </p>

        <p className="contact">
          e: melinda@cactussew.ca <br/>
          p: +1 647 278 2700 <br/>
          1 Wiltshire Ave, Suite #219 <br/>
          Toronto, Ontario
        </p>

      </div>



    );
  }
}

export default Footer;