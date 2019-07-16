import React, { Component } from "react";
import GoogleMapReact from "google-map-react";


// Coordinates @ Cactus Sewing Stuido [43.6676617,-79.4520773]

const AnyReactComponent = ({ text }) => <div>{text}</div>;

class GoogleMap extends Component {
  static defaultProps = {
    center: {
      lat: 43.6676617,
      lng: -79.4520773
    },
    zoom: 11
  };

  render() {
    const api_key = process.env.API_KEY;
    console.log("XXX", api_key);
    return (
      // Important! Always set the container height explicitly
      <div style={{ height: "300px", width: "500px" }}>
        <GoogleMapReact
          bootstrapURLKeys={{ key: api_key }}
          defaultCenter={this.props.center}
          defaultZoom={this.props.zoom}
        >
          <AnyReactComponent
            lat={43.6676617}
            lng={-79.4520773}
            text="My Marker"
          />
        </GoogleMapReact>
      </div>
    );
  }
}

export default GoogleMap;
