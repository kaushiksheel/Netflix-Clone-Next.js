export interface MovieI {
  adult: boolean;
  backdrop_path: string;
  genre_ids: [];
  id: number;
  original_language: string;
  original_title: string;
  overview: string;
  popularity: number;
  poster_path: string;
  release_date: string;
  title?: string;
  video?: boolean;
  vote_average: number;
  vote_count: number;
  name?:string;
  original_name?:string;
}

export interface GenresI {
  id: number;
  name: string;
}

export interface MovieInfoI {
  adult: boolean;
  backdrop_path: string;
  genres: GenresI[];
  id: number;
  imdb_id: string;
  original_language: string;
  original_title: string;
  overview: string;
  popularity: number;
  poster_path: string;
  release_date: string;
  revenue: number;
  runtime: number;
  tagline: string;
  title: string;
  video: boolean;
  vote_average: number;
  vote_count: number;
}

export interface CastInfoI {
  adult: boolean;
  gender: number;
  id: number;
  known_for_department: string;
  name: string;
  original_name: string;
  popularity: number;
  profile_path: string;
  cast_id: number;
  character: string;
  credit_id: string;
  order: number;
}


export interface MovieVideoI{
id:string,
key:string
}