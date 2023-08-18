import axios from 'axios';



    const seriesAPI = axios.create({
        baseURL: 'https://api.themoviedb.org/3/trending/tv/day?language=en-US', // Series API base URL
        headers: {
          Authorization: `Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI4ZDNkNTZiMTc3NzdkZGJiYTQ5ZmJmY2FlOTIyZDY5MiIsInN1YiI6IjY0Y2MwOTc5NDNjZDU0MDBmZjlhZWI2YyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.lzA_0UFhzTnai0X3XjI421DDmYNYZxouByAgygaoOxQ`,
        },
    });


    export const searchSeries = async (term) => {
        try {
          const searchResponse = await seriesAPI.get('/search', {
            params: {
              query: term,
            },
          });
          return searchResponse.data.results;
        } catch (error) {
          console.error('Error searching series:', error);
          throw error;
        }
      };
      

export const fetchSeriesDetails = async (seriesId) => {
  try {
    const response = await seriesAPI.get(`/${seriesId}`);
    return response.data;
  } catch (error) {
    console.error('Error fetching series details:', error);
    throw error;
  }
};
