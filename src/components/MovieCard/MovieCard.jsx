import RatingBadge from "../RatingBadge/RatingBadge";
import "./MovieCard.css";

const MovieCard = ({ movie }) => (
  <div className="card">
    <img
      src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
      alt={movie.title}
    />
    <div className="card__body">
      <h3 className="font-bold">{movie.title}</h3>
      <p>{movie.release_date}</p>
      <RatingBadge value={movie.vote_average} />
    </div>
  </div>
);
export default MovieCard;
