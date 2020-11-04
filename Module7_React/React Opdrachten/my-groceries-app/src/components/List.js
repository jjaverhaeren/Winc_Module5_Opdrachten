import React, {Component} from "react"
import ListItem from "./ListItem"

class List extends Component {
    render() {
        return (
            <ul>
                <ListItem title="Paprika" />
                <ListItem title="Appels" />
                <ListItem title="Brood" />
                <ListItem title="Melk" />
                <ListItem title="Muesli" />
            </ul>
        )
    }
}

export default List