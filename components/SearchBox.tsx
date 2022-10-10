import { ChevronRightIcon } from "@heroicons/react/24/solid";
import { useRouter } from "next/router";
import React from "react";

export const SearchBox = () => {
  const router=useRouter()
  return (
    <div className="w-full h-fit flex flex-col justify-center md:flex-row md:items-center">
      <input type="text" className="h-[5rem] w-full md:w-[90%] inline-block px-2 text-[1.5rem] focus:outline-none" placeholder="Email" />
      <button onClick={()=>router.push('/login')} className="bg-[#E50914] text-white md:w-[20rem] m-auto text-[1.7rem] mt-5 p-3 px-11 flex md:mt-0  items-center gap-3 h-[5rem] md:font-semibold">
        Get Started <ChevronRightIcon
        className="w-8 h-8 "
        />
      </button>
    </div>
  );
};
