import React from 'react'
import { MovieI } from '../interfaces/MovieI'
import { Container } from './Container'
import { Movie } from './Movie'
import { Slider } from './Slider'

interface PropsI{
    title:string;
    movie:MovieI[];
    openModal:(showModal:boolean)=>void;
    setSelectedMovieId:(selectedMovieId:number)=>void

}

export const Row = ({title,movie,openModal,  setSelectedMovieId}:PropsI) => {
  return (
    <div className='mb-[3.4rem]'>
      <Container>
      <h3 className='text-white text-[1.8rem] font-bold mb-7'>{title}</h3>
      </Container>
        <Slider >
      {movie?.map((item) => (
        <Movie key={item.id} item={item} openModal={openModal}   setSelectedMovieId={  setSelectedMovieId}/>
      ))}
    </Slider>
    </div>
  )
}
