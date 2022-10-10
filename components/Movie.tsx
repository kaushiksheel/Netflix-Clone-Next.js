import { ChevronDownIcon, PlayIcon, PlusIcon } from "@heroicons/react/24/solid";
import Image from "next/image";
import React, { useContext } from "react";
import { IMAGE_LINK } from "../constants";
import { MovieContext } from "../context/MovieContext";
import { MovieContextI } from "../interfaces/ContextI";
import { MovieI } from "../interfaces/MovieI";

interface PropsI {
  item: MovieI;
  openModal: (showModal: boolean) => void;
  setSelectedMovieId:(selectedMovieId:number)=>void;
}

export const Movie = ({ item, openModal,  setSelectedMovieId }: PropsI) => {
  const {setShowVideoModal,setMovieId,setTvShow}=useContext<MovieContextI>(MovieContext)
  return (
    <div className="movie group mr-3 relative  cursor-pointer">
      <div className="w-full h-[14rem]">
        <Image
          src={`${IMAGE_LINK}${item.backdrop_path}`}
          layout="responsive"
          width={0}
          height={0}
          objectFit="cover"
          loading="lazy"
          className="rounded-md"
          alt='movie thumbnail'
        />
      </div>
      <div className="transition-all ease-in-out   group-hover:bottom-4 icons absolute -bottom-full left-4 flex items-center gap-3 z-50 bg-none">
        <div
        onClick={()=>{setShowVideoModal(true)
          setTvShow(false)
        setMovieId(item.id)
        }}
          className="w-[30px] h-[30px] 
        grid place-items-center cursor-pointer bg-white rounded-full"
        >
          <PlayIcon   className="w-[15px] h-[15px]" />
        </div>
        <div
          className="w-[30px] h-[30px] 
        grid place-items-center cursor-pointer bg-transparent border-2 border-white rounded-full"
        >
          <PlusIcon className="w-[15px] h-[15px] text-white " />
        </div>
        <div
          onClick={() => {openModal(true)
          setSelectedMovieId(item.id)
          }}
          className="w-[30px] h-[30px] 
        grid place-items-center cursor-pointer bg-transparent border-2 border-white rounded-full"
        >
          <ChevronDownIcon className="w-[15px] h-[15px] text-white " />
        </div>
      </div>
    </div>

    
  );
};
