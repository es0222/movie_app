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
