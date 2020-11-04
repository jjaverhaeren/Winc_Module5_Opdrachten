import React, {Component} from "react"
import ListItem from "./ListItem"

class List extends Component {
    constructor() {
        super()
        this.state = {
            groceryItems: [
                { id:1, title: "Paprika"},
                { id:2, title: "Appels"},
                { id:3, title: "Brood"},
                { id:4, title: "Melk"},
                { id:5, title: "Muesli"},
            ], 
        }
    }


    

   
    render() {
        return (
            <ul>
                {this.state.groceryItems.map(item => <ListItem key={item.id} item={item} />)}
            </ul>
        )
    }
}

export default List