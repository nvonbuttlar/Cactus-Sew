import React, { Component } from 'react';




class About extends Component {
  state = {
    on: false,
  }

  toggle() {
    this.setState({
      on: !this.state.on
    })
  }

  render() {

    return(
      <div>
        {this.state.on && <h1> HELLO!!!!!!!!! </h1>}
      </div>
    )
  }
}




export default About;