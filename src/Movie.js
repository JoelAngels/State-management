import React, { useContext } from "react";
import { MovieContext } from "./MovieContext";

const Movie = () => {
  const [movies, setMovies] = useContext(MovieContext);

  return (
    <div>
      <h1>List of movies are: {movies.length}</h1>
    </div>
  );
};

export default Movie;
