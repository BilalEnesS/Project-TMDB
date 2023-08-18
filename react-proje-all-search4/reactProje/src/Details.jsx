import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import DetailItem from './component/DetailItem';
import CastPage from './component/CastPage'; 
import ImgList from './component/ImgList';
import MoreLikeThisList from './component/MoreLikeThisList';
import apiPopular from './apiPopular';
import Footer from './component/Footer';
import FooterBottom from './component/FooterBottom';
import Navbar from './component/Navbar';
import ImgSimilarList from './component/ImgSimilarList';

function Details() {
  const [movieDetails, setMovieDetails] = useState(null);
  const { id } = useParams();
  const [cast, setCast] = useState([]);
  const [crew, setCrew] = useState([]); // State for crew data

  useEffect(() => {
    const fetchMovieDetails = async () => {
      try {
        const response = await axios.get(
          `https://api.themoviedb.org/3/movie/${id}?api_key=79c51a2ee1ecd5ad9edbb3a779c4c767`
        );
        setMovieDetails(response.data);

        // Cast verisini ayrıca çek ve güncelle
        const castResponse = await axios.get(
          `https://api.themoviedb.org/3/movie/${id}/credits?api_key=79c51a2ee1ecd5ad9edbb3a779c4c767`
        );
        setCast(castResponse.data.cast);

        // Crew verisini de çek ve güncelle
        const crewResponse = await axios.get(
          `https://api.themoviedb.org/3/movie/${id}/credits?api_key=79c51a2ee1ecd5ad9edbb3a779c4c767`
        );
        setCrew(crewResponse.data.crew);
      } catch (error) {
        console.error('Error fetching movie details', error);
      }
    };

    fetchMovieDetails();
  }, [id]);

  const [images, setImages] = useState([]); // Use useState to declare images state

  useEffect(() => {
      // Fetch popular movies when the component mounts
      const fetchPopularMovies = async () => {
          try {
              const data = await apiPopular();
              setImages(data);
          } catch (error) {
              console.error('Error fetching popular movies:', error);
          }
      };

      fetchPopularMovies();
  }, []);

  const handleSearch = async (term) => {
      try {
          const searchData = await searchImages(term);
          setImages(searchData);
      } catch (error) {
          console.error('Error searching movies:', error);
      }
  };

  return (
    <div>
      {/* Pass the movieDetails as prop to the DetailItem component */}
      <Navbar/>
      <DetailItem movie={movieDetails} crew={crew} />
      
      {/* Pass the cast data to the CastPage component */}
      <CastPage cast={cast} />
      <ImgSimilarList movieId={id} />
      <Footer />
      <FooterBottom />
    </div>
  );
}

export default Details;