import MovieCard from "../MovieCard/MovieCard";
import "./MovieGrid.css";
import { fetchPopularMovies } from "/src/data/dummyMovies.js";
import { useState,useEffect } from "react";
 const MovieGrid = ({movies }) => {
  

  return (
    <div className="movie-grid">
      {movies.map((movie) => (
        <MovieCard key={movie.id} movie={movie} />
      ))}
    </div>
  );
};


export default MovieGrid;
