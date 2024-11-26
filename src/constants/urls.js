import { API_KEY } from "./constants";
export const original = `discover/tv?api_key=${API_KEY}&with_networks=213`;
export const ActionMovies = `/discover/movie?api_key=${API_KEY}&with_genres=28`;
export const RomanceMovies = `discover/movie?api_key=${API_KEY}&with_genres=10749`
export const Trending =`https://api.themoviedb.org/3/trending/all/week?api_key=${API_KEY}&language=en-US`
export const ComedyMovies= `https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&with_genres=35`
export const HorrorMovies= `https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&with_genres=27'`