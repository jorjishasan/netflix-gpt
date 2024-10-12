import React from "react";
import { useSelector } from "react-redux";
import MovieList from "./MovieList";
import useMoviesByCategory from "../hooks/useMoviesByCategory";
import MOVIE_CATEGORIES from "../config/movieCategory";

const setMovieDataByCategoryToStore = () => {
  MOVIE_CATEGORIES.forEach((category) => useMoviesByCategory(category));
};

const SecondaryContainer = () => {
  setMovieDataByCategoryToStore();

  const movies = useSelector((store) => store.movies);

  return (
    movies && (
      <div className="bg-black">
        <div className="relative z-40 -mt-40 pl-10">
          {MOVIE_CATEGORIES.map((category) => (
            <MovieList
              key={category}
              title={category}
              movies={movies[category]}
            />
          ))}
        </div>
      </div>
      // <div className="bg-black">
      //   <div className="relative z-40 -mt-40 pl-10">
      //     <MovieList title={"Now Playing"} movies={movies.nowPlayingMovies} />
      //     <MovieList title={"Popular"} movies={movies.popularMovies} />
      //     <MovieList title={"TV Series"} movies={movies.nowPlayingMovies} />
      //     <MovieList title={"Top Rated"} movies={movies.nowPlayingMovies} />
      //     <MovieList title={"Upcoming"} movies={movies.nowPlayingMovies} />
      //     <MovieList title={"Horror"} movies={movies.nowPlayingMovies} />
      //   </div>
    )
  );
};

export default SecondaryContainer;
