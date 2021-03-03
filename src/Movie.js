import React, { useContext } from "react";
import { MovieContext } from "./MovieContext";

const Movie = ({ name, price }) => {
  const [movies, setMovies] = useContext(MovieContext);

  return (
    <div>
      <h1>{name}</h1>
      <h1>{price}</h1>
    </div>
  );
};

export default Movie;
