import React, { useState, useRef, useEffect } from 'react';
import Movie from "./Movie";

export default function MovieList() {

    const [movies, setMovies] = useState([{
        id: 1,
        title: "Titanic",
        grade: 2
        }
    ]);
    const [sortType, setSortType] = useState();

    useEffect(() => {
        const sortArray = type => {
            const types = {
                title: "title",
                grade: "grade"
            };
            const sortProperty = types[type];
            if (sortProperty == "title") {
                const sorted = [...movies].sort((a, b) => a.title.localeCompare(b.title));
                setMovies(sorted);
            } else if (sortProperty == "grade") {
                const sorted = [...movies].sort((a, b) => b.grade - a.grade);
                setMovies(sorted);
            }
        };

        sortArray(sortType);
    }, [sortType]);

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
        setMovies(movies.filter((movie) => movie.id !== id));
    }

    return (
        <div className="container">
            <h1>Min filmlista</h1>
            <form id="add-movie-form">
                <fieldset>
                    <legend>Lägg till en film</legend>
      
                    <div className="form-group">
                        <label for="title-field">Titel:</label>
                        <input type="text" ref={titleRef} id="title-field" className="form-control" />
                    </div>
                
                    <div className="form-group">
                        <label for="rating-field">Betyg:</label>
                        <select type="text" ref={gradeRef} id="rating-field" className="form-control">
                            <option value="0">Välj betyg här...</option>
                            <option value="1">1</option>
                            <option value="2">2</option>
                            <option value="3">3</option>
                            <option value="4">4</option>
                            <option value="5">5</option>
                        </select>
                    </div>
      
                    <div className="form-group mt-2">
                        <input type="submit" onClick={saveMovie} className="btn btn-success mt-3" value="Spara film" />
                    </div>
                </fieldset>
            </form>
                
            <hr />
                
            <h2>Filmer</h2>
            <ul className="list-group" id="movie-list">
                {movies.map(movie => <Movie key={movies.id} movie={movie} deleteMovie={deleteMovie} />)}
            </ul>

            <button className="btn btn-primary m-1" onClick={() => setSortType("title")}>Alfabetisk ordning</button>
            <button className="btn btn-primary m-1" onClick={() => setSortType("grade")}>Betygsordning</button>
        </div>
    )
}


  
  
  