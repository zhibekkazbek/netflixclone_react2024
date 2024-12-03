import { React, useState, useEffect } from "react";
import Navbar from "../components/Navbar";
import './HomePage.css';
import promo from '../assets/montecristo.png'; // eslint-disable-line
import SearchBar from "../components/SearchBar";
import Category from "../components/Category";
import { Link } from 'react-router-dom'; // eslint-disable-line
import withLoader from '../components/Loader';
import { getTVShows } from "../service/tvShowService";

const CategoryWithLoader = withLoader(Category);

const TVShowsPage = () => {
    const [isLoading, setIsLoading] = useState(true);
    const [tvShowsList, setTvShowsList] = useState([]);
    const [filteredTvShows, setFilteredTvShows] = useState([]);

    useEffect(() => {
        const fetchPosts = async () => {
            const tvshows = await getTVShows();
            setTvShowsList(tvshows);
            setFilteredTvShows(tvshows); // Синхронизируем `filteredMovies` после загрузки
            setIsLoading(false);
        };
        fetchPosts();
    }, []); // Выполняем только один раз при монтировании

    const handleSearch = (query) => {
        const searchQuery = query.toLowerCase();
        const filtered = tvShowsList.filter((movie) =>
            movie.title.toLowerCase().includes(searchQuery)
        );
        setFilteredTvShows(filtered);
    };

    return (
        <div className="home">
            <Navbar />
            <div className="home-wrapper">
                <SearchBar onSearch={handleSearch} />
                <CategoryWithLoader
                    isLoading={isLoading}
                    category=""
                    movies={filteredTvShows}
                    type="tvshows"
                />
            </div>
        </div>
    );
};

export default TVShowsPage;
