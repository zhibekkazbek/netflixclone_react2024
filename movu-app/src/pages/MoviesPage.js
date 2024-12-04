import { React, useState, useEffect } from "react";
import Navbar from "../components/Navbar";
import './HomePage.css';
// import promo from '../assets/montecristo.png'; // eslint-disable-line
import SearchBar from "../components/SearchBar";
import Category from "../components/Category";
// import { Link } from 'react-router-dom'; // eslint-disable-line
import withLoader from '../components/Loader';
import { getMovies } from "../service/movieService";
import GenreFilter from '../components/GenreFilter';

const CategoryWithLoader = withLoader(Category);

const MoviesPage = () => {
    const [isLoading, setIsLoading] = useState(true);
    const [moviesList, setMoviesList] = useState([]);
    const [filteredMovies, setFilteredMovies] = useState([]);
    // const [selectedGenre, setSelectedGenre] = useState('');
    const [searchQuery, setSearchQuery] = useState(""); // State for search query
    const [selectedGenre, setSelectedGenre] = useState(""); // State for genre filter
    const [genres, setGenres] = useState([]); 



    useEffect(() => {
        const fetchPosts = async () => {
            const movies = await getMovies();
            setMoviesList(movies);
            setFilteredMovies(movies); // Синхронизируем `filteredMovies` после загрузки
            setGenres(extractGenres(movies));
            setIsLoading(false);
        };
        fetchPosts();
    }, []); // Выполняем только один раз при монтировании


    const extractGenres = (movies) => {
        const allGenres = movies.flatMap((movie) => movie.genre); // Assuming movie.genre is an array
        return [...new Set(allGenres)]; // Remove duplicates
    };

    const handleSearch = (query) => {
        setSearchQuery(query.toLowerCase()); // Update search query state
        filterMovies(query.toLowerCase(), selectedGenre);
    };

    // Function to handle genre selection and update the state
    const handleGenreChange = (genre) => {
        setSelectedGenre(genre);
        filterMovies(searchQuery, genre); // Use the current searchQuery state
    };

    // Function to filter movies based on search query and genre
    const filterMovies = (query, genre) => {
        setFilteredMovies(
            moviesList.filter((movie) => {
                const matchesName = movie.title.toLowerCase().includes(query);
                const matchesGenre =
                    genre === '' ||
                    movie.genre.some((g) => g.toLowerCase() === genre.toLowerCase());
                return matchesName && matchesGenre;
            })
        );
    };


/*
    const handleSearch = (query) => {
        const searchQuery = query.toLowerCase();
        const filtered = moviesList.filter((movie) =>
            movie.title.toLowerCase().includes(searchQuery)
        );
        setFilteredMovies(filtered);
    }; 
*/
/*
    const handleSearch = (query) => {
        const searchQuery = query.toLowerCase();
        setFilteredMovies(
            moviesList.filter((movie) => {
                const matchesName = movie.title.toLowerCase().includes(searchQuery);
                const matchesGenre =
                    selectedGenre === '' ||
                    movie.genre.some((g) => g.toLowerCase() === selectedGenre.toLowerCase());
                return matchesName && matchesGenre;
            })
        );
    };

    const handleGenreChange = (genre) => {
        setSelectedGenre(genre);
        setFilteredMovies(
            moviesList.filter((movie) => {
                const matchesName = movie.title.toLowerCase().includes(query.toLowerCase());
                const matchesGenre =
                    genre === '' ||
                    movie.genre.some((g) => g.toLowerCase() === genre.toLowerCase());
                return matchesName && matchesGenre;
            })
        );
    };


    */

    return (
        <div className="home">
            <Navbar />
            <div className="home-wrapper">
                <SearchBar onSearch={handleSearch} />
                {/* <GenreFilter genres={getUniqueGenres(moviesList)} onFilterChange={handleGenreChange} /> */}
                {/* <GenreFilter onChange={handleGenreChange} selectedGenre={selectedGenre} /> */}
                <GenreFilter
                    genres={genres}
                    onChange={handleGenreChange}
                    selectedGenre={selectedGenre}
                />
                <CategoryWithLoader
                    isLoading={isLoading}
                    category=""
                    movies={filteredMovies}
                    type="movie"
                />
            </div>
        </div>
    );
};

// const getUniqueGenres = (movies) => {
//     const allGenres = movies.flatMap((movie) => movie.genre);
//     return [...new Set(allGenres)];
// };

export default MoviesPage;