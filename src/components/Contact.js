import React, { Component } from "react";
import ContactMap from "./Map.js";
import "../styles/Contact.css";

class Contact extends Component {
  render() {
    let contactPage = <ContactMap className="map" />;

    return (
      <div className="contact-container">
        <div className="map-container">{contactPage}</div>
        <div className="contact-info">
          <h2>Come find us!</h2>
          <p>
            We're located at 1 Wiltshire Avenue Suite #219, just a short walk
            from Landsdowne & Dupont.
          </p>
          <p>
            <strong> Address: </strong> 1 Wiltshire Ave, Suite #219, Toronto,
            Ontario <br />
            <br />
            <strong> E-mail: </strong> melinda@cactussew.ca
            <br />
            <br />
            <strong> Phone: </strong> +1 647 278 2700
            <br />
            <br />
          </p>
        </div>
      </div>
    );
  }
}

export default Contact;
