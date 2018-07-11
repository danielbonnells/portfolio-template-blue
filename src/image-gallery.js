import React, { Component } from 'react';


export default class ImageGallery extends Component{

    render(){

            const imageObject = this.props.images

            let imageComponents = []
            
            for (var i = 0; i < imageObject.length; i++) {
    
                imageComponents.push(
                   <Image key={i} src={imageObject[i].large} alt={imageObject[i].altText} />
                )
            }

        return(

            <div className="image-gallery">
               {imageComponents}
            </div>
        )
    }
}

export class Image extends Component{

        constructor(props){
            super(props)

            this.state = {
                imageModal : false,
            }

            this.imageModalHandler = this.imageModalHandler.bind(this)
        }

        imageModalHandler = () =>{
     
            this.setState({
                imageModal : this.state.imageModal ? false : true
            })
         }

       

    render(){
        
        
        return(
           <div className="image-single-container"> 
            
                <button className="image-single" onClick={this.imageModalHandler}>

                    <img alt={this.props.alt} src={this.props.src} />

                </button>

                {this.state.imageModal  && (
                    <div className="fullscreen">
                        <div className="photo-div">
                            <button onClick={this.imageModalHandler} className="close-btn fadeItIn" title="Close">Close</button>
                            <FocusImage source={this.props.src} altText={this.props.alt} />
                        </div>
                    </div>
                    )}
     
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

