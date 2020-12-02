import React, { useState, createContext } from "react";

export const MovieContext = createContext();

export const MovieProvider = props => {
  const [movies, setMovies] = useState([
    {
      name: "Harry Potter",
      price: 10,
      id: 1234,
    },
    { name: "When Harry met Sally", price: 10, id: 1234234 },
    { name: "Dirty Harry", price: 12, id: 874 },
  ]);

  return (
    <MovieContext.Provider value={[movies, setMovies]}>
      {props.children}
    </MovieContext.Provider>
  );
};

// export const MoveiContext = createContext()

// export const MovieProvider = (props) => {
//     const [movies, setMovies] = useState([

//
//       ]);
//     return(
//         <MovieContext.Provider>
//             {props.children}
//         </MovieContext.Provider>
//     )
// };
