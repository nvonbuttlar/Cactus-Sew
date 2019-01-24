import React, { Component } from 'react';
import '../styles/navButton.css';



class Contact extends Component {
  state = {
    on: false,
  }

  toggle = () => {
    this.setState({
      on: !this.state.on
    })
  }

  render() {

    return(
      <div>
        <button onClick={this.toggle} className="navItem"> Contact </button>

        {this.state.on && (
          <div className="about-container">
            <h1> Now, This a story all about how my life got turned Upside Down  </h1>
          </div>
        )}

      </div>
    )
  }
}

export default Contact;