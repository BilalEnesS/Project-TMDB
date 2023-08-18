// CastPage.jsx
import React, { useState } from 'react';
import CastCard from './CastCard';
import CastDetail from './CastDetail';
import './CastPage.css';

const CastPage = ({ cast }) => {
  const [showMore, setShowMore] = useState(false);
  const [selectedCastId, setSelectedCastId] = useState(null);

  if (!cast || cast.length === 0) {
    return <div></div>;
  }

  const castToShow = showMore ? cast : cast.slice(0, 4);

  const handleShowMore = () => {
    setShowMore(true);
  };

  const handleShowLess = () => {
    setShowMore(false);
  };

  const handleCardClick = (castId) => {
    setSelectedCastId(castId);
  };

  return (
    <div className="container" style={{ marginTop: '3%' }}>
      <div className="cast-page">
        <div className="row">
          <div className="col-md-6">
            <h2>Top Cast</h2>
          </div>
          <div className="col-md-6 d-flex justify-content-end">
            {!showMore ? (
              <button
                className="btn btn-light"
                style={{
                  marginRight: '1%',
                  width: '69px',
                  height: '38px',
                  textAlign: 'center',
                }}
                onClick={handleShowMore}
              >
                More
              </button>
            ) : (
              <button
                className="btn btn-light"
                style={{
                  marginRight: '1%',
                  width: '69px',
                  height: '38px',
                  textAlign: 'center',
                }}
                onClick={handleShowLess}
              >
                Less
              </button>
            )}
          </div>
        </div>
        <div className="cast-list">
          {castToShow.map((castMember) => (
            <CastCard
              key={castMember.id}
              id={castMember.id}
              name={castMember.name}
              character={castMember.character}
              profile_path={castMember.profile_path}
              onCardClick={handleCardClick}
            />
          ))}
        </div>
      </div>
      {selectedCastId && <CastDetail castId={selectedCastId} />}
    </div>
  );
};

export default CastPage;
