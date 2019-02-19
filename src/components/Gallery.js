import React, { Component } from 'react';
import '../styles/clickPage.css';




class Gallery extends Component {

  render(props) {

    const isActive = this.props.active.gallery;
    let galleryPage;

    if (isActive) {
      galleryPage = <p className="container"> This is the gallery page
        </p>;
    }


    return(
      <div>
        {galleryPage}
      </div>
    )
  }
}


export default Gallery;