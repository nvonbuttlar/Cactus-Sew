import React, { Component } from 'react';
import '../styles/clickPage.css';




class Gallery extends Component {

  render() {

    let galleryPage = <p> This is the gallery page </p>;

    return(
      <div className="container">
        {galleryPage}
      </div>
    )
  }
}


export default Gallery;