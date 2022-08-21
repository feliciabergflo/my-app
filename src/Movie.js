import React from "react";

export default function Movie(props) {

    return (
        <li className="list-group-item">
            { props.movie.title }
            <img src="images/delete.png" alt="Delete movie" className="delete-movie-icon" onClick={() => {props.deleteMovie(props.movie.id)}} />
        </li>
    )
}
