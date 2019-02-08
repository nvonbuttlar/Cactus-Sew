import React, { Component } from 'react';
import '../styles/navButton.css';
import '../styles/clickPage.css';



class Contact extends Component {

  render(props) {

    const isActive = this.props.active.contact;
    let contactPage;

    if (isActive) {
      contactPage = <p className="container"> This is the mafuckin contact page This is the mafuckin contact pageThis is the mafuckin contact pageThis is the mafuckin contact pageThis is the mafuckin contact page This is the mafuckin contact pageThis is the mafuckin contact pageThis is the mafuckin contact pageThis is the mafuckin contact pageThis is the mafuckin contact page</p>;
    }

    return(
      <div>
        {contactPage}
      </div>
    )
  }
}

export default Contact;