import axios from 'axios';

const apiDetails = async (term) => {
  const API_KEY = '79c51a2ee1ecd5ad9edbb3a779c4c767';
  console.log(term)
  const response = await axios.get(
    'https://api.themoviedb.org/3/movie/{movie_id}',
    {
      headers: {
        Authorization: 
        'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI4ZDNkNTZiMTc3NzdkZGJiYTQ5ZmJmY2FlOTIyZDY5MiIsInN1YiI6IjY0Y2MwOTc5NDNjZDU0MDBmZjlhZWI2YyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.lzA_0UFhzTnai0X3XjI421DDmYNYZxouByAgygaoOxQ'
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

      const movieWithDuration = {
        ...movie,
        duration: movieDetailsResponse.data.runtime,
      };

      
    })
  );

 
};

export default apiDetails;