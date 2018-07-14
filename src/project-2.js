import React, { Component } from 'react';
import ImageGallery from './image-gallery';
import { Link } from 'react-router-dom'


const Project = ({ match , data, w }) => {

    //takes all of the data fetched from props passed from projects
    let allProjectsData = data.map( (project) => {
        // finds all keys that match the regular expression filter and returns an array
        if(project){
            let filtered_keys = (obj, filter) => {
            let key, keys = []
            for (key in obj)
            if (obj.hasOwnProperty(key) && filter.test(key))
                keys.push(key)
            return keys
        }

        let images = []
        //call the filter for the image properties of the project object
        let numOfProps = filtered_keys(project.acf, /(image)+/).length

        //start at 1 because the images are named 'image1','image2', etc and end when there are no more images
        for(let i = 1; i < numOfProps + 1; i++){
            //set variables for the image properties that we might want to use, like sizes and alt text
            let thumbnail = project.acf[`image${i}`].sizes.thumbnail
            let medium = project.acf[`image${i}`].sizes.medium
            let large = project.acf[`image${i}`].sizes.large
            let alt = project.acf[`image${i}`].alt 
            let url = project.acf[`image${i}`].url
            //creates an object at spot i - 1 in the array and sets all variables to those properties
            images[i - 1] = {}

            images[i - 1].thumbnail = thumbnail

            images[i - 1].medium = medium

            images[i - 1].large = large

            images[i - 1].altText = alt
            
            images[i - 1].url = url
        }
                // returns the entire object to the object array allProjectsData
                return(
                    {   "title": project.title.rendered,
                        "index": project.index,
                        "slug": project.slug,
                        "images": images,
                        "description": project.content.rendered,
                        "project_source": project.acf.project_source
                    }
                )
            }
            return allProjectsData
        }
    )


        // match this project's slug to the slug used in the router, found in the match object that we passed
        let project = allProjectsData.find(p => p.slug == match.params.slug);

        //provides an initial state for projectData while data loads
        let projectData = <div><h1>Loading...</h1></div>;

    // makes sure that there is something here to load, otherwise projectData tells users there's nothing here     
    if(data.length != 0){
        if(project) {
            projectData = <div className="project-container">
            <ImageGallery images={project.images} w={w}/>
            <div className="project-text-container">
            <ProjectTitle title={project.title}/>
            <ProjectDescription desc={project.description} link={project.project_source} />
            <ProjectControls index={project.index} numOfProjects={allProjectsData.length} slug={project.slug} projects={allProjectsData}/>
            </div>
            </div>
            
        } else {
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
    //takes the string in html that's coming from the JSON and makes an object out of it
    const renderHTML = (rawHTML) => React.createElement("div", { dangerouslySetInnerHTML: { __html: rawHTML } });

    return (<div className="project-description">{renderHTML(props.desc)}<br/>
            { props.link &&
            <a href={props.link} aria-label="Opens in a new tab" target="_blank" className="project-link">View the project online</a>
            }
            </div>)
}//end component

const ProjectControls = (props) =>{
    //sets variables to compact
    let slug = props.slug
    let index = props.index
    let projects = props.projects
    if(index === 0){
        return (
            <div className="project-controls">
                <Link to={`/projects/${projects[index + 1].slug}`}>Next Project</Link>
            </div>
            ) 
    }else if(index === props.numOfProjects - 1){
        return( 
            <div className="project-controls">
                <Link to={`/projects/${projects[index - 1].slug}`}>Previous Project</Link>
            </div>
           )
    }else if(index > 0){
        return(
            <div className="project-controls">
                <Link to={`/projects/${projects[index - 1].slug}`}>Previous Project</Link>
                <Link to={`/projects/${projects[index + 1].slug}`}>Next Project</Link>
            </div>
            )       
    } else {
        return (null)
    }

         
}// end component