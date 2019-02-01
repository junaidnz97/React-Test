import React,{Component} from 'react';
import Card from './card';


class Cardlist extends Component {
  render() {
  	const cardcomponent=this.props.venues.map((user,i)=>{
          //console.log(this.props.venues[i].location);

      let temp={
        "name":this.props.venues[i].name,
        "address":this.props.venues[i].location.address,
        "crossstreet":this.props.venues[i].location.crossstreet,
        "city":this.props.venues[i].location.city,
        "lat":this.props.venues[i].location.lat,
        "lon":this.props.venues[i].location.lng
      }      

    		return <Card id={temp} />
    	});
    
    return (

      <div className="pa3">
	
		{cardcomponent}
	
	</div>

	);
    
  
}
}

export default Cardlist;

