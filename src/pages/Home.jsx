import HeroBanner   from "../components/HeroBanner/HeroBanner";
import MovieSection from "../components/MovieSection/MovieSection";
import {
  fetchPopularMovies,
  fetchTopRatedMovies,
  fetchTrendingMovies
} from "/src/data/movieApi.js"
import { useState,useEffect } from "react";


/* ---- simple mock slicing / filtering ---- */

export default function Home() {
  const [popular, setPopular] = useState([]);
  const [topRated, setTopRated] = useState([]);
  const [trending, setTrending] = useState([]);
 
useEffect(() => {
  const getMovies = async () => {
    const movies = await fetchPopularMovies(); // or any endpoint you want

    setTrending(movies.slice(0, 4));
    setPopular(movies.filter((m) => m.vote_average >= 7.4).slice(0,4));
    setTopRated(
      [...movies].sort((a, b) => b.vote_average - a.vote_average).slice(0, 4)
    );
  };

  getMovies();
}, []);
  return (
    <>
      <HeroBanner />

      <MovieSection title="Trending"       movies={trending} />
      <MovieSection title="What's Popular" movies={popular}  />
      <MovieSection title="Top Rated"      movies={topRated} />
    </>
  );
}
