export const FETCH_TRENDING = `https://api.themoviedb.org/3/trending/all/week?api_key=${process.env.NEXT_PUBLIC_API_KEY}&language=en-US`;



export const TV_SHOWS = `/trending/tv/week?api_key=${process.env.NEXT_PUBLIC_API_KEY}`;

export const FETCH_ORIGINALS = `/discover/movie?api_key=${process.env.NEXT_PUBLIC_API_KEY}&language=en-US&region=US&sort_by=release_date.asc&include_adult=false&include_video=false&page=1&with_watch_monetization_types=flatrate`;

export const FETCH_TOP_RATED = `/movie/top_rated?api_key=${process.env.NEXT_PUBLIC_API_KEY}&language=en-US`;
export const FETCH_ACTION_MOVIES = `/discover/movie?api_key=${process.env.NEXT_PUBLIC_API_KEY}&with_genres=28`;
export const FETCH_COMEDY_MOVIES = `/discover/movie?api_key=${process.env.NEXT_PUBLIC_API_KEY}&with_genres=35`;
export const FETCH_HORROR_MOVIES = `/discover/movie?api_key=${process.env.NEXT_PUBLIC_API_KEY}&with_genres=27`;
export const FETCH_ROMANTIC_MOVIES = `/discover/movie?api_key=${process.env.NEXT_PUBLIC_API_KEY}&with_genres=10749`;
export const FETCH_DOCUMENTARIES = `/discover/movie?api_key=${process.env.NEXT_PUBLIC_API_KEY}&with_genres=99`;

export const TRENDING_MOVIE_API_LINK = `/trending/movie/week?api_key=${process.env.NEXT_PUBLIC_API_KEY}`;

export const POPULAR_MOVIE_API_LINK = `/discover/movie?api_key=${process.env.NEXT_PUBLIC_API_KEY}&language=en-US&sort_by=popularity.desc&include_adult=true&include_video=false&page=1&with_original_language=en&with_watch_monetization_types=flatrate`;

export const IMAGE_LINK = "https://image.tmdb.org/t/p/original";
