import React, { useState, useEffect } from 'react';
import ImgSimilarItem from './ImgSimilarItem';
import 'bootstrap/dist/css/bootstrap.css';
import './ImgList.css';
import apiSimilar from '../apiSimilar'; // Import the apiSimilar function

function ImgSimilarList({ movieId }) {
  const [similarMovies, setSimilarMovies] = useState([]);
  const [showMore, setShowMore] = useState(false);
  const initialMoviesToShow = 6;
  const moviesToShow = showMore ? similarMovies : similarMovies.slice(0, initialMoviesToShow);

  const handleShowMore = () => {
    setShowMore(true);
  };

  const handleShowLess = () => {
    setShowMore(false);
  };

  useEffect(() => {
    async function fetchSimilarMovies() {
      try {
        const fetchedSimilarMovies = await apiSimilar(movieId);
        setSimilarMovies(fetchedSimilarMovies);
      } catch (error) {
        console.error('Error fetching similar movies:', error);
      }
    }

    fetchSimilarMovies();
  }, [movieId]);

  return (
    <div className="container">
      <div className="row">
        <div className="col-md-6">
          <h1 className='H1' style={{marginLeft:'-2%', marginBottom:'3%'}}>More Like This</h1>
        </div>
        <div className="col-md-6 d-flex justify-content-end">
          {!showMore ? (
            <button
              className="btn btn-light"
              style={{ marginRight: '1%', width: '69px', height: '38px', textAlign: 'center' }}
              onClick={handleShowMore}
            >
              More
            </button>
          ) : (
            <button
              className="btn btn-light"
              style={{ marginRight: '1%', width: '69px', height: '38px', textAlign: 'center' }}
              onClick={handleShowLess}
            >
              Less
            </button>
          )}
        </div>
      </div>
      <div className={`row ${showMore ? 'scrolling-row' : ''}`}>
        {moviesToShow.map((image) => (
          <div className="card mb-2" style={{ marginRight: '24px', border: 'none', flexShrink: 0, padding: 0 }} key={image.id}>
            <ImgSimilarItem image={image} />
          </div>
        ))}
      </div>
    </div>
  );
}

export default ImgSimilarList;
