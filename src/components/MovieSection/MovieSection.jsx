import MovieGrid from "../MovieGrid/MovieGrid";
import "./MovieSection.css";


function MovieSection({ title, movies, small }) {
  return (
    <section className="section ">
      <h2 className="section__title ">{title}</h2>
      <section className="movie_home w-100 ">
        <MovieGrid movies={movies} small={small} />
      </section>
    </section>
  );
}

export default MovieSection;   
