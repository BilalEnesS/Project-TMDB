import React, { useEffect, useState } from 'react';
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

const apiPopular = async () => {
  const response = await axios.get(
    'https://api.themoviedb.org/3/movie/popular?language=en-US&page=1',
    {
      headers: {
        Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI4ZDNkNTZiMTc3NzdkZGJiYTQ5ZmJmY2FlOTIyZDY5MiIsInN1YiI6IjY0Y2MwOTc5NDNjZDU0MDBmZjlhZWI2YyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.lzA_0UFhzTnai0X3XjI421DDmYNYZxouByAgygaoOxQ', // Burada kendi API anahtarınızı eklemelisiniz
      },
    }
  );

  const results = response.data.results;

  // Veri çekildikten sonra ekstra sorgu atarak süre ve genres bilgilerini ekleyelim
  const moviesWithDetails = await Promise.all(
    results.map(async (movie) => {
      const movieDetails = await fetchMovieDetails(movie.id);

      if (movieDetails) {
        const movieWithDetails = {
          ...movie,
          duration: movieDetails.runtime,
          genres: movieDetails.genres,
        };

        return movieWithDetails;
      }

      return movie;
    })
  );

  return moviesWithDetails;
};

export default apiPopular;
