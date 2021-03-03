import React from "react";

const Movie = ({ name, price, id }) => {
  return (
    <div>
      <h3>Movie: {name}</h3>
      <h3>Price: {price}</h3>
      <h3>Id: {id}</h3>
      {/* {movies.map((movie) => (
        <li>{movie.name}</li>
      ))} */}
    </div>
  );
};

export default Movie;
