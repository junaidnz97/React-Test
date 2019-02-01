import React, { Component } from 'react';
import Cardlist from './cardlist';
import './display.css';
import GoogleApiWrapper from './Map';

class display extends Component {

 state={
   flag:"",
   detail:""
  };
    componentDidMount(){
        if(this.props.location.state===undefined)
        {
            this.setState({flag:0});
        }
        else
        {
            this.setState({flag:1});
            this.setState({detail:this.props.location.state.detail});
        }
    }

    render() {

       let value="";
       let value2="";
      // console.log("flag=" + this.state.flag);
        if(this.state.flag==0)
        {
        //    console.log("pqrs");
            value=<h2>Go to input page and give proper values</h2>
            value2="";
        }
        if(this.state.flag==1)
        {
         //   console.log("abcd");
           value= <Cardlist venues={this.props.location.state.detail}/> 
           value2 =<GoogleApiWrapper venues={this.props.location.state.detail}/> 
 
        }

        return (
            <div>
                <div className="split left">
                        {value}
                </div>

                <div className="split right">
                    <div >
                        {value2}
                    </div>
                </div> 
           
            </div>
        );
    }
}

export default display;

