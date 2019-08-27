import React, { Component } from "react";
import "../styles/Footer.css";
import { FaInstagram } from "react-icons/fa";
import { FaFacebookSquare } from "react-icons/fa";

const currentYear = new Date().getFullYear();

class Footer extends Component {
  render() {
    return (
      <div className="footer">
        <div className="social">
          <a
            className="social-link"
            href="https://www.instagram.com/cactussewingstudio/?hl=en"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaInstagram className="insta" />
          </a>
          <a
            className="social-link"
            href="https://www.facebook.com/Cactussewingstudio/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaFacebookSquare className="fb" />
          </a>
        </div>

        <p className="year"> &copy; {currentYear} </p>

        <div className="contact">
          <h4>Cactus Sewing Studio</h4>
          <ul>
            <li> e: melinda@cactussew.ca</li>
            <li> p: +1 647 278 2700</li>
            <li> 1 Wiltshire Ave, Suite #219</li>
            <li> Toronto, Ontario</li>
          </ul>
        </div>
      </div>
    );
  }
}

export default Footer;
