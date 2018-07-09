import React, { Component } from 'react';

import {Link} from 'react-router-dom';



export class GetProductData extends Component{

    constructor(props) {
        super(props);
        this.state = {
          
        };
      }
   
render(){

    /*let linkList = this.props.myProjects.map( (project) => {
    
        return(
            
        <li key={project.id}>
            <Link to={`${this.props.match.url}/${project.id}`}>
                {project.title}
            </Link>
        </li>
        )})*/

    let projectGrid = this.props.myProjects.map( (project) => {
       let number = project.id

            if(number == 1){
            return( <Link className="grid-1" to={`${this.props.match.url}/${project.id}`}>
                   <div className="project-grid-image" style={{ backgroundImage: 'url("'+`${project.images.image1.source}`+'")'}}>
                   </div></Link>
        )
            } else if(number == 5){
                return( <Link className="grid-5" to={`${this.props.match.url}/${project.id}`}>
                <div className="project-grid-image" style={{ backgroundImage: 'url("'+`${project.images.image1.source}`+'")'}}>
                </div></Link>
            )
            } else {
                return( <Link className="zero" to={`${this.props.match.url}/${project.id}`}>
                <div className="project-grid-image" style={{ backgroundImage: 'url("'+`${project.images.image1.source}`+'")'}}>
                </div></Link>
            )
            }
    } 
 )
    return(
    <div>
        {/*<ul>
            {linkList}
        </ul>*/}
        <div className="grid-container">
            {projectGrid} 
        </div>

    </div>
    )
}



}