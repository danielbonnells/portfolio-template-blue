import React from 'react';
import  Project  from './project';
import { Route, Redirect, Switch } from "react-router-dom";
import { GetProductData } from './getProductData';


const Projects = (props) => {

    //waits for our data to get here
    if(props.data == ""){
        //console.log("Data is not ready. Waiting on state update.")
        return null
    } else{
        let width = window.innerWidth
        let theData = props.data

        return(
            <div>
            <Switch>
                <Route exact strict path='/projects' 
                    render={() => (
                        <div>
                            <div>
                                <h3> Projects</h3>
                                <GetProductData match={props.match} myProjects={props.data} w={width}/>
                            </div>
                    </div>
                    )} />
                {/* path must match the 'projects' root and will then include a slug, also passed the data object from before */}
                <Route path={`${props.match.url}/:slug`}
                     
                    render={ (props) => <Project data={theData} w={width} {...props} />}/>

                <Redirect from='/projects/' to='/projects' />

            </Switch> 
            </div>
        )
    }
    }

export default Projects;