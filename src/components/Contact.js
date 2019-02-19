import React, { Component } from 'react';
import ContactMap from './Map.js';
import '../styles/navButton.css';
import '../styles/clickPage.css';



class Contact extends Component {

  render() {

    let contactPage = <ContactMap className="map"/>;

    return(
      <div className="container">
        <p>Contact</p>
        {contactPage}
      </div>
    )
  }
}

export default Contact;