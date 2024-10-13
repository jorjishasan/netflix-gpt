import { useRef, useEffect, useState } from "react";
import MovieCard from "./MovieCard";

const MovieList = ({ title, movies }) => {
  const scrollContainerRef = useRef(null);
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const container = scrollContainerRef.current;
      const scrollWidth = container.scrollWidth - container.clientWidth;
      const scrolled = container.scrollLeft;
      setScrollProgress((scrolled / scrollWidth) * 100);
    };

    const container = scrollContainerRef.current;
    container.addEventListener("scroll", handleScroll);
    return () => container.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="px-6 text-white">
      <h1 className="py-4 text-lg md:text-3xl">{title}</h1>
      <div
        ref={scrollContainerRef}
        className="scrollbar-hide flex overflow-x-scroll"
        style={{
          scrollbarWidth: "none",
          msOverflowStyle: "none",
        }}
      >
        <div className="flex gap-4 pb-4">
          {movies && movies.length > 0 ? (
            movies.map((movie) => <MovieCard key={movie.id} movie={movie} />)
          ) : (
            <p>No movies available</p>
          )}
        </div>
      </div>
      <div className="mt-2 flex justify-center">
        <div className="relative h-1 w-full max-w-[200px] overflow-hidden rounded-full bg-gray-700">
          <div
            className="absolute h-full bg-red-600 transition-all duration-300 ease-out"
            style={{ width: `${scrollProgress}%` }}
          ></div>
        </div>
      </div>
    </div>
  );
};

export default MovieList;
