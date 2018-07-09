import React, { Component } from 'react';
import ImageGallery from './image-gallery';
import { Link } from 'react-router-dom'


const Project = ({ match , data}) => {

        let project = data.find(p => p.id == match.params.id);
        
        let projectData = <div><h1>Loading...</h1></div>;
        
    if(data.length > 1){
        if(project) {
            projectData = <div>
            <ImageGallery images={project.images}/>
            <ProjectTitle title={project.title}/>
            <ProjectDescription desc={project.description} />
            <ProjectControls id={project.id} numOfProjects={data.length} />
              
            </div>
            
        } else{
            projectData = 
            <div>
                <h2>Sorry. Project doesn't exist.</h2>
                <Link to='/projects'>See projects</Link>
            </div>
        }
    }
        return(
            <div>
                {projectData}
            </div>
            )
    }

export default Project;


export class ProjectTitle extends Component{

    render(){
        return(
                <div className="project-title">
                    <h1>{this.props.title}</h1>  
                </div>
            )
        }
}// end component

function ProjectDescription(props) { 
    return (<p className="project-description">{props.desc}</p>)
}//end component

const ProjectControls = (props) =>{

    if(props.id === 1){
        return (
            <div className="project-controls">
                <Link to={`/projects/${props.id + 1}`}>Next Project</Link>
            </div>
            ) 
    }else if(props.id === props.numOfProjects){
        return( 
            <div className="project-controls">
                <Link to={`/projects/${props.id - 1}`}>Previous Project</Link>
            </div>
           )
    }else if(props.id > 1){
        return(
            <div className="project-controls">
                <Link to={`/projects/${props.id - 1}`}>Previous Project</Link>
                <Link to={`/projects/${props.id + 1}`}>Next Project</Link>
            </div>
            )       
    } else {
        return (null)
    }

         
}// end component