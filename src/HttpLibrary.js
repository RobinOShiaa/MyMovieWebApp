import axios from 'axios';
import { API_KEY } from '@/env';

export const getPopularMovies = (page) => {
    axios.get(`https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}&language=en-US&page=${page}`)
    .then((response) => console.log(response.data))
    .catch('error');
}

export const getTopRatedMovies = (page) => {
    axios.get(`https://api.themoviedb.org/3/movie/top_rated?api_key=${API_KEY}&language=en-US&page=${page}`)
    .then((response) => console.log(response.data))
    .catch('error');
}

export const getUpcomingMovies = (page) => {
    axios.get(`https://api.themoviedb.org/3/movie/upcoming?api_key=${API_KEY}&language=en-US&page=${page}`)
    .then((response) => console.log(response.data))
    .catch('error');
}

export const getLatestMovies = (page) => {
    axios.get(`https://api.themoviedb.org/3/movie/latest?api_key=${API_KEY}&language=en-US&page=${page}`)
    .then((response) => console.log(response.data))
    .catch('error');
}

export const getMovieReviews = (page,movie_id) => {
    axios.get(`https://api.themoviedb.org/3/movie/${movie_id}/reviews?api_key=${API_KEY}&language=en-US&page=${page}`)
    .then((response) => console.log(response.data))
    .catch('error');
}

export const getSimilarMovies = (page,movie_id) => {
    axios.get(`https://api.themoviedb.org/3/movie/${movie_id}/similar?api_key=${API_KEY}&language=en-US&page=${page}`)
    .then((response) => console.log(response.data))
    .catch('error');
}

