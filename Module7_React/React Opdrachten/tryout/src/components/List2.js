import React from "react";
import ListItem from "./ListItem";

function List2(props) {
  //   console.log(props.items[0].title);
  const itemsArray = props.items2.map(item => (
    <ListItem key={item.id} item={item} />
  ));

  return (
    <div>
      <h3>List2</h3>
      {itemsArray}
    </div>
  );
}

export default List2;
