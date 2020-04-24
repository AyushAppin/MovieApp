import {GET_MOVIES, GET_MOVIES_FAILURE, GET_MOVIES_SUCCESS} from './types';

import Utils from '../../utils';
import Constants from '../../constants';

/**
 * Action to get movie list from api
 */
export const getMovies = () => {
  return (dispatch: Function) => {
    dispatch({
      type: GET_MOVIES,
      payload: {isLoading: true},
    });
    Utils.Service.GET(
      Constants.EndPoints.getMovies(1),
      undefined,
      (res: any) => {
        if (res.status === 200) {
          dispatch({
            type: GET_MOVIES_SUCCESS,
            payload: {isLoading: false, movies: res.data.results},
          });
        } else {
          dispatch({
            type: GET_MOVIES_FAILURE,
            payload: {isLoading: false},
          });
        }
      },
      (error: any) => {
        dispatch({
          type: GET_MOVIES_FAILURE,
          payload: {isLoading: false},
        });
        console.log(error);
      },
    );
  };
};
