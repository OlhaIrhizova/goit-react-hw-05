import { useEffect, useState } from "react";
import { fetchTrendingMovies } from "../../services/api";
import MovieList from "../../components/movieList/MovieList";
import css from "./HomePage.module.css"

const HomePage = () => {

    const [movies, setMovies]= useState([]);

    useEffect(() => {
        fetchTrendingMovies().then(setMovies);
      }, []);
    
    return (
        <div className={css.homePage}> 
            <h1 className={css.homeTitle}>Trending Movies</h1>
            <MovieList movies={movies} />

        </div>
    )
}
 export default HomePage;