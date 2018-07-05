import React, { Component } from 'react';
import ImageGallery from './image-gallery';

export class Project extends Component{
    constructor(props){
        super(props)

        }
        

    render(){
        return(
            <div>
                <ImageGallery />
                <h1>{this.props.title}</h1>  
                <p>{this.props.description}</p>
                
            </div>
        )
    }



}