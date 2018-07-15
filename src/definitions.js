import React, { Component } from 'react';


export class Definitions extends Component{
    constructor(props){
        super(props)

            this.state = {
            current: null
                
        }

    }


    
   

    handleCurrent = (index) =>{ 
       
        this.setState({
            current: index
        })
      
    }

    render(){

        

    
        return(
            <ul className="definitions">
                <li><Definition name="Progressive Enhancement" index={0} current={this.state.current} handleCurrent={this.handleCurrent}
                def="The definition would be right here... The definition would be right here... The definition would be right here... The definition would be right here..."/></li>
                <li><Definition name="MobileFirst" index={1} current={this.state.current} handleCurrent={this.handleCurrent} 
                def=""/></li>
                <li><Definition name="Responsive" index={2} current={this.state.current}  handleCurrent={this.handleCurrent} 
                def=""/></li>
                <li><Definition name="Accessible" index={3} current={this.state.current}  handleCurrent={this.handleCurrent} 
                def=""/></li>
                <li><Definition name="Beautiful" index={4}  current={this.state.current}  handleCurrent={this.handleCurrent} 
                def=""/></li>
            </ul>
        )
    }

}

export class Definition extends Component{
    constructor(props){
        super(props)

        this.state = {
            isOpen: false,
            aria: false
        }
    }

    handleClick = () => {
        let index = this.props.index
        this.props.handleCurrent(index)
    }

    componentWillReceiveProps(props){
        if(this.state.isOpen){
            this.setState({
                isOpen: false,
                aria: false
            })
        } else {
            if(props.index == props.current){
                this.setState({
                    isOpen: true,
                    aria: true
                })
            } else {
                    this.setState({
                        isOpen: false,
                        aria: false
                    })
                }
        }
    
        }
    


    render(){

        return(
            <button aria-expanded={this.state.aria} onClick={this.handleClick}>
            <div className="definition-title">{this.props.name}</div>
                {this.state.isOpen && <div><p>{this.props.def}</p></div> }
            </button>
        )
    }

}