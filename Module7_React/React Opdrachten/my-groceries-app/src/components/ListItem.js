import React from "react"

function ListItem(props) {
    return (
        <li 
        key={props.item.id}
        className="list-item"
        // onClick={clickItem}
        value={props.item.title}
        >{props.item.title}</li>
    )
}

export default ListItem