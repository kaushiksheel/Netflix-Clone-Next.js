import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/24/solid";

  const buttonStyle = {
    background: 'rgba(0,0,0,.7)',
    border: '0px',
    width:'fit-content',
    height:'fit-content',
    borderRadius:'100%',
    padding:7,
};

const properties = {
    prevArrow: <button style={{ ...buttonStyle }}><ChevronLeftIcon color='white' width={20} height={20}/></button>,
    nextArrow: <button style={{ ...buttonStyle }}><ChevronRightIcon color='white' width={20} height={20}/></button>
}


const responsiveSettings = [
  {
      breakpoint: 800,
      settings: {
          slidesToShow: 5,
          slidesToScroll: 5
      }
  },
  {
      breakpoint: 600,
      settings: {
          slidesToShow: 3,
          slidesToScroll: 3
      }
  },
  {
      breakpoint: 400,
      settings: {
          slidesToShow: 2,
          slidesToScroll: 2
      }
  },
  {
      breakpoint: 300,
      settings: {
          slidesToShow: 1,
          slidesToScroll: 2
      }
  }
];


export {buttonStyle,properties,responsiveSettings}