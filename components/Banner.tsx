import { InformationCircleIcon, PlayIcon } from '@heroicons/react/24/solid';
import Image from 'next/image';
import React from 'react'
import { Container } from './Container';
import {MovieI} from '../interfaces/MovieI'
import { IMAGE_LINK } from '../constants';

interface IProps{
    poster?:MovieI,
    setTvShow:(tvShow:boolean)=>void,
    setMovieId:(id:number)=>void,
    setShowVideoModal:(videoModal:boolean)=>void,

}


export const Banner = ({poster,setTvShow,setMovieId,setShowVideoModal}:IProps) => {
  return (
<>
<div className="absolute top-0 left-0 -z-10 h-[95vh] w-screen">
        <Image
          layout="fill"
          src={IMAGE_LINK+poster?.backdrop_path}
          objectFit="cover"
          alt={`${poster?.name} poster`}
          priority
          
        />
        </div>
        <Container>
          <div className="hero-wrap  h-full max-w-[50%] inline-block mt-[23rem]">
            <h1 className="text-white font-bold text-[3rem] md:text-[4rem]">
              {poster?.name || poster?.original_name}
            </h1>
            <p
              className="text-white
            text-[1.5rem] md:text-[1.7rem]"
            >
              {poster?.overview.substring(0, 250) + "..."}
            </p>
          </div>
          <div className="mt-6 flex items-center gap-7">
            <button
              onClick={() => {
                setTvShow(true);
                setMovieId(poster?.id as number);
                setShowVideoModal(true);
              }}
              className="bg-white flex w-fit gap-2 items-center  text-[1.5rem] md:text-[2rem] p-3 px-[1.5rem] rounded-lg"
            >
              <PlayIcon
                className="
              w-[1.5rem] h-[1.5rem]
              md:w-[2rem] md:h-[2rem]"
              />{" "}
              Play
            </button>
            <button className="bg-overlay flex w-fit gap-2 items-center md:text-[2rem] p-3 px-[1.5rem] rounded-lg text-[1.5rem] text-white">
              <InformationCircleIcon
                className="
              w-[1.5rem] h-[1.5rem]
              md:w-[2rem] md:h-[2rem] "
              />
              More Info
            </button>
          </div>
        </Container>
</>
  )
}
