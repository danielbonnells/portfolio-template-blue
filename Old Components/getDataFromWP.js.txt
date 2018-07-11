import React, { Component } from 'react';

export default class GetDataFromWP extends Component{
   constructor(props){
       super(props)

       this.state = {
           data: "Loading..."
        }
       
   }

   updateDataState = (response) =>{
        let res = response
        this.props.getData(res)
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
                /*let data = res.map( (project) => { 
                    

                                        //To check for the number of image props in the object
                                        let filtered_keys = (obj, filter) => {
                                            let key, keys = []
                                            for (key in obj)
                                            if (obj.hasOwnProperty(key) && filter.test(key))
                                                keys.push(key)
                                            return keys
                                        }
                                        let numOfProps = filtered_keys(project.acf, /(image)+/).length + 1

                    let images = ""

                    for(let i = 1; i < numOfProps; i++){

                        let source = project.acf[`image${i}`].url 
                        let alt = project.acf[`image${i}`].alt 
                        images = images + "<img src='" + source +"' alt='" + alt + "' /><br/>" 

                    }
                    console.log(project.acf.project_source)
                    return (
                        <div>
                            <h1>{project.acf.project_title}</h1>
                            <div>{project.acf.project_description}</div>
                            <div>{images}</div>
                            <p><a href={project.acf.project_source}>View project source</a></p>
                        </div>
                    )
                });
*/
                    //console.log(data)
                   /* object.setState({
                        data: res,
                        
                    })*/

                    updateDataState(res);
                
                    

                } else {
                    console.error(xhr.statusText)
                }
            }
        }

        xhr.onerror = () => {
            console.log('error')
        }

        xhr.send()
    
   }

render(){
  
    return(
        this.state.res
        /*<div className="responses">
            <div></div>
            <div>
               {this.state.data}
            </div>
        </div>*/
    )

}
        


}