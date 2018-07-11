import React, { Component } from 'react';
import GetDataFromWP from './getDataFromWP';


export class About extends Component {

    render(){
        return(
            <div>
            <h1>About</h1>
            <GetDataFromWP />
            </div>
        )
    }
    
}

export class Contact extends Component {

    render(){
        return(
            <h1>Contact</h1>
        )
    }
    
}
