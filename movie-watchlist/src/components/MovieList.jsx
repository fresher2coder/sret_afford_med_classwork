import React, { useEffect, useState } from "react";

import axios from "axios";

function MovieList() {
  const [count, setCount] = useState(0);
  //mounting and updating phase
  useEffect(() => {
    console.log("MovieList component mounted and updated");
  });

  const fetchMovies = async () => {
    const response = await axios.get(
      "https://json-server-9c4h.onrender.com/movies"
    );
    console.log(response.data);
  };

  //mounting phase
  useEffect(() => {
    console.log("MovieList component mounted only once");
    //api calls
    // fetch or axios data->string converted into json

    fetchMovies();
  }, []);

  //updating phase
  useEffect(() => {
    console.log(`MovieList component updated: count is now ${count}`);
  }, [count]);

  const increment = () => {
    setCount((prevCount) => prevCount + 1);
  };

  return (
    <>
      <h1>Counter: {count}</h1>
      <button onClick={increment}>Increment</button>
    </>
  );
}

export default MovieList;
