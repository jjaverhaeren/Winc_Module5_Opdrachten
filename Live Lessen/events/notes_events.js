// when events fire, they pass a predetermined parameter into the function (e.g. handleChange function) which passes information
//about the event it fired. handleChange(event) {  }.

//event.target : target represents the element in which the event was fired.

            <form>
                <input type="text" placeholder="First Name" onChange={this.handleChange} />
            </form>

//e.g. event.targer.value is de value of the input box

import React, {Component} from "react"

class App extends Component {
    constructor() {
        super()
        this.state = {
            firstName: "",
            lastName: ""
        }
        this.handleChange = this.handleChange.bind(this)
    }
    
    handleChange(event) {
        const {name, value} = event.target
        this.setState({
            [name]: value
        })
    }

    //hierboven is een beter alternatief voor:
    //handleChange(event) {
    //  this.setState({
    //      [event.target.name]: event.target.value
    //     })
    //  }
    
    render() {
        return (
            <form>
                <input 
                    type="text" 
                    value={this.state.firstName} 
                    name="firstName" 
                    placeholder="First Name" 
                    onChange={this.handleChange} 
                />
                <br />
                <input 
                    type="text" 
                    value={this.state.lastName} 
                    name="lastName" 
                    placeholder="Last Name" 
                    onChange={this.handleChange} 
                />
                <h1>{this.state.firstName} {this.state.lastName}</h1>
            </form>
        )
    }
}

export default App

