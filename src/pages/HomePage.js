import React, { useState } from "react";
import SearchBar from "../components/SearchBar";
import Navbar from "../components/Navbar";
import { moviesList } from "../movieList";

const HomePage = () => {
    const [searchTerm, setSearchTerm] = useState("");

    const filteredMovies = moviesList.filter((movie) =>
        movie.title.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return (
        <div>
            <Navbar />
            <SearchBar value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)} />
            <ul>
                {filteredMovies.map((movie) => (
                    <li key={movie.id}>{movie.title}</li>
                ))}
            </ul>
        </div>
    );
};

export default HomePage;
