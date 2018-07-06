import React, { Component } from 'react';


export default class ImageGallery extends Component{

    render(){
/*
        images: [{
            "http://via.placeholder.com/600x350":"This is the alt text"
          }, {
              "http://via.placeholder.com/600x350":"This is the alt text"
          }, {
              "http://via.placeholder.com/600x350":"This is the alt text"
          }
        ]} */

            const imageObject = this.props.images
           
            let imageComponents = []
            
            for (var i = 1; i < Object.keys(imageObject).length + 1; i++) {
    
                imageComponents.push(
                   <Image src={imageObject['image' + i].source} alt={imageObject['image' + i].altText} />
                )
            }

        

        return(

            <div className="image-gallery scrolling-wrapper-flexbox">
               {imageComponents}
            </div>
            /*<div className="image-gallery scrolling-wrapper-flexbox">

                <Image alt="placeholder" src={this.props.match.params.image} />
                <Image alt="" src="http://via.placeholder.com/350x350" />
                <Image alt="" src="http://via.placeholder.com/350x350" />
            </div>*/
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
           <div>
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
            <div>
                <img alt={this.props.altText} src={this.props.source} className="photo fadeItIn"/>
            </div>
        )
    }
}

