import React, { Component } from 'react';

export default class TestXHRConnection extends Component{
   constructor(props){
       super(props)

       this.state = {data: "Loading...", parent: null}
       
   }

   componentDidMount(){
        let object = this
        let xhr = new XMLHttpRequest();
      

        xhr.open('GET', 'http://localhost:8888/wp-json/wp/v2/projects', true)

        
        xhr.onload = function(e){
        if (xhr.readyState === 4){
            if (xhr.status === 200){
                //console.log(JSON.parse(this.responseText))
                object.setState({
                    data: JSON.parse(this.responseText)[0].title.rendered,
                    parent: JSON.parse(this.responseText)[0].id
                })
                if(object.state.parent){
                    object.getAttachments(object.state.parent)
                }
                

            } else {
            console.error(xhr.statusText)
            }
        }
        }
        xhr.onerror = () =>{
            console.log('error')
        }
        xhr.send()
    
   }

render(){
 
   

    this.getAttachments = (parentId) =>{
        let parent = this.state.parent
        let mediaURL = `http://localhost:8888/wp-json/wp/v2/media?parent=${parent}`

        console.log(mediaURL)
        let xhrMedia = new XMLHttpRequest();

        xhrMedia.open('GET', mediaURL, true)

        xhrMedia.onload = (e) => {
        console.log(e)
         let data = JSON.parse(e.currentTarget.responseText)

          console.log(data)
           this.setState({
                image1: data[0].source_url,
                image2: data[1].source_url
            })
        }

        xhrMedia.send();
    }
       

    
    return(
        <div className="responses">
        <button>Get Data</button>
            <div>{this.state.data}</div>
            <div>
                <img src={this.state.image1} width="100px"/>
                <img src={this.state.image2} width="100px"/>
                </div>
        </div>
    )

}
        


}