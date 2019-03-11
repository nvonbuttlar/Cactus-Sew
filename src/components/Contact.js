import React, { Component } from 'react';
import ContactMap from './Map.js';
import '../styles/clickPage.css';
import '../styles/Contact.css';



class Contact extends Component {

  render() {

    let contactPage = <ContactMap className="map"/>;

    return(
      <div className="container info-container">
        {contactPage}
        <div className="contact-info">
          <h2>Come find us!</h2>  
          <p> We're located at 1 Wiltshire Avenue Suite #219, just a short walk from Landsdowne & Dupont.</p>        
          <p>
            e: melinda@cactussew.ca <br/>
            p: +1 647 278 2700 <br/>
            1 Wiltshire Ave, Suite #219 <br/>
            Toronto, Ontario
          </p>
        </div>
      </div>
    )
  }
}

export default Contact;