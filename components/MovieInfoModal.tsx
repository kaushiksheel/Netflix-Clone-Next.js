import React, { useEffect, useState } from "react";
import { CastInfoI, MovieInfoI } from "../interfaces/MovieI";
import { request } from "../api/request";
import { IMAGE_LINK } from "../constants";
import Image from "next/image";
import { XCircleIcon } from "@heroicons/react/24/outline";

interface PropsI {
  closeModal: (showModal: boolean) => void;
  movieId: number;
  setSelectedMovieId: (movieId: number) => void;
}

export const MovieInfoModal = ({
  closeModal,
  movieId,
  setSelectedMovieId,
}: PropsI) => {
  const [movie, setMovie] = useState<MovieInfoI>();
  const [cast, setCast] = useState<CastInfoI[]>([]);



  useEffect(() => {
    const fetchMovie = async () => {
      const { data } = await request.get(
        `/movie/${movieId}?api_key=${process.env.NEXT_PUBLIC_API_KEY}&language=en-US`
      );
      setMovie(data as MovieInfoI);
      console.log(movie)
    };
    const fetchCast = async () => {
      const { data } = await request.get(
        `/movie/${movieId}/credits?api_key=${process.env.NEXT_PUBLIC_API_KEY}&language=en-US`
      );
      setCast(data.cast.slice(0, 10) as CastInfoI[]);
    };
    fetchMovie();
    fetchCast();
  }, [movieId,movie]);

  return (
    <div className="transition-all grid place-content-center w-[100vw] min-h-[100vh] bg-overlay fixed top-0 z-[9329999999999] ">
      <div className="w-[400px] md:w-[550px] h-fit bg-[black] rounded-md relative">
        <Image
          src={IMAGE_LINK + movie?.backdrop_path}
          alt={`${movie?.title} thumbnail`}
          className="w-[400px]"
          width={550}
          height={180}
          objectFit="cover"
        />

        <button
          className="top-5 right-5 absolute"
          onClick={() => {
            closeModal(false);
            setSelectedMovieId(0);
          }}
        >
          <XCircleIcon className="w-10 h-10 text-white" />
        </button>
        <div className="p-4">
          <h3 className="text-white font-bold text-[2rem]">{movie?.title}</h3>
          <p className="text-white text-[1.4rem] mt-2">{movie?.overview}</p>
          <p
            className="my-[2rem]
           text-white text-[2.3rem]  font-bold"
          >
            Cast
          </p>
          <div className="flex flex-wrap gap-5 justify-center">
            {cast?.map((item) => (
              <div key={item.id} className="grid place-items-center">
                <Image
                  src={IMAGE_LINK + item?.profile_path}
                  alt={item?.name + "thumbnail"}
                  width={50}
                  height={50}
                  objectFit="cover"
                  className="rounded-full"
                />
                <p className="text-white text-[1.3rem] mt-3">{item?.name}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
