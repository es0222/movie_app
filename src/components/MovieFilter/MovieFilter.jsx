import React from "react";

const MovieFilter = ({ filters, setFilters }) => {
  const genres = ["All", "Action", "Comedy", "Drama", "Horror", "Sci-Fi"];

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFilters({ ...filters, [name]: value });
  };

  const handleReset = () => {
    setFilters({ genre: "All", sort: "", search: "" });
  };

  return (
    <form className="my-4">
      <div className="row g-3 align-items-end">
        {/* Search Input */}
        <div className="col-md-4">
          <label htmlFor="search" className="form-label">
            Search
          </label>
          <input
            type="text"
            className="form-control"
            id="search"
            name="search"
            placeholder="Search by title..."
            value={filters.search}
            onChange={handleChange}
          />
        </div>

        {/* Genre Select */}
        <div className="col-md-3">
          <label htmlFor="genre" className="form-label">
            Genre
          </label>
          <select
            id="genre"
            name="genre"
            className="form-select"
            value={filters.genre}
            onChange={handleChange}
          >
            {genres.map((g) => (
              <option key={g} value={g}>
                {g}
              </option>
            ))}
          </select>
        </div>

        {/* Sort Select */}
        <div className="col-md-3">
          <label htmlFor="sort" className="form-label">
            Sort By
          </label>
          <select
            id="sort"
            name="sort"
            className="form-select"
            value={filters.sort}
            onChange={handleChange}
          >
            <option value="">None</option>
            <option value="rating">Rating</option>
            <option value="release">Release Date</option>
          </select>
        </div>

        {/* Reset Button */}
        <div className="col-md-2 d-grid">
          <button
            type="button"
            className="btn btn-danger"
            onClick={handleReset}
          >
            Reset
          </button>
        </div>
      </div>
    </form>
  );
};

export default MovieFilter;
