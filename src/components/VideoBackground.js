import { useSelector } from "react-redux";
import useMovieTrailer from "../hooks/useMovieTrailer";

const VideoBackground = ({ movieId }) => {
  const trailer = useSelector((store) => store.movies?.trailer);
  useMovieTrailer(movieId);

  return (
    <div>
      <iframe
        className="aspect-video w-screen"
        src={`https://www.youtube.com/embed/${trailer.key}?autoplay=1&mute=1`}
        title="Thank You | Deadpool &amp; Wolverine"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
      ></iframe>
    </div>
  );
};

export default VideoBackground;
