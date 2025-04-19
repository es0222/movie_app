import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import MovieGrid from "../components/MovieGrid/MovieGrid";
import { fetchPopularMovies } from "/src/data/dummyMovies.js";

const useQuery = () => new URLSearchParams(useLocation().search);

export default () => {
  const q = useQuery().get("q") || "";
  const [list,setList] = useState([]);

  useEffect(() => {
    // Get movies and filter them
    fetchPopularMovies()
      .then(movies => {
        const filtered = movies.filter(movie => 
          movie.title.toLowerCase().includes(q.toLowerCase())
        );
        setList(filtered);
      })
      .catch(err => console.error(err));
  }, [q]);

  return (
    <>
      <h1>Search results for “{q}”</h1>
      <MovieGrid movies={list} />
    </>
  );
};
