import React from "react";
import MovieApplication from "./components/MovieApplication";
import AddMovieForm from "./components/AddMovieForm";
import Movies from "./components/Movies";
import Movie from "./components/Movie";
import SaveMoviesButton from "./components/SaveMoviesButton";
import OrderByAlphaButton from "./components/OrderByAlphaButton";
import OrderByGradeButton from "./components/OrderByGradeButton";

function App() {
  return (
    <div class="container">
      <MovieApplication>
        <AddMovieForm />

        <Movies>
          <Movie />
          <Movie />
        </Movies>

        <SaveMoviesButton />
        <OrderByAlphaButton />
        <OrderByGradeButton />
      </MovieApplication>
    </div>
  );
}

export default App;
