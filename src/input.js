import React, { Component } from 'react';
import axios from 'axios';

class App extends Component {



  state={
    near:'',
    latlon:'',
    radius:'',
    message:'',
  };

  componentDidMount(){
        
        if(this.props.location.state===undefined)
        {
           this.props.history.push(
                {pathname:"/"});
    
        }
    }

  handlechange=(e)=>{
    let change = {}
    change[e.target.name] = e.target.value
    this.setState(change,()=>{ 
    ; 
    });    
  }
  handlesubmit=(e)=>{
    e.preventDefault();
    var x="https://api.foursquare.com/v2/venues/search?client_id=W2J0NOATYILMITK1EHLMXWV2ZX3EZBPJGG3CGCST5U1NSXOJ&client_secret=DTS25ONLJA2HW3AVQBCZRKBXO3VGYP0ZUVXG3JAGX4OE4QCL&v=20191230&categoryId=4bf58dd8d48988d113951735"
    if(this.state.near)
    {
      x=x+"&near="+this.state.near;
      if(this.state.radius)
        x=x+"&radius"+this.state.radius
    }
    if(this.state.latlon)
    {
      x=x+"&ll="+this.state.latlon;
      if(this.state.radius)
        x=x+"&radius"+this.state.radius
    }
    if(this.state.near || this.state.latlon)
    {
      console.log(this.state);
      console.log(x);
      axios.get(x)
      .then(res =>{
        if(res.data.response.venues.length>1)
        {
          this.props.history.push({
          pathname: '/display',
          state: { detail: res.data.response.venues }
        });         
        }
        else
        {
          this.setState({"message":"No data available,do another search :)"})
        }
      });
    }
    else
    {
      this.setState({"message":"Please enter either latitutde and longitude or near field"});
    }
  };
 
    render() {
        return (
          <div>
           <div className="pv7 bg-light-yellow"  >
           <center>
            <form onSubmit={this.handlesubmit} >
            <input name="near" type="text" onChange={this.handlechange} placeholder="Near"/>
            <br/>
            <br/>
          
            <input name="latlon" type="text" onChange={this.handlechange} placeholder="latitutde,longitude"/>
            <br/>
            <br/>
          
           <input name="radius" type="text" onChange={this.handlechange} placeholder="Radium in meters"/>
           <br/>
           <br/>

           <button>submit</button>
            <br/>
          
           </form>
           <div className="dark-red">
           <h3>{this.state.message}</h3>
           </div>
           </center>
           
          
           </div>
          
           
            
          </div>
        );
    }
}

export default App;

