import React, { Component } from 'react';
import { Project } from './project';

export class Projects extends Component {

    render(){
        return(
            <div>
                <Project 
                title="Health & Hope Institute" 
                description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
                images={["image1.jpg", "image2.jog"]}
                />

                {/*<img src="https://loremflickr.com/350/350" />*/}
            </div>
        )
    }
    
}

export class About extends Component {

    render(){
        return(
            <h1>About</h1>
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
