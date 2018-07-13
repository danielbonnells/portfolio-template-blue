import React, { Component } from 'react';
import ImageGallery, { FocusImage } from './image-gallery';


export default class Modal extends Component{

constructor(props){
    super(props)


    this.state = {
        imageModal : false,
    }

    this.imageModalHandler = this.imageModalHandler.bind(this)
}

imageModalHandler = (args) =>{
    console.log("here are args:")
    console.log(args)
    this.setState({
        imageModal : this.state.imageModal ? false : true,
        currentImage: args,
        previousImage: ""
    })
 }


render(){
    console.log("here are props:")
 console.log(this.props)
    return(<div>
                {this.state.imageModal &&
                <div className="fullscreen">
                    <div className="photo-div">
                        <button onClick={this.imageModalHandler} className="close-btn fadeItIn" title="Close">Close</button>
                        <FocusImage source={this.state.currentImage.source} altText={this.state.currentImage.alt} />
                    </div>
                </div>}

           <ImageGallery images={this.props.images} w={this.props.w} handleState={this.imageModalHandler}/>

                </div>
    )
}

}