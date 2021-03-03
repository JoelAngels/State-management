import React, { useState, createContext } from "react";

export const MovieContext = createContext();

export const MovieProvider = (props) => {
  const [movies, setMovies] = useState([
    {
      name: "Avengers Infinity War",
      price: "7.5",
      id: 1234,
    },
    {
      name: "Avengers End Game",
      price: "7.5",
      id: 4567,
    },
    {
      name: "Black Panther",
      price: "7.5",
      id: 891011,
    },
  ]);
  return (
    <MovieContext.Provider value={[movies, setMovies]}>
      {props.children}
    </MovieContext.Provider>
  );
};
//whenever I wanna use the data in the state, we need to import moviecontext
//the movie provider is basically going to provide the movie information to the different components through props.children
