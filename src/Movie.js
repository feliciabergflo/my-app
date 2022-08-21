import React from "react";

export default function Movie(props) {

    const stars = numArray(props.movie.grade);

    function numArray(grade) {
        let stars = [];

        for (let i = 0; i < grade.valueOf(); i++) {
            stars.push(i);
        }
        return stars;
    }

    return (
        <li className="list-group-item">
            { props.movie.title }
            <img src="images/delete.png" alt="Delete movie" className="delete-movie-icon" onClick={() => {props.deleteMovie(props.movie.id)}} />
            { stars.map(movie => {
                return <img src='images/star.png' alt='Star' />;
            })}
        </li>
    )
}
