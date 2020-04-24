import axios from 'axios';

/**
 * Axios Instance
 */
const AXIOS = axios.create({
  baseURL: `https://api.themoviedb.org/3/`,
  timeout: 15000,
  headers: {
    'Content-Type': 'application/json',
  },
});

/**
 * Movie Poster Base URL
 */
const IMAGE_BASE_URL = 'http://image.tmdb.org/t/p/w200/';

const API_KEY = 'df9b55dfc4d19cfda75f35a1505c8d36';

export default {
  IMAGE_BASE_URL,
  API_KEY,
  AXIOS,
};
