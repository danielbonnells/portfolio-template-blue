import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Definitions, Definition } from './definitions';

export class About extends Component {

    render(){
        return(
            <div className="about-container">
            <div className="project-title">
            <h1>About</h1>
            </div>
            <p>I've always been passionate about the web. Since I was a little kid, most of my free time was in front of a computer, learning the ins and outs. Many days were spent learning Photoshop and similar programs, kindling an appreciation for graphic design. After college, I began to work as a content writer, crafting copy for businesses around the nation. Today, I work as a full-time web content editor and developer. Because of my work, I've come to appreciate both the front-end and back-end of web development. I am always on a journey to learn and expand my skillset and am available for freelance projects. Take a look at my work below and <a href={"/contact"}>reach out</a> to me to discuss your project.</p>
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

export class HomePage extends Component {

    render(){
        return(
            <div className="home-container">
                <div className="hero">
                    <Definitions />
                <button>Sounds good? Let's Work Together</button>
                
                </div>
                <div><p>Hello</p></div>
            </div>
        )
    }
    
}

