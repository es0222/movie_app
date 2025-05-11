import MovieCard from "../MovieCard/MovieCard";
import "./MovieGrid.css";
import { fetchPopularMovies } from "/src/data/dummyMovies.js";
import { useState,useEffect } from "react";
 const MovieGrid = ({ movies, small = false }) => {
   return (
     <div className="movie-grid ">
       {movies.map((movie) => (
         <MovieCard key={movie.id} movie={movie} small={small} />
       ))}
     </div>
   );
 };


export default MovieGrid;
