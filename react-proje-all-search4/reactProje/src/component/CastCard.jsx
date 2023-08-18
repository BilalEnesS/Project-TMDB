import React from 'react';
import './CastCard.css';
import { Link } from 'react-router-dom';

const CastCard = ({ id, name, character, profile_path }) => {
  if (!id || !name || !character || !profile_path) {
    return <div></div>;
  }

  return (
    <Link to={`/castDetailPage/${id}`} style={{ textDecoration: 'none' }}>
      <div className="cast-card">
        <img src={`https://image.tmdb.org/t/p/w500/${profile_path}`} alt={character} className="cast-img" />
        <div className="cast-details">
          <h5>{name}</h5>
          <p className="cast-name">{character}</p>
        </div>
      </div>
    </Link>
  );
};

export default CastCard;
