import React, { useState, useEffect } from 'react';
import ImgSavedList from '../component/ImgSavedList';
import apiPopular from '../apiPopular';
function SavedMovie() {
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
        <ImgSavedList imagesPlaceholder={images} />
    </div> );
}

export default SavedMovie;