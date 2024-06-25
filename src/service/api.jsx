const API_KEY = 'f4d1128013cccb9a31326d89184ecfe4'
const BASE_URL = 'https://api.themoviedb.org/3'

export const fetchMovies = async (page = 1) => {
  try {
    const response = await fetch(`${BASE_URL}/movie/popular?api_key=${API_KEY}&page=${page}`);
    if (!response.ok) {
      throw new Error('Failed to fetch movies');
    }
    const data = await response.json();
    return data.results;
  } catch (error) {
    console.error(error);
    return [];
  }
}

export const fetchMovieById = async (id) => {
  try {
    const response = await fetch(`${BASE_URL}/movie/${id}?api_key=${API_KEY}`);
    if (!response.ok) {
      throw new Error('Failed to fetch movie details');
    }
    return await response.json();
  } catch (error) {
    console.error(error);
    return null;
  }
}

export const searchMovie = async (query, page=1) => {
  try {
    const response = await fetch(`${BASE_URL}/search/movie?api_key=${API_KEY}&query=${encodeURIComponent(query)}&page=${page}`);
    if (!response.ok) {
      throw new Error('Failed to search movie');
    }
    return await response.json();
  } catch (error) {
    console.error(error);
    return null;
  }
}

export const similarMovie = async (id) => {
  try {
    const response = await fetch(`${BASE_URL}/movie/${id}/similar?api_key=${API_KEY}`);
    if (!response.ok) {
      throw new Error('Failed to find similar movies');
    }
    return await response.json();
  } catch (error) {
    console.error(error);
    return null;
  }
}