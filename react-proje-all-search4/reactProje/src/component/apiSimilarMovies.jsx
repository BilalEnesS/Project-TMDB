// apiSimilarMovies.js
import axios from 'axios';

const apiSimilarMovies = async (movieId) => {
  const API_KEY = '79c51a2ee1ecd5ad9edbb3a779c4c767';

  try {
    const response = await axios.get(
      `https://api.themoviedb.org/3/movie/${movieId}/similar?language=en-US&page=1`,
      {
        headers: {
          Authorization: `Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI4ZDNkNTZiMTc3NzdkZGJiYTQ5ZmJmY2FlOTIyZDY5MiIsInN1YiI6IjY0Y2MwOTc5NDNjZDU0MDBmZjlhZWI2YyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.lzA_0UFhzTnai0X3XjI421DDmYNYZxouByAgygaoOxQ`,
        },
      }
    );

    return response.data.results;
  } catch (error) {
    console.error('Error fetching similar movies:', error);
    return [];
  }
};

export default apiSimilarMovies;
