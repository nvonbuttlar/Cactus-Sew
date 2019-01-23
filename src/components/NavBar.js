import React from 'react';
import '../styles/NavBar.css';



function NavBar () {
    const items = ['About', 'Gallery', 'Contact']
    const listItems = items.map((item) =>
      <button className="navItem">{item}</button>
      );

    return (
      <ul className="navList">{listItems}</ul>
    );

  }

export default NavBar;




