import MovieCard from "./MovieCard";

const MovieList = ({ title, movies }) => {
  return (
    <div className="px-6 text-white">
      <h1 className="py-4 text-lg md:text-3xl">{title}</h1>
      <div className="flex overflow-x-scroll">
        <div className="flex gap-2">
          {movies.length &&
            movies.map((movie) => <MovieCard key={movie.id} movie={movie} />)}
        </div>
      </div>
    </div>
  );
};
export default MovieList;
