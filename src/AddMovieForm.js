import React, { useState, useRef } from "react";
import Movie from "./Movie";

export default function AddMovieForm() {

    const [movies, setMovies] = useState([{
        id: 1,
        title: "Titanic",
        grade: 2
    }]);

    const titleRef = useRef();
    const gradeRef = useRef();

    function saveMovie(e) {
        e.preventDefault();

        if (titleRef.current.value == "") {
            alert("Du måste ange en titel för att kunna spara filmen");
            return false;
        } else if (gradeRef.current.value === "0") {
            alert("Du måste ange ett betyg för att kunna spara filmen");
            return false;
        } else {
            const newId = movies.length > 0 ? movies[movies.length - 1].id + 1 : 1;
        
            setMovies([...movies, {
                id: newId,
                title: titleRef.current.value,
                grade: gradeRef.current.value
            }]);
        };

        titleRef.current.value = "";
        gradeRef.current.value = "0";
    }

    function deleteMovie(id) {
        setMovies(movies.filter((item) => item.id !== id));
    }

    return (
        <div>
            <form id="add-movie-form">
            <fieldset>
                <legend>Lägg till en film</legend>

                <label for="title-field">Titel:</label>
                <input type="text" ref={titleRef} id="title-field" className="form-control" />
            
                <label for="rating-field">Betyg:</label>
                <select type="text" ref={gradeRef} id="rating-field" class="form-control">
                    <option value="0">Välj betyg här...</option>
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                    <option value="5">5</option>
                </select>

                <input type="submit" onClick={saveMovie} className="btn btn-success mt-3" value="Spara film" />
            </fieldset>
            </form>

            <hr />

            <h2>Filmer</h2>
            <ul id="movies" className="list-group">
                { movies.map(movie => <Movie key={movie.id} item={movie} deleteMovie={deleteMovie} />)}
            </ul>
        </div>
    )
}

