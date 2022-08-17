import React, { useState, useRef } from "react";
import Movie from "./Movie";

export default function AddMovieForm() {

    const [movies, setMovies] = useState([{
        id: 1,
        title: "Titanic",
    }]);
    const inputRef = useRef();


    function saveMovie() {
        const newId = movies.length > 0 ? movies[movies.length - 1].id + 1 : 1;
        setMovies([...movies, {
            id: newId,
            title: inputRef.current.value,
        }])

        inputRef.current.value = "";
    }

    function deleteMovie(id) {
        setMovies(movies.filter((item) => item.id !== id));
    }

    return (
        <div>
            <h3>Lägg till en film</h3>
            <hr />
            <form>
                <div className="form-group my-2">
                    <label for="formTitle">Titel:</label>
                    <input type="text" ref={inputRef} className="form-control" id="formTitle" placeholder="Titel här..."></input>
                </div>

                <div className="form-group my-2">
                    <label for="formGrade">Betyg:</label>
                    <select class="form-control" id="formGrade">
                        <option>1</option>
                        <option>2</option>
                        <option>3</option>
                        <option>4</option>
                        <option>5</option> 
                    </select>
                </div>

                <button type="submit" className="btn btn-success mt-2" onClick={saveMovie}>Spara film</button>
            </form>
            <h2 className="mt-5">Tillagda filmer</h2>
            <ul clasName="list-group">
                {movies.map(movie => <Movie key={movie.id} item={movie} deleteMovie={deleteMovie} />)}
            </ul>
            <button type="button" className="btn btn-primary mx-1">Alfabetisk ordning</button>
            <button type="button" className="btn btn-primary mx-1">Betygsordning</button>

        </div>
    )
}

