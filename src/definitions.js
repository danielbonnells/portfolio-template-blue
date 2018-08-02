import React, { Component } from 'react';


export class Definitions extends Component{
    constructor(props){
        super(props)
            //keeps track of which child is the current child activated through use of the index prop
            this.state = {
            current: null
                
        }

    }
    //child sends its index value up to parent, parent sets state, all children receive new state through the 'current' prop
    handleCurrent = (index) =>{ 
       
        this.setState({
            current: index
        })
      
    }

    render(){

        return(
            <ul className="definitions">
                <li><Definition name="Progressive" index={0} current={this.state.current} handleCurrent={this.handleCurrent} source="https://en.wikipedia.org/wiki/Progressive_enhancement"
                def="Progressive Enhancement is a strategy for web design that emphasizes core webpage content first, allowing everyone to access the basic content and functionality of a web page, using any browser or Internet connection, while also providing an enhanced version of the page to those with more advanced browser software or greater bandwidth."/></li>
                <li><Definition name="Mobile First" index={1} current={this.state.current} handleCurrent={this.handleCurrent} source="https://www.statista.com/statistics/277125/share-of-website-traffic-coming-from-mobile-devices/"
                def="It is the ideology that mobile design should be done first. Once the mobile design questions are answered, designing for other devices will be easier. As of the second quarter of 2018, 51.89 percent of global web traffic originated from mobile devices."/></li>
                <li><Definition name="Responsive" index={2} current={this.state.current}  handleCurrent={this.handleCurrent} source="https://www.smashingmagazine.com/2011/01/guidelines-for-responsive-web-design/"
                def="Responsive Web design is the approach that suggests that design and development should respond to the user’s behavior and environment based on screen size, platform and orientation."/></li>
                <li><Definition name="Accessible" index={3} current={this.state.current}  handleCurrent={this.handleCurrent} source="https://www.w3.org/WAI/fundamentals/accessibility-intro/"
                def="Web accessibility means that websites, tools, and technologies are designed and developed so that people with disabilities can use them."/></li>
                <li><Definition name="Beautiful" index={4}  current={this.state.current}  handleCurrent={this.handleCurrent} source="https://www.google.com/search?num=100&hl=en&q=define+beauty&oq=define+beauty"
                def="A combination of qualities, such as shape, color, or form, that pleases the aesthetic senses, especially the sight."/></li>
            </ul>
        )
    }

}

export class Definition extends Component{
    constructor(props){
        super(props)
        //boolean for checking if the current value is equal to its index value
        this.state = {
            isOpen: false,
        
        }
    }
    //sends its index to parent
    handleClick = () => {
        
        let index = this.props.index
        this.props.handleCurrent(index)
    }
    //lifecycle hook for getting new props
    componentWillReceiveProps(props){
        //if the state of isOpen is already true, set it to false
        if(this.state.isOpen){
            this.setState({
                isOpen: false,
           
            })
            //if the state is false and the current prop matches its index, true, else set to false
            //other children who are not the current child get closed here
        } else {
            if(props.index == props.current){
                this.setState({
                    isOpen: true,
              
                })
            } else {
                    this.setState({
                        isOpen: false,
                        
                    })
                }
        }
    
    }
    
    render(){

        return(
            <div><button aria-expanded={this.state.isOpen} aria-controls={`#term${this.props.index}`} onClick={this.handleClick}>
            <div id={`#term${this.props.index}`}><h2 className="definition-title" >{this.props.name}</h2></div></button>
                {this.state.isOpen && <div className={"definition-expanded"}><p>{this.props.def} <sup><a href={this.props.source} target="_blank" title="Source" aria-label="Source">*</a></sup></p></div> }
            </div>
        )
    }

}