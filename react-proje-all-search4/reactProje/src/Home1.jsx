import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import SearchHeader from './searchHeader';
import apiPopular from './apiPopular';
import ImgList from './component/ImgList';
import Navbar from './component/Navbar';
import Footer from './component/Footer';
import FooterBottom from './component/FooterBottom';
import 'bootstrap/dist/css/bootstrap.css';
import searchImages from './api';
import TMDBInfo from './component/TMDBInfo';

function Home1() {
    const [images, setImages] = useState([]); // Use useState to declare images state

    useEffect(() => {
        // Fetch popular movies when the component mounts
        const fetchPopularMovies = async () => {
            try {
                const data = await apiPopular();
                setImages(data);
            } catch (error) {
                console.error('Error fetching popular movies:', error);
            }
        };

        fetchPopularMovies();
    }, []);

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
            <SearchHeader search={handleSearch} />
            <TMDBInfo/>
            <ImgList imagesPlaceholder={images} />
            <Footer />
            <FooterBottom />
        </div>
    )
}

export default Home1;
