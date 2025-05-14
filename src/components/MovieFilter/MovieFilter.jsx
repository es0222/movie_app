import { useEffect, useState } from "react";
import { fetchGenres } from "../../data/movieApi.js";

const MovieFilter = ({ filters={}, setFilters }) => {
  const [genres, setGenres] = useState([{ id: "All", name: "All Genres" }]);

  useEffect(() => {
    const getGenres = async () => {
      try {
        const genreList = await fetchGenres();
        setGenres((prev) => [...prev, ...genreList]);
      } catch (error) {
        console.error("Failed to fetch genres:", error);
      }
    };

    getGenres();
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFilters((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  return (
    <div className="d-flex flex-column flex-md-row gap-3 mb-3">
      <input
        type="text"
        name="search"
        value={filters.search}
        onChange={handleChange}
        placeholder="Search by title"
        className="form-control"
      />

      <select
        name="genre"
        value={filters.genre}
        onChange={handleChange}
        className="form-select"
      >
        {genres.map((genre) => (
          <option key={genre.id} value={genre.id}>
            {genre.name}
          </option>
        ))}
      </select>

      <select
        name="sort"
        value={filters.sort}
        onChange={handleChange}
        className="form-select"
      >
        <option value="">Sort</option>
        <option value="rating">Rating (High to Low)</option>
        <option value="release">Release Date (New to Old)</option>
      </select>
    </div>
  );
};

export default MovieFilter;
