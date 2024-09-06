import React from "react";
import { useSelector } from "react-redux";
import MovieList from "./MovieList";

const SecondaryContainer = () => {
  const movies = useSelector((store) => store.movies);
  return (
    movies && (
      <div className="bg-black">
        <div className="relative z-40 -mt-40 pl-10">
          <MovieList title={"Now Playing"} movies={movies.nowPlayingMovies} />
          <MovieList title={"Popular"} movies={movies.popularMovies} />
          <MovieList title={"TV Series"} movies={movies.nowPlayingMovies} />
          <MovieList title={"Top Rated"} movies={movies.nowPlayingMovies} />
          <MovieList title={"Upcoming"} movies={movies.nowPlayingMovies} />
          <MovieList title={"Horror"} movies={movies.nowPlayingMovies} />
        </div>
        {/**
       MovieList -Popular
          MovieCart * n
       MovieList -Now Playing
       MovieList -Trending
       MovieList -Horror
        

       */}
      </div>
    )
  );
};

export default SecondaryContainer;
