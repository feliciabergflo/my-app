import React, { useState, useRef, useEffect } from "react";
import Movie from "./Movie";

export default function MovieList() {

    function deleteMovie(id) {
        setMovies(movies.filter((item) => item.id !== id));
    }

    function alfaOrder() {
        alert("alfa");
    }

    function gradeOrder() {
        alert("grade");
    }

    return (
        <div>
            <ul id="movies" className="list-group">
                { movies.map(movie => <Movie key={movie.id} item={movie} deleteMovie={deleteMovie} />)}
            </ul>

            <button type="button" class="btn btn-primary" onClick={alfaOrder}>Alfabetisk ordning</button>
            <button type="button" class="btn btn-primary" onClick={gradeOrder}>Betygsordning</button>
        </div>
    )
}