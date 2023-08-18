import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import { Link } from 'react-router-dom';

function ImgSimilarItem({ image }) {
  const formatDuration = (minutes) => {
    const hours = Math.floor(minutes / 60);
    const remainingMinutes = minutes % 60;
    return `${hours}h ${remainingMinutes}m`;
  };

  const formatReleaseDate = (dateString) => {
    const year = new Date(dateString).getFullYear();
    return year;
  };

  const formatRating = (rating) => {
    const roundedRating = rating.toFixed(1);
    return roundedRating;
  };

  return (
    <div className="card-container">
      <Link to={`/Details/${image.id}`} style={{ textDecoration: 'none', color: 'inherit' }}>
        <div className="card">
          <img
            className="card-img-top"
            src={`https://image.tmdb.org/t/p/w500/${image.poster_path}`}
            alt={image.title}
          />
          <div className="card-body" style={{ paddingRight: 0, paddingLeft: 0 }}>
            <h5 className="card-title">{image.title}</h5>
            <div className="card-text">
              <p>
                {image.genres && image.genres.length > 0 ? (
                  image.genres.map((genre) => (
                    <span key={genre.id}>{genre.name}, </span>
                  ))
                ) : (
                  <span>No genres available</span>
                )}
              </p>
              <p className='genresItem'>
                <div>{formatDuration(image.duration)} / {formatReleaseDate(image.release_date)} </div>
                <span className="rating" style={{ color: 'white', marginLeft: '10px' }}>
                  {formatRating(image.vote_average)}
                </span>
              </p>
              <p>

                
              </p>
            </div>
          </div>
        </div>
      </Link>
    </div>
  );
}

export default ImgSimilarItem;
