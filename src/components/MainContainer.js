import { useSelector } from "react-redux";
import VideoTitle from "./VideoTitle";
import VideoBackground from "./VideoBackground";

const MainContainer = () => {
  const movies = useSelector((store) => store.movies?.nowPlayingMovies);

  // Check if movies is defined and not empty
  if (!movies || movies.length === 0) return null;

  const mainMovie = movies[0];

  // Check if mainMovie is defined
  if (!mainMovie) return null;

  const { original_title, overview, id } = mainMovie;

  return (
    <div className="relative bg-black pt-[30%] md:pt-0">
      <VideoTitle title={original_title} description={overview} />
      <VideoBackground movieId={id} />
    </div>
  );
};
export default MainContainer;
