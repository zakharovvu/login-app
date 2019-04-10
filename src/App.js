import React, { Component } from 'react';
import { NavLink, Route} from "react-router-dom";

import './App.css';
import Registration from "./Registration"
import Home from "./Home"
import Listusers from "./Listusers"

class App extends Component {
  render() {
    return (
      <div>
      <NavLink exact to="/" >Home </NavLink>
      <NavLink exact to="/registration" >Registration</NavLink>
      <NavLink exact to="/listusers" >Listusers</NavLink>
     

      <Route exact path="/" component={Home} />
      <Route exact path="/registration" component={Registration} />
      <Route exact path="/listusers" component={Listusers} />
      
        
      </div>
    );
  }
}

export default App; 
