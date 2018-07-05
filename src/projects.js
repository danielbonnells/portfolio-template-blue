import React, { Component } from 'react';
import { Project } from './project';
import { Route, Link } from "react-router-dom";


export class Projects extends Component {


   

    render(){


        const projectData = [
            {
              id: 1,
              title: 'Project 1',
              description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
              images: [{
                  "http://via.placeholder.com/600x350":"This is the alt text"
                }, {
                    "http://via.placeholder.com/600x350":"This is the alt text"
                }, {
                    "http://via.placeholder.com/600x350":"This is the alt text"
                }
              ]},
            {
                id: 2,
                title: 'Project 2',
                description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
                images: ["http://via.placeholder.com/600x350", "http://via.placeholder.com/600x350", "http://via.placeholder.com/600x350"]
              
              }]

             let linkList = projectData.map( (project) => {
                return(
                  <li key={project.id}>
                    <Link to={`${this.props.match.url}/${project.id}`}>
                      {project.title}
                    </Link>
                  </li>
                  )
            
                })


        return(
            <div>
                
                <div>
                    <h3>Projects</h3>
                    <ul> {linkList} </ul>
                </div>

                 <Route 
                    path={`${this.props.match.url}/:id`} 
                    render={ (props) => <Project data={projectData} {...props} /> }/>

                 <Route exact path={this.props.match.params.url}
                    render={() => (
                        <div>Select a project.</div>
                    )}
                 />

                {/*<Project 
                key="1"
                title="Project 1" 
                description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
                images={["image1.jpg", "image2.jog"]}
                />

                <Route path="/projects/:title" exact component={Projects}></Route>*/}
            </div>
        )
    }
    
}

export default Projects;