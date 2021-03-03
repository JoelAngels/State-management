import React, { useState } from "react";
import Movie from "./Movie";

const MovieList = () => {
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
    <div>
      {movies.map((movie) => (
        <Movie name={movie.name} price={movie.price} id={movie.id} />
      ))}
    </div>
  );
};

export default MovieList;
