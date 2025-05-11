import RatingBadge from "../RatingBadge/RatingBadge";
import "./MovieCard.css";
import { useNavigate } from "react-router-dom";

const MovieCard = ({ movie,small }) => {
   const navigate = useNavigate();
  const handleClick = () => {
    navigate(`/movie/${movie.id}`);
  };
  return (
    <div className={`card ${small ? "card--small" : ""} border bg-black shadow`} onClick={handleClick}>
      <img
        src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
        alt={movie.title}
      />
      <div className="card__body">
        <h3 className="font-bold text-white">{movie.title}</h3>
        <p className="text-light">{movie.release_date}</p>
        <RatingBadge value={movie.vote_average} />
      </div>
    </div>
  );
}
export default MovieCard;
