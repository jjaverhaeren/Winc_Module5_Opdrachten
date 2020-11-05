import React from "react";
import List from "./List";

function GroceryList(props) {
  return (
    <div className="groceryList">
      <h3>Grocery List</h3>
      <List items={props.items} handleClick={props.handleClick}/>
    </div>
  );
}

export default GroceryList;
