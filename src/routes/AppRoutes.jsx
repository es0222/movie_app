import { Routes, Route } from "react-router-dom";
import Home         from "../pages/Home";
import AllMovies    from "../pages/AllMovies";

import SearchResult from "../pages/SearchResult";
import Contact from "../pages/Contact";
import MovieDetails from "../pages/MovieDetails";
export default function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/all" element={<AllMovies />} />
      <Route path="/search" element={<SearchResult />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/movie/:movieId" element={<MovieDetails />} />
      {/* 404 fallback */}
      <Route path="*" element={<h1>Page Not Found</h1>} />
    </Routes>
  );
}
