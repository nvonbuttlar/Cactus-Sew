import React, { Component } from 'react';
import L from 'leaflet';
import styled from 'styled-components';
import 'leaflet/dist/leaflet.css';
import '../styles/Map.css';
import '../styles/clickPage.css';

// Coordinates @ Cactus Sewing Stuido [43.6676617,-79.4520773]

const MapContainer = styled.div`
  width: ${props => props.width};
  height: ${props => props.height};
`

class ContactMap extends React.Component {

  componentDidMount(){
    this.map = L.map('map', {
      center: [43.6676617, -79.4520773],
      zoom: 17,
      zoomControl: false,
    });

    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      detectRetina: true,
      maxZoom: 20,
      maxNativeZoom: 17,
      zoomOffset: 0,
    }).addTo(this.map);
  }

  render() {

    return (
      <MapContainer height="65%" width="70%" id="map" className="map-container"/>
    );
  }
}


export default ContactMap;