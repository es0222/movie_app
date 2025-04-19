import MovieGrid from "../MovieGrid/MovieGrid";
import "./MovieSection.css";


function MovieSection({ title, movies }) {
  return (
    <section className="section ">
      <h2 className="section__title ">{title}</h2>
      <section className="movie_home">
      <MovieGrid movies={movies} />
      </section>
    </section>
  );
}

export default MovieSection;   
