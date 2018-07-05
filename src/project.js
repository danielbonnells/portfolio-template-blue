import React, { Component } from 'react';
import ImageGallery from './image-gallery';


export class Project extends Component {
   
    
    

    render(){
        console.log("hi");

        let project = this.props.data.find(p => p.id === this.props.match.params.id);
        console.log(project)
        let projectData;
      

        if(project) {
            projectData = <div>
            <ImageGallery images={project.images}/>
            <ProjectTitle title={project.title}/>
            <ProjectDescription desc={project.description} />
            </div>;
        }
          
        else{
            projectData = <h2>Sorry. Project doesn't exist.</h2>;
        }

          

        return(
            <div>
                {projectData}
            </div>
        )
    }



}

export class ProjectTitle extends Component{

render(){
    return(
       
            <div className="project-title">
                <h1>{this.props.title}</h1>  
            </div>
        
    )
}

}

function ProjectDescription(props) { 
    return (<p className="project-description">{props.desc}</p>)
}