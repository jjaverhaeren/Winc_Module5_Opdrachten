import React from "react";

function ListItem(props) {
    // console.log(props);
  return (
    <div>
      <li>{props.item.title}</li>
    </div>
  );
}

export default ListItem;
