import React, { useState } from 'react';
import ImgItem from './ImgItem';
import 'bootstrap/dist/css/bootstrap.css';
import './ImgList.css';

function ImgSavedList({ imagesPlaceholder }) {
  const [showMore, setShowMore] = useState(false);
  const initialMoviesToShow = 6;
  const moviesToShow = showMore ? imagesPlaceholder : imagesPlaceholder.slice(0, initialMoviesToShow);

  const handleShowMore = () => {
    setShowMore(true);
  };

  const handleShowLess = () => {
    setShowMore(false);
  };

  return (
    <div className="container">
      <div className="row">
        <div className="col-md-6">
          <h1 className='H1' style={{marginLeft:'-2%', marginBottom:'3%'}}>Listem</h1>
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
            <ImgItem image={image} />
          </div>
        ))}
      </div>
    </div>
  );
}

export default ImgSavedList;
