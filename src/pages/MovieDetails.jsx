import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { fetchMovieById,fetchTopRatedMovies } from "../data/movieApi";
import RatingBadge from "../components/RatingBadge/RatingBadge";
import "../styles/moviedetails.css"
import MovieSection from "../components/MovieGrid/MovieGrid";

const MovieDetails = () => {
  const { movieId } = useParams();
  const [movie, setMovie] = useState(null);
  const [loading, setLoading] = useState(true);
const[topMovies,setTopMovies]=useState([])
  useEffect(() => {
    const getMovie = async () => {
      try {
        const data = await fetchMovieById(movieId);
        setMovie(data);
        const topmovies= await fetchTopRatedMovies();
        const top = data.genres
          ? topmovies
              
              .slice(0, 4) // Limit to 6 related movies
          : topmovies.slice(0, 4); // Or just take first 6 if no genres

        setTopMovies(top);
      } catch (err) {
        console.error("Error fetching movie:", err);
      } finally {
        setLoading(false);
      }
    };  

    getMovie();
  }, [movieId]);
console.log(topMovies);

  if (loading) return <p className="text-center text-xl mt-10">Loading...</p>;
  if (!movie)
    return <p className="text-center text-red-600 mt-10">Movie not found.</p>;

  return (
    <div className="container py-5 ">
      <div className=" contant-container row shadow-lg p-3 mb-5  rounded">
        <div className="col-12 col-md-4 ">
          <img
            src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
            alt={movie.title}
            className="img rounded shadow"
          />
        </div>

        <div className="col-12 col-md-8">
          <div>
            <div className="movie-title">
              <h1 className="h3 fw-bolder fs-3 text-light">
                {movie.title}

                <span className="ms-5 fw-light">
                  {movie.vote_average}{" "}
                  <span className="mb-4 ">
                    <RatingBadge />
                  </span>{" "}
                </span>
              </h1>
              <p className="text-secondary mb-5">{movie.release_date}</p>
            </div>
          </div>
          <strong>Overview:</strong>
          <div className=""></div>
          <p className="text-secondary w-75 my-3">{movie.overview}</p>
          <p className="text-secondary mb-2">
            <strong className="text-light">Genres:</strong>{" "}
            {movie.genres?.map((g) => g.name).join(", ")}
          </p>
          <p className="text-secondary mb-2">
            <strong className="text-light">Rating:</strong> {movie.vote_average}{" "}
            / 10
          </p>
          <div className="related mt-3">
            <h2 className="text-light mb-3 ">Related Movies</h2>
            <MovieSection movies={topMovies} small={true} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default MovieDetails;
