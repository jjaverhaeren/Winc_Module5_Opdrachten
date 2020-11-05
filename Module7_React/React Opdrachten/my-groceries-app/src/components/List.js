import React from "react";
import ListItem from "./ListItem";

function List(props) {
  const itemsArray = props.items.map(item => (
    <ListItem key={item.id} item={item} handleClick={props.handleClick}/>
  ));
  return <div className="list">{itemsArray}</div>;
}

export default List;
