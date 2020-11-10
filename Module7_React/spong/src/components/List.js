import React from "react";
import ListItem from "./ListItem";


function List(props) {
  let playlistArray = props.playlist.map(item => (
    <ListItem key={item.id} item={item} deleteSong={props.deleteSong}/>
  ));
  return (
    <div className="list">
      {playlistArray}
    </div>
  );
}

export default List;
