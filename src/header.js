import React, { Component } from 'react';
import { BrowserRouter as NavLink } from "react-router-dom";
 
export default class Header extends Component{
    render(){
        return (
            <div>
            <ul>
                <li><NavLink to="/" exact activeStyle={activeStyle}>Projects</NavLink></li>
                <li><NavLink to="/about" activeStyle={activeStyle}>About</NavLink></li>
                <li><NavLink to="/contact" activeStyle={activeStyle}>Contact</NavLink></li>
            </ul>
            </div>
        )
    }
}
const activeStyle = {
    color: "red",
    fontSize: 18
  }