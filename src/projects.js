import React from 'react';
import  Project  from './project';
import { Route, Redirect, Switch } from "react-router-dom";
import { GetProductData } from './getProductData';


const Projects = (props) => {
       
        const data = props.data

        return(
            <div>
            <Switch>
                <Route exact strict path='/projects' 
                    render={() => (
                        <div>
                            <div>
                                <h3> Projects</h3>
                                <GetProductData match={props.match} myProjects={data}/>
                            </div>
                    </div>
                    )} />
        
                <Route path={`${props.match.url}/:id`} 
                    render={ (props) => <Project data={data} {...props} />}/>

                <Redirect from='/projects/' to='/projects' />

            </Switch> 
            </div>
        )
    }

export default Projects;