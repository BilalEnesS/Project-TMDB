// ImageItem.js

import React from 'react';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom
import 'bootstrap/dist/css/bootstrap.css';
import Details from '/Details.jsx'

function ImageItem({ image }) {
  return (
    <div className='row'> 
        <div className='col'>
            <div className="card mb-3  h-100">
                {/* Wrap the image and details in a Link */}
                <Link to={`/Details/`} style={{ textDecoration: 'none', color: 'inherit' }}>
                    <img
                        className="image-fluid "
                        src={`https://image.tmdb.org/t/p/w500/${image.poster_path}`}
                        alt={image.title}
                    />
                    <div className='card-body'>
                         <h5 className="card-text">{image.title}</h5>
                    </div>
                    <div className='card-body'>
                         <h5 className="card-text">{image.description}</h5>
                    </div>
                </Link>
            </div>
        </div>
    </div>
  );
}

export default ImageItem;
