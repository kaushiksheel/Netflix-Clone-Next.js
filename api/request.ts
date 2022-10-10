import axios from 'axios';

export const request=axios.create({
    baseURL:"https://api.themoviedb.org/3"
})