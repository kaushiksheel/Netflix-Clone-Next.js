
import {ReactNode} from 'react';
import { Slide } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css';
import {ChevronLeftIcon,ChevronRightIcon} from '@heroicons/react/24/solid';
import * as Carousel from '../config/carousel'


interface PropsI{
    children:ReactNode
}

export const Slider=({children}:PropsI)=>{




const properties = {
    prevArrow: <button style={{ ...Carousel.buttonStyle }}><ChevronLeftIcon color='white' width={20} height={20}/></button>,
    nextArrow: <button style={{ ...Carousel.buttonStyle }}><ChevronRightIcon color='white' width={20} height={20}/></button>
}







    return (
      <Slide {...properties} slidesToScroll={5} slidesToShow={5} indicators={false} autoplay={false} responsive={Carousel.responsiveSettings}>
      {children}
  </Slide>
    )
}