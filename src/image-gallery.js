import React, { Component } from 'react';
import { TransitionGroup, CSSTransition } from 'react-transition-group';

export default class ImageGallery extends Component{

    render(){
        return(
            <div className="image-gallery scrolling-wrapper-flexbox">
                <Image alt="Kitty girl" src="https://loremflickr.com/350/350" />
                <Image alt="" src="https://loremflickr.com/350/350" />
                <Image alt="" src="https://loremflickr.com/350/350" />
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
        let imageClasses = "fullscreen"
        
        
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

