import React, { useEffect, useState } from 'react';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.css';
import './DetailItem.css';
import CastPage from './CastPage'; 
import photo from '../assets/play-circle-fill.png';

// Bu işlev belirli bir film ID'si üzerinden ekip (crew) bilgilerini çeker
const fetchCrewInfo = async (movieId) => {
const API_KEY = '79c51a2ee1ecd5ad9edbb3a779c4c767';
const [videos, setVideos] = useState([]);

  try {
    const response = await axios.get(
      `https://api.themoviedb.org/3/movie/${movieId}/credits`,
      {
        headers: {
          Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI4ZDNkNTZiMTc3NzdkZGJiYTQ5ZmJmY2FlOTIyZDY5MiIsInN1YiI6IjY0Y2MwOTc5NDNjZDU0MDBmZjlhZWI2YyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.lzA_0UFhzTnai0X3XjI421DDmYNYZxouByAgygaoOxQ',
        },
      }
    );

    // Ekip verileri response.data.crew içerisindedir
    return response.data.crew;
  } catch (error) {
    console.error('Error fetching crew info:', error);
    return null;
  }
};

const DetailItem = ({ movie }) => {
  const [crewInfo, setCrewInfo] = useState([]);

  useEffect(() => {
    // Belirli bir film ID'si üzerinden ekip bilgilerini çek
    const fetchCrewInfo = async () => {
      if (!movie) return;

      try {
        // Önce belirli bir film için ekip bilgilerini al
        const response = await axios.get(
          `https://api.themoviedb.org/3/movie/${movie.id}/credits`,
          {
            headers: {
              Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI4ZDNkNTZiMTc3NzdkZGJiYTQ5ZmJmY2FlOTIyZDY5MiIsInN1YiI6IjY0Y2MwOTc5NDNjZDU0MDBmZjlhZWI2YyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.lzA_0UFhzTnai0X3XjI421DDmYNYZxouByAgygaoOxQ',
            },
          }
        );

        // Ekip verileri response.data.crew içerisindedir
        const crewData = response.data.crew.slice(0, 9);
        
        // Eğer ekip bilgisi varsa state'i güncelle
        if (crewData.length > 0) {
          setCrewInfo(crewData);
        } else {
          // Eğer ekip bilgisi yoksa bilgilendirici bir mesaj göster
          setCrewInfo([]);
        }
      } catch (error) {
        console.error('Error fetching crew info:', error);
      }
    };

    fetchCrewInfo();
  

  fetchCrewInfo();
}, [movie]);


if (!movie) {
  return <div>Loading...</div>;
}


  return (

    <div className="container-fluid" style={{padding:'0', margin:'0'}}>
      <div className='container-image-details'>
        <div className='background-image-details' style={{backgroundImage: `url(https://image.tmdb.org/t/p/original/${movie.poster_path})`,backgroundSize: 'cover', backgroundRepeat: 'no-repeat', backgroundPosition: 'center', }}>
            <div className='black'>
            <div className='container-details'>
                <div className='card-container-details'>
                    <div className='card-details'>
                        <img className="" src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`} />
                        <div className="card-body2">
                          <div className="row">
                            <div className="col-4" style={{ display: 'flex', justifyContent: 'end', alignItems: 'center', padding: 0 }}>
                              <img  src={photo} alt="" style={{ height: '32px', width: '32px', marginLeft: '20%', marginTop: '5px' }} />
                            </div>
                            <div className="col-8" style={{ display: 'flex', justifyContent: 'left', alignItems: 'center', padding: 0 }}>
                              <div className="cast-details">
                                <p style={{
                                  margin: 0,
                                  color: '#000',
                                  fontFamily: 'Inter, sans-serif',
                                  fontSize: '18px',
                                  fontStyle: 'normal',
                                  fontWeight: 400,
                                  lineHeight: '120%'
                                }}>Now Streaming</p>
                                <p style={{
                                  margin: 0,
                                  color: '#000',
                                  fontFamily: 'Inter, sans-serif',
                                  fontSize: '12px',
                                  fontStyle: 'normal',
                                  fontWeight: 400,
                                  lineHeight: '120%'
                                }}>Watch Now</p>
                              </div>
                            </div>
                          </div>
                        </div>
                    </div>
                </div>
                <div className='right-container-details'>
                    <h1>{movie.title}</h1>
                    <div className="p1">
                        <p>{movie.release_date} (ES) </p>
                        {movie.genres.map((genre) => (
                        <p
                        key={genre.id}
                        style={{ display: 'inline', marginRight: '5px', marginTop: '-15px' }}
                        >
                        {genre.name}
                        </p>
                    ))}
                        <p style={{ marginTop: '-15px' }}>{movie.duration}</p>
                    </div>
                    <div className="p2">
                        <h4>Overview</h4>
                        <p>{movie.overview}</p>
                    </div>
                    <div className="row">
                    <div className="col-md-4">
                      <div className="director-info">
                        {crewInfo.slice(0, Math.ceil(crewInfo.length / 3)).map((crew, index) => (
                          <div key={index}>
                            <p className='name'>{crew.name}</p>
                            <p className='job'>{crew.job}</p>
                          </div>
                        ))}
                      </div>
                    </div>
                    <div className="col-md-4">
                      <div className="director-info">
                        
                        {crewInfo.slice(Math.ceil(crewInfo.length / 3), 2 * Math.ceil(crewInfo.length / 3)).map((crew, index) => (
                          <div key={index}>
                            <p className='name'>{crew.name}</p>
                            <p className='job'>{crew.job}</p>
                          </div>
                        ))}
                      </div>
                    </div>
                    <div className="col-md-4">
                      <div className="director-info">
                        
                        {crewInfo.slice(2 * Math.ceil(crewInfo.length / 3)).map((crew, index) => (
                          <div key={index}>
                            <p className='name'>{crew.name}</p>
                            <p className='job'>{crew.job}</p>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>

                </div>

            </div>
           
            </div>
        </div>
        </div>
    </div>
  );
}

export default DetailItem;