import React, { Component } from 'react';
import { BrowserRouter as Router, Route, NavLink, Switch } from "react-router-dom";
import { About, Contact } from './pages';
import  Projects  from './projects';
import './App.css';
import firebase from 'firebase/app';
//import database from 'firebase/database';

class App extends Component {
  constructor(props){
    super(props)

    this.state = {
      isNavOpen: false,
      projects: []
    }
}

showNav = () => {
  this.setState({
    isNavOpen : !this.state.isNavOpen
  })
  
}

componentDidMount(){
  const myProjects = firebase.database().ref('projects') 

  let handleState = (state) => {
      this.setState({
          projects: state
      })
    }

  var arrayOfProjects = []

  myProjects.on('value', function(snapshot) {
      snapshot.forEach(function(childSnapshot) {
        var childData = childSnapshot.val();
        arrayOfProjects.push(childData)
        handleState(arrayOfProjects)
        
      });
  });
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
                      <li><NavLink to="/projects" exact activeStyle={activeStyle} onClick={this.showNav}>Projects</NavLink></li>
                      <li><NavLink to="/about" activeStyle={activeStyle} onClick={this.showNav}>About</NavLink></li>
                      <li><NavLink to="/contact" activeStyle={activeStyle} onClick={this.showNav}>Contact</NavLink></li>
                  </ul>
                </div>
              )}
            
          </div>
       <Switch>
          <Route path="/" exact render={() => <h1>Home Page</h1>}></Route>
          <Route path="/projects" 
                 render={(props) => <Projects {...props}  data={this.state.projects} />} 
            />
          <Route path="/about" exact component={About}></Route>
          <Route path="/contact" exact component={Contact}></Route>
        </Switch>
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
