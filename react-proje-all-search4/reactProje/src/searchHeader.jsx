import React, { useState } from "react";
import { Link } from 'react-router-dom'; // Import Link from react-router-dom
import './searchHeader.css';

function SearchHeader() {
    const [valueInput, setValue] = useState('');

    const handleChange = (event) => {
        setValue(event.target.value);
    }

    return (
        <div className="container-image">
            <div className="background-image"></div>
            <div className="container">
                <form className="container-search">
                    <input value={valueInput} onChange={handleChange} type="text" placeholder="Search for a movie, person or genre" />
                    <Link to={`/SearchResults?query=${valueInput}`} className="button1">Search</Link>
                </form>
            </div>
        </div>

    );
}

export default SearchHeader;
