import React, { useState, useEffect } from 'react';
import { fetchSeriesDetails, searchSeries } from '../seriesApi';
import SeriesItem from './SeriesItem';
import Navbar from './Navbar';
import './SeriesList.css';
const SeriesList = () => {
  const [seriesList, setSeriesList] = useState([]);

  useEffect(() => {
    const fetchSeries = async () => {
      try {
        const results = await searchSeries("");
        setSeriesList(results);
      } catch (error) {
        console.error('Error fetching series:', error);
      }
    };

    fetchSeries();
  }, []);

  return (
    <div>
      <Navbar />
      <div  className='container' >
        <div className='card4'>
          <h1 className="titleh1">List of TV Series</h1>
          
          <div  className="series-list">
          {seriesList.map((series) => (
            <SeriesItem key={series.id} series={series} />
          ))}
          </div>

        </div>
      </div>
    </div>
  );
};

export default SeriesList;
