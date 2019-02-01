import FacebookLogin from 'react-facebook-login';
import React from 'react';
import { withRouter } from 'react-router-dom'
import * as axios from 'axios';

var Router = require('react-router');

const Login = (props) => {

  console.log(props);
  const responseFacebook = (response) => {

            console.log(response);
            
            if(response.email)
            {
                props.history.push({
                pathname: '/input',
                state: { login:1 }
                });              
            }
  }


  return(

    <div>
    <div className="pa4 tc">
  

    <h1>Spoonshot search</h1>

                <FacebookLogin
                    appId="295743641137618"
                    fields="name,email,picture"
                    callback={responseFacebook}
                />
                <br />
                <br />
      </div>
           </div>
     
    );
};

export default Login;

