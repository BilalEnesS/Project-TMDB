import React, { useState, useEffect } from 'react';
import { fetchSeriesDetails } from '../seriesApi';
import './seriesItem.css';


const SeriesItem = ({ series }) => {
    const [seriesDetails, setSeriesDetails] = useState(null);

    useEffect(() => {
        const fetchDetails = async () => {
            try {
                const details = await fetchSeriesDetails(series.id);
                setSeriesDetails(details);
            } catch (error) {
                console.error('Error fetching series details:', error);
            }
        };

        fetchDetails();
    }, [series.id]);

    return (

        <div >
            <div className="card-container2">
                <div className='card2'>
                    <img className=''
                        src={`https://image.tmdb.org/t/p/w500/${series.poster_path}`}
                        alt={series.name}
                    />
                    <div className='card-body2'>
                        <h3>{series.name}</h3>
                        <p>{series.first_air_date}</p>
                        <p>{series.number_of_seasons}</p>
                        <p>{series.popularity}</p>
                        {seriesDetails && (
                            <div>
                                
                                <p>{seriesDetails.overview}</p>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SeriesItem;
