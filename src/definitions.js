import React, { Component } from 'react';


export class Definitions extends Component{

    render(){

        return(
            <ul className="definitions">
                <li><Definition name="Progressive Enhancement"
                def="The definition would be right here... The definition would be right here... The definition would be right here... The definition would be right here..."/></li>
                <li><Definition name="Mobile First"
                def=""/></li>
                <li><Definition name="Responsive"
                def=""/></li>
                <li><Definition name="Accessible"
                def=""/></li>
                <li><Definition name="Beautiful"
                def=""/></li>
            </ul>
        )
    }

}

export class Definition extends Component{
    constructor(props){
        super(props)

        this.state = {
            ariaExpanded: false
        }
    }

    handleClick = () => {
        this.setState({
            ariaExpanded: !this.state.ariaExpanded
        })
        
    }


    render(){

     

        return(
            <button aria-expanded={this.state.ariaExpanded} onClick={this.handleClick}><span>{this.props.name}</span>
                { this.state.ariaExpanded && <div><p>{this.props.def}</p></div> }
            </button>
        )
    }

}