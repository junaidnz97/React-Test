import React, { Component } from 'react';
import { Map, GoogleApiWrapper } from 'google-maps-react';
import { InfoWindow, Marker } from 'google-maps-react';
const mapStyles = {
  width: '100%',
  height: '100%'
};

export class MapContainer extends Component {
   state = {
    showingInfoWindow: false,  
    activeMarker: {},          
    selectedPlace: {}          
  };

  componentDidMount(){
        console.log(this.props.venues[0]);
    }

   onMarkerClick = (props, marker, e) =>
    this.setState({
      selectedPlace: props,
      activeMarker: marker,
      showingInfoWindow: true
    });

  onClose = props => {
    if (this.state.showingInfoWindow) {
      this.setState({
        showingInfoWindow: false,
        activeMarker: null
      });
    }
  };

  render() {


    const mapcomponent=this.props.venues.map((user,i)=>{
          //console.log(this.props.venues[i].location);

      let temp={
        "name":this.props.venues[i].name,
        "address":this.props.venues[i].location.address,
        "crossstreet":this.props.venues[i].location.crossstreet,
        "city":this.props.venues[i].location.city,
        "lat":this.props.venues[i].location.lat,
        "lon":this.props.venues[i].location.lng
      }      

        return  <Marker title={temp.name} name={temp.name} position={{lat: temp.lat, lng: temp.lon}} />
      });

    return (
      
      <div style={{ height: '100vh', width: '100%' }}>
        
       <Map
        google={this.props.google}
        zoom={10}
        initialCenter={{ lat: this.props.venues[0].location.lat, lng: this.props.venues[0].location.lng }}
      >
        {mapcomponent}
        <InfoWindow
          marker={this.state.activeMarker}
          visible={this.state.showingInfoWindow}
          onClose={this.onClose}
        >
          <div>
            <h4>{this.state.selectedPlace.name}</h4>
          </div>
        </InfoWindow>
      </Map>
          
        
        
        


      </div>
          );
  }
}

export default GoogleApiWrapper({
  apiKey: 'AIzaSyC3Dx9gSmgUk3utNYDq1nMnHEY74nTd8u0'
})(MapContainer);