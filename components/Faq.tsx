import { PlusIcon, XMarkIcon } from '@heroicons/react/24/solid'
import React from 'react'
import { faqI } from '../pages';


interface PropsI{
   item:faqI;
    handleFaq:(id:number)=>void;
}

export const Faq = ({item,handleFaq}:PropsI) => {
  return (
    <>
    <div className="flex justify-between items-center bg-[#303030] text-white p-5 mb-3">
        <p className='text-[2.4rem]'>{item.title}</p>
        {item.active?
         <XMarkIcon onClick={()=>handleFaq(item.id)} className='w-[27px] h-[27px] cursor-pointer'/>:
        <PlusIcon onClick={()=>handleFaq(item.id)} className='w-[27px] h-[27px] cursor-pointer'/>
         }
       
    </div>
    <div className={`bg-[#303030] text-white p-5 mt-2 mb-3 ${!item.active&&'hidden'}`}>
        <p className='text-[1.7rem]'>{item.overview}</p>
    </div>
    </>
  )
}
