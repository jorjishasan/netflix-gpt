import { useSelector } from "react-redux";
import GptSearch from "../components/GptSearch";
import MainContainer from "../components/MainContainer";
import SecondaryContainer from "../components/SecondaryContainer";
import useNowPlayingMovies from "../hooks/useNowPlayingMovies";
import usePopularMovies from "../hooks/usePopularMovies";

const Browse = () => {
  useNowPlayingMovies();
  usePopularMovies();
  const showGptComponent = useSelector((store) => store.gpt.showGptComponent);

  /* 
  Main Container
    - Video Background
    - Video title, short desc, action buttons
  Secondary Container
    - MovieList * n
      - cards * n
  
  */
  return showGptComponent ? (
    <GptSearch />
  ) : (
    <>
      <MainContainer />
      <SecondaryContainer />
    </>
  );
};

export default Browse;
