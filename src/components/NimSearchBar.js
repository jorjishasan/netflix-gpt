import React, { useRef } from "react";
import { useSelector } from "react-redux";
import useNimApi from "../hooks/useNimApi";
import lang from "../config/languages";

const NimSearchBar = () => {
  const currLanguage = useSelector((store) => store.lang.langSelected);
  const searchText = useRef(null);
  const { result, isLoading, error, fetchResponse } = useNimApi();

  const handleNimSearch = async (e) => {
    e.preventDefault();
    const userQuery = searchText.current.value;
    if (!userQuery.trim()) return;

    await fetchResponse(userQuery);
  };

  return (
    <div className="flex flex-col items-center px-4 pt-[10%]">
      <form className="flex w-full max-w-2xl" onSubmit={handleNimSearch}>
        <input
          type="text"
          className="flex-grow rounded-l-lg border p-4"
          placeholder={lang[currLanguage]?.searchBoxPlaceholder}
          ref={searchText}
        />
        <button
          className="rounded-r-lg bg-blue-600 px-6 py-2 text-white transition-colors hover:bg-blue-700"
          type="submit"
          disabled={isLoading}
        >
          {isLoading ? "Searching..." : lang[currLanguage]?.search}
        </button>
      </form>
      {error && (
        <div className="mt-4 w-full max-w-2xl rounded-lg bg-red-100 p-4 text-red-700">
          {error}
        </div>
      )}
      {result && (
        <div className="mt-8 w-full max-w-2xl rounded-lg bg-gray-100 p-4">
          <h2 className="mb-2 text-xl font-bold">Result:</h2>
          <p className="whitespace-pre-wrap">{result}</p>
        </div>
      )}
    </div>
  );
};

export default NimSearchBar;
