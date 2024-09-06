import React from "react";
import GptSearchBar from "./GptSearchBar";
import { BG_URL } from "../utils/constants";

const GptSearch = () => {
  return (
    <div>
      <div className="absolute -z-20">
        <img src={BG_URL} alt="background" />
      </div>
      <GptSearchBar />
    </div>
  );
};

export default GptSearch;
