import React from "react";
import { useParams } from "react-router-dom";
import { moviesList } from "../movieList";
import Navbar from "../components/Navbar";


const MovieDetail = () => {
    const { id } = useParams();  // Get movie id from URL
    const movie = moviesList.find((movie) => movie.id === parseInt(id)); // Find the movie by id
  
    if (!movie) {
      return <p>Movie not found</p>;
    }
  
    return (
    <div className="home">
        <Navbar/>

        <div className="home-wrapper">
            <div className="movie-detail">
                <h1>{movie.title}</h1>
                <p>Rating: {movie.rating}</p>
                <p>Release Year: {movie.releaseYear}</p>
                {/* Add more details as needed */}
            </div>
        </div>
    </div>
    );
  };
  
  export default MovieDetail;