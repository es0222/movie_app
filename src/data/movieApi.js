const BASE_URL = "https://api.themoviedb.org/3";
const API_KEY = "5a78cb8fff3b67c0a36565cc8472c24a";

const fetchData = async (endpoint) => {
  const res = await fetch(
    `${BASE_URL}${endpoint}?api_key=${API_KEY}&language=en-US`
  );
  const data = await res.json();
  return data.results;
};

export const fetchPopularMovies = () => fetchData("/movie/popular");
export const fetchTopRatedMovies = () => fetchData("/movie/top_rated");
export const fetchTrendingMovies = () => fetchData("/trending/movie/day");

export const fetchMovieById = async (movieId) => {
  try {
    const response = await fetch(
      `${BASE_URL}/movie/${movieId}?api_key=${API_KEY}`
    );
    if (!response.ok) throw new Error("Movie not found");
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error fetching movie by ID:", error);
    return null;
  }
};

export const fetchGenres = async () => {
  const response = await fetch(
    `${BASE_URL}/genre/movie/list?api_key=${API_KEY}`
  );
  const data = await response.json();
  return data.genres;
};
export const fetchManyMovies = async (pages = 5) => {
  let allMovies = [];

  try {
    for (let page = 1; page <= pages; page++) {
      const response = await fetch(
        `${BASE_URL}/discover/movie?api_key=${API_KEY}&page=${page}`
      );
      const data = await response.json();
      allMovies = [...allMovies, ...data.results];
    }
    return allMovies;
  } catch (error) {
    console.error("Error fetching movies:", error);
    return [];
  }
};
export const fetchRelatedMoviesByGenre = async (genreId) => {
  try {
    const res = await fetch(
      `${BASE_URL}/discover/movie?api_key=${API_KEY}&with_genres=${genreId}`
    );
    const data = await res.json();
    return data.results;
  } catch (error) {
    console.error("Error fetching related movies:", error);
    return [];
  }
};
