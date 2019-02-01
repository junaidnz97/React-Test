import React, { Component } from 'react';
import './App.css';
import {BrowserRouter,Route} from 'react-router-dom';
import Login from './login';
import input from './input';
import display from './display';

class App extends Component {

    render() {
        return (
            <BrowserRouter>
            <div className="App">
            <Route exact path="/" component={Login} />
            <Route path="/input" component={input} />
            <Route path="/display" component={display} />
           </div>
           </BrowserRouter>
        );
    }
}
export default App;

