import React from 'react';
import './CardItem.css'; // Stil dosyanızı buraya eklemeyi unutmayın
import CastCard from './CastCard.jsx'; // Oyuncu kartı bileşenini içe aktarıyoruz

const CardItem = () => {
    const topCastData = [
        { name: 'Marcos Ruiz', character: 'Nacho', episodes: '45 episodes', image: 'img/image7.png' },
        // Diğer oyuncuların verilerini burada ekleyin
    ];

    return (
        <div className="container">
            <div className="row">
                <div className="col-md-6">
                    <h1 style={{ marginLeft: '2%' }}>Top Cast</h1>
                </div>
                <div className="col-md-6 d-flex justify-content-end">
                    <button className="btn btn-light" style={{ marginRight: '2%', width: '69px', height: '38px', textAlign: 'center' }}>More</button>
                </div>
            </div>
            <div className="top-cast">
                {topCastData.map((cast, index) => (
                    <CastCard key={index} data={cast} />
                ))}
            </div>
        </div>
    );
}

export default CardItem;
