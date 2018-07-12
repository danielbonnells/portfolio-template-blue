import React, { Component } from 'react';
import { BrowserRouter as Router, Route, NavLink, Switch } from "react-router-dom";
import { About, Contact } from './pages';
import  Projects  from './projects';
import  Modal  from './modal'
import './App.css';

class App extends Component {
  constructor(props){
    super(props)

    //states for the navigation bar and for the project data
    this.state = {
      isNavOpen: false,
      data : ""
    }
  
}
//displays or hides the navigation bar
showNav = () => {
  this.setState({
    isNavOpen : !this.state.isNavOpen
  })
  
}
//updates the state with the data once fetched at componentDidMount via XMLHttpRequest
handleState = (Data) =>{
  this.setState({
    data: Data
  })
}


componentDidMount(){
  //store the 'this' of the component
  let object = this
  //new request
  let xhr = new XMLHttpRequest();
  //request is made to fetch only projects that are in category "featured projects", which has id of 2 in wordpress
  xhr.open('GET', 'http://api.danielbonnells.com/wp-json/wp/v2/projects?categories=2', true)
  
  xhr.onload = function(e){
      if (xhr.readyState === 4){
          if (xhr.status === 200){
          //parse the response text
          let res = JSON.parse(this.responseText)
          //set an index to the data
          let index = 0
          //adds indexes to each project
          let indexedData = res.map( (project) => { 
              
            project.index = index;

            index++;

            return project

          });
              //send data to the handler function, which sets state
              object.handleState(indexedData)

          } else {
              console.error(xhr.statusText)
          }
      }
  }

  xhr.onerror = () => {
      console.log('error')
  }

  xhr.send()

}



  render() {

    return (
      //required for routes
      <Router>
      
        <div>
       
          <div id="navigation">
            <div  id="nav-button-container">
            <button  id="nav-button" onClick={this.showNav} ><i className="fas fa-bars"></i></button>
            </div>

              {this.state.isNavOpen  && (
                <div className="nav-links-container">
                  <ul className="nav-links">
                      <li><NavLink to="/" exact activeStyle={activeStyle} onClick={this.showNav}>Home</NavLink></li>
                      <li><NavLink to="/projects" activeStyle={activeStyle} onClick={this.showNav}>Projects</NavLink></li>
                      <li><NavLink to="/about" activeStyle={activeStyle} onClick={this.showNav}>About</NavLink></li>
                      <li><NavLink to="/contact" activeStyle={activeStyle} onClick={this.showNav}>Contact</NavLink></li>
                  </ul>
                </div>
              )}
            
            <Modal />

          </div>
       <Switch>
          <Route path="/" exact render={() => <h1>Home Page</h1>}></Route>
            {/* the match prop and the data from state are passed to the projects component */}
          <Route path="/projects" 
                 render={(props) => <Projects {...props}  data={this.state.data} />} 
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
