const API_KEY = 'eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJjOTY3NWQ3ZjZiZTY0Y2EwODFjNzJkYzIxYzQ5ZmY4MyIsIm5iZiI6MTcyOTk5NzkyMy43NDgxOTksInN1YiI6IjY2NjJiNTMzNzRhODY3NTllNGU5NjhmZSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.0kS8WTVEILNFvurO-dL2MrJJciy17T1tkHosK0HgYhc'
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
