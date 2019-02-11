import React, { Component } from 'react';
import ContactMap from './Map.js';
import '../styles/navButton.css';
import '../styles/clickPage.css';



class Contact extends Component {

  render(props) {

    const isActive = this.props.active.contact;
    let contactPage;

    if (isActive) {
      contactPage = <div className="container">

        <ContactMap/>

      </div>;
    }

    return(
      <div>
        {contactPage}
      </div>
    )
  }
}

export default Contact;