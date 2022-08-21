import React, { Component } from "react"
import Movie from "./Movie";

export default function MovieList(props) {

    function deleteMovie(id) {
        alert("poop");
      }

    return (
        <ul className="list-group">
            {this.props.dataToMovielist.map(movie => <Movie key={this.props.dataToMovielist[0]} movie={movie} deleteMovie={this.props.dataToMovielist} deleteMovie={deleteMovie} />)}
        </ul>
    )
}
