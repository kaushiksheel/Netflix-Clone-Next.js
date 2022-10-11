import React, { useContext, useEffect, useState } from "react";
import { MovieVideoI } from "../interfaces/MovieI";
import { request } from "../api/request";

import { XCircleIcon } from "@heroicons/react/24/outline";
import ReactPlayer from "react-player/youtube";
import { MovieContextI } from "../interfaces/ContextI";
import { MovieContext } from "../context/MovieContext";

export const VideoModal = () => {
  const { setShowVideoModal, movieId ,tvShow} =
    useContext<MovieContextI>(MovieContext);
  const [movieVideoInfo, setMovieVideoInfo] = useState<MovieVideoI[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      const { data } = await request.get(
        tvShow?
          `/tv/${movieId}/videos?api_key=${process.env.NEXT_PUBLIC_API_KEY}&language=en-US`:
        `/movie/${movieId}/videos?api_key=${process.env.NEXT_PUBLIC_API_KEY}&language=en-US`
      );
     
      setMovieVideoInfo(data.results);
    };
    fetchData();
  }, [movieId,tvShow]);

  const videoKey = movieVideoInfo[0]?.key;

  return (
    <div className="grid place-content-center w-[100vw] min-h-[100vh] bg-overlay fixed top-0 z-[93299] ">
      <div className="">
      <div className=" md:w-full md:h-fit bg-[black] rounded-md relative ">
        <ReactPlayer
         width={900}
         height={500}
         onEnded={()=>setShowVideoModal(false)}
          playing
          url={`https://www.youtube.com/watch?v=${videoKey && videoKey}`}
          controls
       
        />
        <button
          className="top-5 right-5 absolute"
          onClick={() => {
            setShowVideoModal(false);
          }}
        >
          <XCircleIcon className="w-12 h-1w-12 text-white" />
        </button>
      </div>
      </div>
    </div>
  );
};
