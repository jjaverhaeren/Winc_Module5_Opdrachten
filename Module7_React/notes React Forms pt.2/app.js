import React, {Component} from "react"

/**
 * Challenge: Wire up the partially-finished travel form so that it works!
 * Remember to use the concept of controlled forms
 * https://reactjs.org/docs/forms.html
 * 
 * All information should be populating the text below the form in real-time
 * as you're filling it out
 * 
 * This exercise is adapted from the V School curriculum on vanilla JS forms:
 * https://coursework.vschool.io/travel-form/
 * 
 * All of our challenges and learning resources are open for the public
 * to play around with and learn from at https://coursework.vschool.io
 */

class App extends Component {
    constructor() {
        super()
        this.state = {
            firstName: "",
            lastName: "",
            age: "",
            gender: "",
            destination: "",
            vegan: false,
            kosher: false,
            lactose_free: false,     
        }
    }
    
    handleChange = (event) => {
        const {name, value, checked, type} = event.target
        this.setState({
            [name]: value
            
        })
    }
    
    render() {
        return (
            <main>
                <form>
                    <input 
                    type="text"
                    name="firstName"
                    value={this.state.firstName}
                    onChange={this.handleChange}
                    placeholder="First Name" />
                    <br />
                    <input 
                    type="text"
                    name="lastName"
                    value={this.state.lastName}
                    onChange={this.handleChange}
                    placeholder="Last Name" />
                    <br />
                    <input 
                    type="text"
                    name="age"
                    value={this.state.age}
                    onChange={this.handleChange}
                    placeholder="Age" />
                    <br />
                    
                    <label>
                    Male: 
                     <input 
                    type="radio"
                    name="male"
                    checked={this.state.gender}
                    onChange={this.handleChange}
                    placeholder="male" />
                    </ label>
                    <br />
                    
                    <label>
                    Female: 
                     <input 
                    type="radio"
                    name="female"
                    checked={this.state.gender}
                    onChange={this.handleChange}
                    placeholder="female" />
                    </ label>
                    <br />
                    <br />
                    
                    {/* Create check boxes for dietary restrictions here */}
                    <br />
                    
                    <button>Submit</button>
                </form>
                <hr />
                <h2>Entered information:</h2>
                <p>Your name: {this.state.firstName} {this.state.lastName}</p>
                <p>Your age: {this.state.age}</p>
                <p>Your gender: {this.state.gender}</p>
                <p>Your destination: {this.state.destination}</p>
                <p>
                    Your dietary restrictions: 
                    {this.state.vegan}
                    {this.state.kosher}
                    {this.state.lactose_free}
                </p>
            </main>
        )
    }
}

export default App
