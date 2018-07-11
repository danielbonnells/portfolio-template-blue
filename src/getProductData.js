import React, { Component } from 'react';

import {Link} from 'react-router-dom';



export class GetProductData extends Component{
   
render(){
    //map over project data for the grid on the home Projects page
    let projectGrid = this.props.myProjects.map( (project) => {

       let slug = project.slug
       let imageUrl = project.acf.image1.url
       let size = project.acf.featured_project[0]
       let matchUrl = this.props.match.url
       let index = project.index
       

       // something along the lines of, if project has such a property, then it returns that project with a certain class, perhaps to show emphasis
       // if (project.acf.featured_project[0] == 1) // it gets class "grid-1"

            if(size == 1){
            return( <Link className="grid-1" to={`${matchUrl}/${slug}`} key={index}>
                   <div className="project-grid-image" style={{ backgroundImage: `url('${imageUrl})`}}>
                   </div></Link>
        )
            } else if(size == 3){
                return( <Link className="grid-5" to={`${matchUrl}/${slug}`} key={index}>
                <div className="project-grid-image" style={{ backgroundImage: `url('${imageUrl})`}}>
                </div></Link>
            )
            } else {
                return( <Link className="zero" to={`${matchUrl}/${slug}`} key={index}>
                <div className="project-grid-image" style={{ backgroundImage: `url('${imageUrl})`}}>
                </div></Link>
            )
            }
    } 
 )
    return(
    <div>
        <div className="grid-container">
            {projectGrid} 
        </div>

    </div>
    )
}



}