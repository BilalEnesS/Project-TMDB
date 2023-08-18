import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';

const ActorDetailPage = () => {
  const { actorId } = useParams(); // URL'den oyuncu ID'sini alıyoruz
  const [actorDetails, setActorDetails] = useState(null);

  useEffect(() => {
    const fetchActorDetails = async () => {
      try {
        const response = await axios.get(
          `https://api.themoviedb.org/3/person/${actorId}`,
          {
            headers: {
              Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI4ZDNkNTZiMTc3NzdkZGJiYTQ5ZmJmY2FlOTIyZDY5MiIsInN1YiI6IjY0Y2MwOTc5NDNjZDU0MDBmZjlhZWI2YyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.lzA_0UFhzTnai0X3XjI421DDmYNYZxouByAgygaoOxQ', // Burada kendi API anahtarınızı eklemelisiniz
            },
          }
        );

        setActorDetails(response.data);
      } catch (error) {
        console.error('Error fetching actor details:', error);
      }
    };

    fetchActorDetails();
  }, [actorId]);

  if (!actorDetails) {
    return <div>Loading...</div>;
  }

  // Oyuncu detay bilgilerini görüntülemek için JSX döndürebilirsiniz
  return (
    <div>
      <h2>{actorDetails.name}</h2>
      <img src={`https://image.tmdb.org/t/p/w500/${actorDetails.profile_path}`} alt={actorDetails.name} />
      {/* Diğer oyuncu detay bilgilerini burada görüntüleyebilirsiniz */}
    </div>
  );
};

export default ActorDetailPage;
