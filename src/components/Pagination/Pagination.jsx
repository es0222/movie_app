import React from "react";
import "./Pagination.css";

const Pagination = ({
  moviesPerPage,
  totalMovies,
  paginate,
  nextPage,
  prevPage,
  currentPage,
}) => {
  const pageNumbers = [];

  // Calculate total pages
  for (let i = 1; i <= Math.ceil(totalMovies / moviesPerPage); i++) {
    pageNumbers.push(i);
  }

  return (
    <div className="pagination-container ">
      <ul className="pagination ">
        <li className={`page-item ${currentPage === 1 ? "disabled" : ""}`}>
          <button
            onClick={prevPage}
            className="page-link bg-black text-secondary border-none"
            disabled={currentPage === 1}
          >
            &laquo; Prev
          </button>
        </li>

        {pageNumbers.map((number) => (
          <li
            key={number}
            className={`bg-black page-item ${
              currentPage === number ? "active" : ""
            }`}
          >
            <button
              onClick={() => paginate(number)}
              className="page-link bg-black text-secondary"
            >
              {number}
            </button>
          </li>
        ))}

        <li
          className={`page-item ${
            currentPage === Math.ceil(totalMovies / moviesPerPage)
              ? "disabled"
              : ""
          }`}
        >
          <button
            onClick={nextPage}
            className="page-link bg-black text-secondary"
            disabled={currentPage === Math.ceil(totalMovies / moviesPerPage)}
          >
            Next &raquo;
          </button>
        </li>
      </ul>
    </div>
  );
};

export default Pagination;
