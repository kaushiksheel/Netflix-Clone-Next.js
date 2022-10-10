import { UserI } from "./UserI";

export interface MovieContextI{
    showVideoModal:boolean;
    setShowVideoModal:(showVideoModal:boolean)=>void;
    movieId:number;
    setMovieId:(movieId:number)=>void;
    tvShow:boolean;
    setTvShow:(tvShow:boolean)=>void;
}


export interface AuthContextI{
currentUser?:UserI;
setCurrentUser:(currentUser:UserI)=>void;
userAvatar:string;
setUserAvatar:(userAvatar:string)=>void;
}