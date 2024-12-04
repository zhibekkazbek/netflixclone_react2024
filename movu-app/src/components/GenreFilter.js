import React from "react";
import "./GenreFilter.css"; // Import the CSS file

const GenreFilter = ({ genres = [], selectedGenre, onChange }) => {
    return (
        <div className="genre-filter-container">
            <label htmlFor="genre-select" className="genre-filter-label">
                Filter by Genre:
            </label>
            <select
                id="genre-select"
                value={selectedGenre}
                onChange={(e) => onChange(e.target.value)}
                className="genre-filter-select"
            >
                <option value="">All</option>
                {genres.map((genre, index) => (
                    <option key={index} value={genre}>
                        {genre}
                    </option>
                ))}
            </select>
        </div>
    );
};

export default GenreFilter;
