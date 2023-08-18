import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import ImageList from './component/ImageList';
import searchImages from './api';
import SearchHeader from './searchHeader'; // Import the SearchHeader component
import Navbar from './component/Navbar';
import TMDBInfo from './component/TMDBInfo';
import FooterBottom from './component/FooterBottom';
import Footer from './component/Footer';

function SearchResults() {
    const location = useLocation();
    const [images, setImages] = useState([]);
    const query = new URLSearchParams(location.search).get('query');

    useEffect(() => {
        if (query) {
            searchImages(query)
                .then(data => setImages(data))
                .catch(error => console.error('Error searching movies:', error));
        }
    }, [query]);

    const handleSearch = async (term) => {
        try {
            const searchData = await searchImages(term);
            setImages(searchData);
        } catch (error) {
            console.error('Error searching movies:', error);
        }
    };

    return (
        <div>
            <Navbar />
            <SearchHeader search={handleSearch} /> {/* Include the SearchHeader */}
            <ImageList imagesPlaceholder={images} />
            <Footer/>
            <FooterBottom/>
        </div>
    );
}

export default SearchResults;
