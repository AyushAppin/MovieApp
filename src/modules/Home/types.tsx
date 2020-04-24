export const GET_MOVIES = 'HomeReducer/GET_MOVIES';
export const GET_MOVIES_SUCCESS = 'HomeReducer/GET_MOVIES_SUCCESS';
export const GET_MOVIES_FAILURE = 'HomeReducer/GET_MOVIES_FAILURE';

export interface Movie {
  poster_path: string;
  id: number;
  original_title: string;
  title: string;
}

export interface HomeState {
  movies: Array<Movie>;
  isLoading: boolean;
}
