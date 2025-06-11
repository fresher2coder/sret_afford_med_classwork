import React from "react";
import { useMovie } from "../contexts/MovieContext";

function MovieList() {
  const { movies } = useMovie();
  console.log(movies);
  return <div>MovieList</div>;
}

export default MovieList;
