import React, { Component } from 'react';
import PageTransition from 'react-router-page-transition';
import '../styles/Transition.css';
import About from './About.js';


class Transition extends Component {


  render() {
    return (
      <div id="list-page" class="transition-item">
        <PageTransition>
          <About/>
        </PageTransition>
      </div>
    )
  }
}

export default Transition;