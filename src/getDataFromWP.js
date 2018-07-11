import React, { Component } from 'react';

export default class GetDataFromWP extends Component{
   constructor(props){
       super(props)

       this.state = {
           data: "Loading...", 
           parent: null
        }
       
   }

   componentDidMount(){
        let object = this
        let xhr = new XMLHttpRequest();
      

        xhr.open('GET', 'http://localhost:8888/wp-json/wp/v2/projects?categories=2', true)

        
        xhr.onload = function(e){
        if (xhr.readyState === 4){
            if (xhr.status === 200){
               let res = JSON.parse(this.responseText)
               console.log(res)
               let data = res.map( (project) => { 
                   //console.log(project.acf.project_title)
                   let images = ""
                   for(var i = 1; i < 5; i++){
                    let source = project.acf['image' + i].url 
                    let alt = project.acf['image' + i].alt 
                    images = images + "<img src='" + source +"' alt='" + alt + "' /><br/>" 
                   }
                   //console.log(images)
                  return (
                    <div>
                        <h1>{project.acf.project_title}</h1>
                        <div>{project.acf.project_description}</div>
                        <div>{images}</div>
                        <p>{project.acf.project_source}</p>
                    </div>
                 )
               });

                console.log(data)
                object.setState({
                    data: data,
                    
                })
              
                

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
  
    return(
        <div className="responses">
            <div></div>
            <div>
               {this.state.data}
            </div>
        </div>
    )

}
        


}