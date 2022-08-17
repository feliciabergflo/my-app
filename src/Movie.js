import React from "react";

export default function Movie(props) {

    const stars = numArray(props.item.grade);

    function numArray(grade) {
        let stars = [];

        for (let i = 0; i < grade.valueOf(); i++) {
            stars.push(i);
        }
        return stars;
    }

    return (
        <li className="list-group-item my-1">
            { props.item.title }
            <img src="images/delete.png" alt="Delete movie" onClick={() => {props.deleteMovie(props.item.id)}} class="delete-movie-icon" />
        
            { stars.map(item => {
                return <img src='images/star.png' alt='Star' />;
            })}
        </li>
    )
}
