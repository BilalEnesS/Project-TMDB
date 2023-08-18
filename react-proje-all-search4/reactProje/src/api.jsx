import axios from 'axios';

const fetchMovieDetails = async (movieId) => {
  const API_KEY = '79c51a2ee1ecd5ad9edbb3a779c4c767';

  try {
    const response = await axios.get(
      `https://api.themoviedb.org/3/movie/${movieId}`,
      {
        headers: {
          Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI4ZDNkNTZiMTc3NzdkZGJiYTQ5ZmJmY2FlOTIyZDY5MiIsInN1YiI6IjY0Y2MwOTc5NDNjZDU0MDBmZjlhZWI2YyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.lzA_0UFhzTnai0X3XjI421DDmYNYZxouByAgygaoOxQ', // Burada kendi API anahtarınızı eklemelisiniz
        },
      }
    );

    return response.data;
  } catch (error) {
    console.error('Error fetching movie details:', error);
    return null;
  }
};

const fetchGenres = async () => {
  const API_KEY = '79c51a2ee1ecd5ad9edbb3a779c4c767';

  try {
    const response = await axios.get(
      'https://api.themoviedb.org/3/genre/movie/list',
      {
        headers: {
          Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI4ZDNkNTZiMTc3NzdkZGJiYTQ5ZmJmY2FlOTIyZDY5MiIsInN1YiI6IjY0Y2MwOTc5NDNjZDU0MDBmZjlhZWI2YyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.lzA_0UFhzTnai0X3XjI421DDmYNYZxouByAgygaoOxQ', // Burada kendi API anahtarınızı eklemelisiniz
        },
      }
    );

    return response.data.genres;
  } catch (error) {
    console.error('Error fetching genres:', error);
    return [];
  }
};

const searchImages = async (term) => {
  const API_KEY = '79c51a2ee1ecd5ad9edbb3a779c4c767';
  const response = await axios.get(
    'https://api.themoviedb.org/3/search/movie?include_adult=false&language=en-US&page=1',
    {
      headers: {
        Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI4ZDNkNTZiMTc3NzdkZGJiYTQ5ZmJmY2FlOTIyZDY5MiIsInN1YiI6IjY0Y2MwOTc5NDNjZDU0MDBmZjlhZWI2YyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.lzA_0UFhzTnai0X3XjI421DDmYNYZxouByAgygaoOxQ', // Burada kendi API anahtarınızı eklemelisiniz
      },
      params: {
        query: term,
      },
    }
  );
  const results = response.data.results;

  const moviesWithDuration = await Promise.all(
    results.map(async (movie) => {
      const movieDetailsResponse = await axios.get(
        `https://api.themoviedb.org/3/movie/${movie.id}?api_key=${API_KEY}`
      );

      const movieWithDetails = {
        ...movie,
        duration: movieDetailsResponse.data.runtime,
        genres: movieDetailsResponse.data.genres,
      };

      return movieWithDetails;
    })
  );

  return moviesWithDuration;
};

export default searchImages;

