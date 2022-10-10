import { createContext, ReactNode, useState } from "react";
import { MovieContextI } from "../interfaces/ContextI";

export const MovieContext=createContext({} as MovieContextI);


interface  ContextProviderProps {
children:ReactNode
}

export const MovieContextProvider=({children}:ContextProviderProps)=>{
    const[showVideoModal,setShowVideoModal]=useState(false);
    const[movieId,setMovieId]=useState<number>(0);
    const[tvShow,setTvShow]=useState<boolean>(false);
    
    
    return (
        <MovieContext.Provider value={{showVideoModal,setShowVideoModal,movieId,setMovieId,tvShow,setTvShow}}>
            {children}
        </MovieContext.Provider>
    )
}