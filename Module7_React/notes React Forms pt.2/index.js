import React, {Component} from "react"

class MemeGenerator extends Component {
    constructor() {
        super()
        this.state = {
            topText: "",
            bottomText: "",
            RandomImg: "",   
        }
        this.handleChange=this.handleChange.bind(this)
    }
    
    
    handleChange(event) {
        const {name, value} = event.target
        
    }
    
    render() {
        return(
            <input 
    type="text"
    name="topText"
    value={this.state.topText}
    onChange={this.handleChange}
    placeholder="top text"
    />
        )
    }
    
}

export default MemeGenerator