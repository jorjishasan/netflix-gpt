import React from "react";
import lang from "../utils/languages";
import { useSelector } from "react-redux";

const GptSearchBar = () => {
  const currLanguage = useSelector((store) => store.lang.langSelected);
  console.log(currLanguage);
  return (
    <div className="flex justify-center pt-[35%] md:pt-[10%]">
      <form className="grid w-full grid-cols-12 bg-black md:w-1/2">
        <input
          type="text"
          className="col-span-9 m-4 p-4"
          placeholder={lang[currLanguage]?.searchBoxPlaceholder}
        />
        <button className="col-span-3 m-4 rounded-lg bg-red-700 px-4 py-2 text-white">
          {lang[currLanguage]?.search}
        </button>
      </form>
    </div>
  );
};

export default GptSearchBar;
