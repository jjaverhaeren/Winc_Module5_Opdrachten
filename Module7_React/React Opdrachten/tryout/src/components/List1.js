import React from "react";
import ListItem from "./ListItem";

function List1(props) {
//   console.log(props.items[0].title);
  const itemsArray = (props.items).map(item => <ListItem key={item.id} item={item} />)

  return (
    <div>
        <h3>List1</h3>
        {itemsArray}
    </div>
)
}

export default List1;

// function App() {
//   const jokeComponents = jokesData.map(joke => <Joke key={joke.id} question={joke.question} punchLine={joke.punchLine} />)



