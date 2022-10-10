import Carousel from "react-multi-carousel";
import {ReactNode} from 'react';
import "react-multi-carousel/lib/styles.css";

interface PropsI{
    children:ReactNode
}

export const Slider=({children}:PropsI)=>{
    const responsive = {
        superLargeDesktop: {
          // the naming can be any, depends on you.
          breakpoint: { max: 4000, min: 3000 },
          items: 5,
        },
        desktop: {
          breakpoint: { max: 3000, min: 1024 },
          items: 3,
        },
        tablet: {
          breakpoint: { max: 1024, min: 464 },
          items: 1,
        },
        mobile: {
          breakpoint: { max: 464, min: 0 },
          items: 1,
        },
      };
    return (
<Carousel
      additionalTransfrom={0}
      arrows
      autoPlaySpeed={3000}
      centerMode={true}
      
      containerClass="container"
      dotListClass=""
      // draggable
      focusOnSelect={false}
      infinite={true}
      itemClass=""
      keyBoardControl
      minimumTouchDrag={80}
      pauseOnHover
      renderArrowsWhenDisabled={false}
      renderButtonGroupOutside={false}
      renderDotsOutside={false}
      responsive={responsive}
      rewind={false}
      rewindWithAnimation={false}
      rtl={false}
      shouldResetAutoplay
      showDots={false}
      sliderClass=""
      slidesToSlide={1}
      swipeable
   
    >
     {children}
    </Carousel>
    )
}