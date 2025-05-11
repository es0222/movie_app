import { useState, useEffect } from "react";
import MovieGrid from "../components/MovieGrid/MovieGrid";
import { fetchPopularMovies } from "/src/data/movieApi.js";
import Pagination from "../components/Pagination/Pagination";

function AllMovies() {
  const [allMovies, setAllMovies] = useState([]);

  // Pagination states
  const [currentPage, setCurrentPage] = useState(1);
  const [moviesPerPage] = useState(8); // Adjust this number as needed

  useEffect(() => {
    const getMovies = async () => {
      const movies = await fetchPopularMovies();
      setAllMovies(movies);
    };

    getMovies();
  }, []);

  // Get current movies for pagination
  const indexOfLastMovie = currentPage * moviesPerPage;
  const indexOfFirstMovie = indexOfLastMovie - moviesPerPage;
  const currentMovies = allMovies.slice(indexOfFirstMovie, indexOfLastMovie);

  // Change page
  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  // Go to next page
  const nextPage = () => {
    if (currentPage < Math.ceil(allMovies.length / moviesPerPage)) {
      setCurrentPage(currentPage + 1);
    }
  };

  // Go to previous page
  const prevPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  return (
    <>
      <h1 className="text-start text-white m-4 title ">All Movies</h1>
      <MovieGrid movies={currentMovies} />

      <Pagination
        moviesPerPage={moviesPerPage}
        totalMovies={allMovies.length}
        paginate={paginate}
        nextPage={nextPage}
        prevPage={prevPage}
        currentPage={currentPage}
      />
    </>
  );
}

export default AllMovies;
