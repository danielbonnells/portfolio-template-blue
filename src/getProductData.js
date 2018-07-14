import React, { Component } from 'react';

import {Link} from 'react-router-dom';



export class GetProductData extends Component{
   
render(){
    //map over project data for the grid on the home Projects page
    let projectGrid = this.props.myProjects.map( (project) => {
    let w = this.props.w
    let imageUrl = project.acf.image1.sizes
    let size = project.acf.featured_project[0]
    let matchUrl = this.props.match.url
    let index = project.index
    
        //provides image for grid based on window size
       if(w < 480){
        console.log(w)
            imageUrl = imageUrl.thumbnail
        }else if(400 < w && w < 800){
            console.log(w)
            imageUrl = imageUrl.medium
        }else if(800 < w){
            console.log(w)
            imageUrl = imageUrl.large
        }
       let slug = project.slug
      

       // something along the lines of, if project has such a property, then it returns that project with a certain class, perhaps to show emphasis
       // if (project.acf.featured_project[0] == 1) // it gets class "grid-1"

            if(size == 1){
            return( <Link className="grid-1" to={`${matchUrl}/${slug}`} key={index}>
                   <div className="project-grid-image" style={{ backgroundImage: `url('${imageUrl}')`}}>
                   </div></Link>
        )
            } else if(size == 2){
                return( <Link className="grid-2" to={`${matchUrl}/${slug}`} key={index}>
                <div className="project-grid-image" style={{ backgroundImage: `url('${imageUrl}')`}}>
                </div></Link>
            )

            } else if(size == 3){
                return( <Link className="grid-5" to={`${matchUrl}/${slug}`} key={index}>
                <div className="project-grid-image" style={{ backgroundImage: `url('${imageUrl}')`}}>
                </div></Link>
            )

            } else {
                return( <Link className="zero" to={`${matchUrl}/${slug}`} key={index}>
                <div className="project-grid-image" style={{ backgroundImage: `url('${imageUrl}')`}}>
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