import React from 'react';
import ImgItem from './ImgItem';
import 'bootstrap/dist/css/bootstrap.css';
import './ImgList.css';

function ImageList({ imagesPlaceholder }) {
    const itemsPerRow = 6; // Number of items per row
    const totalResults = imagesPlaceholder.length; // Calculate the total number of results

    return (
        <div className="container">
            <div className="row" style={{marginBottom:'2%'}}>
                <div className="col-md-6">
                    <h1 className='SearchH1' style={{ marginLeft: '2%' }}>Search Results</h1>
                </div>
                <div className="col-md-6 d-flex justify-content-end">
                    <p className='records'>{totalResults} records </p>
                </div>
            </div>
            <div className="row image-list" style={{ display: 'flex', flexWrap: 'wrap', marginRight: '-20px' }}>
                {imagesPlaceholder.map((image) => (
                    <div className={`mb-2 col-md-${12 / itemsPerRow}`} style={{ border: 'none' }} key={image.id}>
                        <ImgItem image={image} />
                    </div>
                ))}
            </div>
        </div>
    );
}

export default ImageList;
