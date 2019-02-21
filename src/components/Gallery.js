import React, { Component } from 'react';
import Carousel from './Carousel.js';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import '../styles/clickPage.css';





class Gallery extends Component {

  render() {

    return(
      <div className="container">
        <p> Gallery </p>
        <Carousel />
      </div>
    )
  }
}


export default Gallery;