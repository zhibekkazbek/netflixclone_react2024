import { React, useState, useEffect } from "react";
import Navbar from "../components/Navbar";
import { moviesList } from "../movieList";
import './HomePage.css'
// eslint-disable-next-line
import promo from '../assets/montecristo.png'
import SearchBar from "../components/SearchBar";
import Category from "../components/Category";
// eslint-disable-next-line
import { Link } from 'react-router-dom';
import withLoader from '../components/Loader'
/*import RunningLine from '../components/run-line.js';*/

const CategoryWithLoader = withLoader(Category);

const MoviesPage = () => {
    const [isLoading, setIsLoading] = useState(true);

    // Имитация загрузки данных
    useEffect(() => {
      setTimeout(() => {
        setIsLoading(false);
      }, 2000); // Загрузка длится 2 секунды
    }, []);

    const [filteredMovies, setFilteredMovies] = useState(moviesList);

    const handleSearch = (query) => {
        const searchQuery = query.toLowerCase();
        const filtered = moviesList.filter(
          (movie) =>
            movie.title.toLowerCase().includes(searchQuery)
        );
        setFilteredMovies(filtered);
    };
   return(
    <div className="home">
        <Navbar/>

        <div className="home-wrapper">
            <SearchBar onSearch={handleSearch} />
            <CategoryWithLoader isLoading={isLoading} category="" movies={filteredMovies} type="movie" />
        </div>
    </div>
   )
}

export default MoviesPage;