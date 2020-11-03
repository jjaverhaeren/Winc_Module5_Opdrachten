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
    
    render() {
        return (
            <div>
                <input 
                type="text"
                value={this.state.firstName}
                name="firstName"
                placeholder="first name"
                onChange={this.handleChange}
                />
                <br />
                 <input 
                type="text"
                value={this.state.lastName}
                name="lastName"
                placeholder="last name"
                onChange={this.handleChange}
                />
                <br />
                <h3>{this.state.firstName} {this.state.lastName}</h3>
            </div>
        )
    }
}

export default App
