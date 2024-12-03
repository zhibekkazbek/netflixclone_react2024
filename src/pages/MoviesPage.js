
import React, { useState, useEffect } from "react";

const MoviesPage = () => {
    const [movies, setMovies] = useState([]);
    const [newMovie, setNewMovie] = useState("");

    useEffect(() => {
        // Fetch movies from mock API
        fetch("http://localhost:3000/movies")
            .then((response) => response.json())
            .then((data) => setMovies(data));
    }, []);

    const addMovie = () => {
        // Add a new movie to mock API
        fetch("http://localhost:3000/movies", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ title: newMovie }),
        })
            .then((response) => response.json())
            .then((movie) => setMovies([...movies, movie]));
    };

    const deleteMovie = (id) => {
        // Delete a movie from mock API
        fetch(`http://localhost:3000/movies/${id}`, {
            method: "DELETE",
        }).then(() => setMovies(movies.filter((movie) => movie.id !== id)));
    };

    return (
        <div>
            <h1>Movies</h1>
            <input
                type="text"
                placeholder="Add a movie"
                value={newMovie}
                onChange={(e) => setNewMovie(e.target.value)}
            />
            <button onClick={addMovie}>Add Movie</button>
            <ul>
                {movies.map((movie) => (
                    <li key={movie.id}>
                        {movie.title}
                        <button onClick={() => deleteMovie(movie.id)}>Delete</button>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default MoviesPage;