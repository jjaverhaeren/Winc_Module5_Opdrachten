//JSX is een javascript versie van HTML

// import React from "react";
// import ReactDOM from "react-dom";

// //ReactDOM.render('wat wil ik renderen', 'waar wil ik het renderen');

// ReactDOM.render(<h1>Hello World</h1>, document.getElementById('root'));


class App extends Component {
    constructor() {
        super()
        this.state = {
            isLoggedIn: false
        }
        this.handleClick = this.handleClick.bind(this)
    }
    
    handleClick() {
        console.log('Deze werkt');
    }

    render() {
       
    return (
        <div>
            <button onClick={handleClick}>LOG IN/OUT</button>
        </div>
    )
    }
}

export default App