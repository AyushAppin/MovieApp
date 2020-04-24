import {
  GET_MOVIES,
  GET_MOVIES_SUCCESS,
  GET_MOVIES_FAILURE,
  HomeState,
} from './types';

const INITIAL_STATE: HomeState = {
  movies: [],
  isLoading: false,
};

const reducer = (state: HomeState = INITIAL_STATE, action: any) => {
  switch (action.type) {
    case GET_MOVIES:
      return {...state, ...action.payload};
    case GET_MOVIES_SUCCESS:
      return {...state, ...action.payload};
    case GET_MOVIES_FAILURE:
      return {...state, ...action.payload};
    default:
      return state;
  }
};

export default reducer;
