import React, { Component } from 'react';


export default class ImageGallery extends Component{

    render(){

            const imageObject = this.props.images
        
            let imageComponents = []
            console.log(this.props)
            for (var i = 0; i < imageObject.length; i++) {
    
                imageComponents.push(
                   <Image key={i} src={imageObject[i]} w={this.props.w} alt={imageObject[i].altText} />
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
        let w = this.props.w
        let imageUrl = this.props.src
        
           //provides image for gallery based on window size
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
        
        return(
           <div className="image-single-container"> 
            
                <button className="image-single" onClick={this.imageModalHandler}>

                    <img alt={this.props.alt} src={imageUrl} />

                </button>

                {this.state.imageModal  && (
                    <div className="fullscreen">
                        <div className="photo-div">
                            <button onClick={this.imageModalHandler} className="close-btn fadeItIn" title="Close">Close</button>
                            <FocusImage source={this.props.src.url} altText={this.props.alt} />
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

