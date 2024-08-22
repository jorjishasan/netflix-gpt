import React from "react";

const VideoTitle = ({ title, description }) => {
  return (
    <div className="absolute left-0 top-0 aspect-video w-screen bg-gradient-to-r from-black px-24 pt-[15%] text-white">
      <h1 className="text-4xl font-bold">{title}</h1>
      <p className="w-1/2 py-6 text-lg">{description}</p>

      <div className="text-white">
        <button className="mr-3 rounded-md bg-red-600 px-10 py-3 font-semibold">
          ▶️ Play
        </button>
        <button className="rounded-md bg-gray-800/80 px-10 py-3 font-semibold">
          More Info
        </button>
      </div>
    </div>
  );
};

export default VideoTitle;
