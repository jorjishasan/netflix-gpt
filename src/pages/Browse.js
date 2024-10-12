import { useSelector } from "react-redux";
import GptSearch from "../components/NimSearchBar";
import MainContainer from "../components/MainContainer";
import SecondaryContainer from "../components/SecondaryContainer";
import useMoviesByCategory from "../hooks/useMoviesByCategory";

const Browse = () => {
  useMoviesByCategory("now_playing");
  useMoviesByCategory("popular");
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
