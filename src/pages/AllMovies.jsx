import { useState, useEffect } from "react";
import MovieGrid from "../components/MovieGrid/MovieGrid";
import { fetchPopularMovies } from "/src/data/movieApi.js";
import Pagination from "../components/Pagination/Pagination";
import MovieFilter from "../components/MovieFilter/MovieFilter";
import { fetchManyMovies } from "../data/movieApi";

function AllMovies() {
  const [allMovies, setAllMovies] = useState([]);

  // Pagination states
  const [currentPage, setCurrentPage] = useState(1);
  const [moviesPerPage] = useState(8);

  // Filter state
  const [filters, setFilters] = useState({
    genre: "All",
    sort: "",
    search: "",
  });

  useEffect(() => {
    const getMovies = async () => {
      const movies = await fetchManyMovies();
      setAllMovies(movies);
    };

    getMovies();
  }, []);

  // Filter and sort movies
  const filteredMovies = allMovies
    .filter((movie) => {
      const matchGenre =
        filters.genre === "All" ||
        movie.genre_ids.includes(parseInt(filters.genre));
      const matchSearch = movie.title
        .toLowerCase()
        .includes(filters.search.toLowerCase());
      return matchGenre && matchSearch;
    })
    .sort((a, b) => {
      if (filters.sort === "rating") return b.vote_average - a.vote_average;
      if (filters.sort === "release")
        return new Date(b.release_date) - new Date(a.release_date);
      return 0;
    });

  // Get current movies for pagination
  const indexOfLastMovie = currentPage * moviesPerPage;
  const indexOfFirstMovie = indexOfLastMovie - moviesPerPage;
  const currentMovies = filteredMovies.slice(
    indexOfFirstMovie,
    indexOfLastMovie
  );

  // Pagination controls
  const paginate = (pageNumber) => setCurrentPage(pageNumber);
  const nextPage = () => {
    if (currentPage < Math.ceil(filteredMovies.length / moviesPerPage)) {
      setCurrentPage(currentPage + 1);
    }
  };
  const prevPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  return (
    <>
      <h1 className="text-start text-white m-4 title">All Movies</h1>
      <div className="container  p-3 rounded">
        <MovieFilter filters={filters} setFilters={setFilters} />
      </div>

      <MovieGrid movies={currentMovies} />

      <Pagination
        moviesPerPage={moviesPerPage}
        totalMovies={filteredMovies.length}
        paginate={paginate}
        nextPage={nextPage}
        prevPage={prevPage}
        currentPage={currentPage}
      />
    </>
  );
}

export default AllMovies;
