import React, { Component } from 'react';

class Card extends Component {
  render() {
    return (
    	<center>
      <div className="Card" className="bg-light-green dib br3 pa3 ma2 grow bw shadow5 dt dt--fixed w-80">
          <center>
           <p>Name:{this.props.id.name}</p>
           <p>Address:{this.props.id.address},</p><p>{this.props.id.crossstreet}</p>
           <p>Lat:{this.props.id.lat}</p>
           <p>Lon:{this.props.id.lon}</p>
           </center>

      </div>
      </center>
    );
  }
}

export default Card;
