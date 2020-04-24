import Utils from '../utils';
/**
 * API Endpoints used in the app
 */
export default {
  getMovies: (page: number) =>
    `discover/movie?api_key=${Utils.APIConstants.API_KEY}&page=${page}`,
};
