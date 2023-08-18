// CastDetail.jsx
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './CastDetail.css';

const CastDetail = ({ castId }) => {
  const [castDetails, setCastDetails] = useState(null);

  useEffect(() => {
    const fetchCastDetails = async () => {
      try {
        const response = await axios.get(
          `https://api.themoviedb.org/3/person/${castId}`,
          {
            headers: {
              Authorization:'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI4ZDNkNTZiMTc3NzdkZGJiYTQ5ZmJmY2FlOTIyZDY5MiIsInN1YiI6IjY0Y2MwOTc5NDNjZDU0MDBmZjlhZWI2YyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.lzA_0UFhzTnai0X3XjI421DDmYNYZxouByAgygaoOxQ'
            },
          }
        );

        setCastDetails(response.data);
      } catch (error) {
        console.error('Error fetching cast details:', error);
      }
    };

    fetchCastDetails();
  }, [castId]);

  return (
    <div className="cast-detail-container">
      {castDetails ? (
        <div>
          <img
            src={`https://image.tmdb.org/t/p/w500/${castDetails.profile_path}`}
            alt={castDetails.name}
            className="cast-detail-image"
          />
          <div className="cast-detail-info">
            <h2 className="cast-detail-name">{castDetails.name}</h2>
            <p className="cast-detail-birthday"><b style={{color:'#2e2c2c'}}>Birthday:</b> {castDetails.birthday}</p>
            <p className="cast-detail-birthplace"><b style={{color:'#2e2c2c'}}>Birthday Place:</b> {castDetails.place_of_birth}</p>
            <p className="cast-detail-biography"><b style={{color:'#2e2c2c'}} >Biography:</b> {castDetails.biography}</p>
          </div>
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default CastDetail;
