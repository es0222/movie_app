import { Routes, Route } from "react-router-dom";
import Home         from "../pages/Home";
import AllMovies    from "../pages/AllMovies";
import Explore      from "../pages/Explore";
import SearchResult from "../pages/SearchResult";

export default function AppRoutes() {
  return (
    <Routes>
      <Route path="/"        element={<Home />} />
      <Route path="/all"     element={<AllMovies />} />
      <Route path="/explore" element={<Explore />} />
      <Route path="/search"  element={<SearchResult />} />
      {/* 404 fallback */}
      <Route path="*"        element={<h1>Page Not Found</h1>} />
    </Routes>
  );
}
