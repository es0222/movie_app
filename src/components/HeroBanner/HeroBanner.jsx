import { useNavigate } from "react-router-dom";
import SearchBar      from "../SearchBar/SearchBar";
import "./HeroBanner.css";

const HeroBanner = () => {
  const navigate = useNavigate();

  const handleSearch = query => {
    if (!query.trim()) return;
    // Navigate to /search and preserve the query in the URL
    navigate(`/search?q=${encodeURIComponent(query)}`);
  };

  return (
    <section className="hero">
      <div className="container hero__inner">
        <h1>Discover Your Next Favorite Movie</h1>
        <p>Search for movies and explore the world of cinema.</p>

        {/* ← search bar now lives here */}
        <SearchBar onSearch={handleSearch} />
      </div>
    </section>
  );
};

export default HeroBanner;
