import { useState,useEffect } from "react";
import MovieGrid from "../components/MovieGrid/MovieGrid";
import { fetchPopularMovies } from "/src/data/dummyMovies.js";

function AllMovies() {
  
  const [allMovies, setAllMovies]=useState([])
  useEffect(() => {
  const getMovies = async () => {
    const movies = await fetchPopularMovies(); // or any endpoint you want

    setAllMovies(movies);
  };

  getMovies();
}, []);
return(
  <>
    <h1>All Movies</h1>
    {console.log(allMovies)}
    <MovieGrid movies={allMovies} />
  </>)
};
export default AllMovies;