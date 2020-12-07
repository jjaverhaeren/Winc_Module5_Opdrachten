import React, { useState } from "react";

function App() {
  //   const [state, setState] = useState({ count: 4, theme: "red" });
  //   const count = state.count;
  //   const theme = state.theme;

  //   function decrement() {
  //     setState(prevState => {
  //       return { ...prevState, count: prevState.count - 1 };
  //     });
  //   }

  //   function increment() {
  //       setState(prevState => {
  //           return {...prevState, count: prevState.count + 1}
  //       })
  //   }

  const [count, setCount] = useState(0);
  const [theme, setTheme] = useState("red");

  function decrement() {setCount(prevCount => prevCount - 1)}
  function increment() {setCount(prevCount => prevCount + 1)
setTheme('blue')}



  return (
    <div>
      <button onClick={decrement}>-</button>
      <h1>{count}</h1>
      <button onClick={increment}>+</button>
    </div>
  );
}
