import axios from "axios";

const movieBaseURL = 'https://api.themoviedb.org/3/movie';
const api_key = '7c7c9438004fe01611410d200654059e'

const getPopularMovies = axios.get(movieBaseURL+ "/popular?api_key="+api_key)

export default{
    getPopularMovies
}