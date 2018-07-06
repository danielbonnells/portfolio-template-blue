import React, { Component } from 'react';
import { BrowserRouter as Router, Route, NavLink } from "react-router-dom";
import { About, Contact } from './pages';
import  Projects  from './projects';
import './App.css';


class App extends Component {
constructor(props){
  super(props)

  this.state = {
    isNavOpen: false
  }


}

showNav = () => {
  this.setState({
    isNavOpen : !this.state.isNavOpen
  })
  
}


  render() {
    return (
      <Router>
      
        <div>
          <div id="navigation">
            <div  id="nav-button-container">
            <button  id="nav-button" onClick={this.showNav} ><i className="fas fa-bars"></i></button>
            </div>

              {this.state.isNavOpen  && (
                <div className="nav-links-container">
                  <ul className="nav-links">
                      <li><NavLink to="/projects" exact activeStyle={activeStyle}>Projects</NavLink></li>
                      <li><NavLink to="/about" activeStyle={activeStyle}>About</NavLink></li>
                      <li><NavLink to="/contact" activeStyle={activeStyle}>Contact</NavLink></li>
                  </ul>
                </div>
              )}
            
          </div>
         
        <Route path="/" exact component={Projects}></Route>
        <Route path="/projects"  component={Projects}></Route>
        <Route path="/about" exact component={About}></Route>
        <Route path="/contact" exact component={Contact}></Route>
       </div>
      
      </Router>
    );
  }
}

const activeStyle = {
  color: "white",
  textDecoration: "underline"
  
}

export default App;
