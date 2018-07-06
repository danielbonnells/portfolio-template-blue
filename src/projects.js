import React, { Component } from 'react';
import  Project  from './project';
import { Route, Link } from "react-router-dom";


const Projects = ({ match }) => {

        const projectData = [
            {
              id: 1,
              title: 'Project 1',
              description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
              images:{image1: {
                source:"http://via.placeholder.com/600x350" ,
                altText: "This is the alt text"
              },image2: {
                source:"http://via.placeholder.com/600x350" ,
                altText: "This is the alt text"
              },image3: {
                source:"http://via.placeholder.com/600x350" ,
                altText: "This is the alt text"
              }    }
        },
        {
            id: 2,
            title: 'Project 2',
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
            images:{image1: {
                source:"http://via.placeholder.com/600x350" ,
                altText: "This is the alt text"
              },image2: {
                source:"http://via.placeholder.com/600x350" ,
                altText: "This is the alt text"
              },image3: {
                source:"http://via.placeholder.com/600x350" ,
                altText: "This is the alt text"
              }  }
      }
    ]

//console.log(projectData[0].image1.source)

             let linkList = projectData.map( (project) => {
                return(
                  <li key={project.id}>
                    <Link to={`${match.url}/${project.id}`}>
                        {project.title}
                    </Link>
                  </li>
                  )
            
                })
console.log(match)

        return(
            <div>
            <div>
             <div>
               <h3> Projects</h3>
               <ul> {linkList} </ul>
             </div>
            </div>
    
            <Route path={`${match.url}/:id`} 
                render={ (props) => <Project data= {projectData} {...props} />}/>
            <Route exact path={match.url}
                render={() => (
                <div>Please select a product.</div>
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
    


export default Projects;