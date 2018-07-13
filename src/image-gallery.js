import React, { Component } from 'react';


export default class ImageGallery extends Component{

    constructor(props){
        super(props)

    }

   
    render(){

            const imageObject = this.props.images
            console.log(this.props.images)
            let imageComponents = []

            console.log(this.props)
            if(imageObject != undefined){
            for (var i = 0; i < imageObject.length; i++) {
    
                imageComponents.push(
                   <Image key={i} src={imageObject[i]} w={this.props.w} alt={imageObject[i].altText} handleState={this.props.handleState}/>
                )
            }
        }
        return(

            <div className="image-gallery">
               {imageComponents}

            </div>
        )
    }
}

export class Image extends Component{

   
    render(){
        let w = this.props.w
        let imageOriginal = {
            "source": this.props.src.large,
            "alt": this.props.alt
        }

        let imageProcessed = {
            "source": this.props.src,
            "alt": this.props.alt
        }
           //provides image for gallery based on window size
       if(w < 480){
        console.log(w)
            imageProcessed.source = imageProcessed.source.thumbnail
        }else if(400 < w && w < 800){
            console.log(w)
            imageProcessed.source = imageProcessed.source.medium
        }else if(800 < w){
            console.log(w)
            imageProcessed.source = imageProcessed.source.large
        }
        
        return(
           <div className="image-single-container"> 
            
                <button className="image-single" onClick={() => this.props.handleState(imageOriginal)}>

                    <img alt={imageProcessed.alt} src={imageProcessed.source} />

                </button>
     
           </div>
        )
    }
}

export class FocusImage extends Component{
   
    render(){

        return (
            <div className="photo-container">
                <img alt={this.props.altText} src={this.props.source} className="photo fadeItIn"/>
            </div>
        )
    }
}

