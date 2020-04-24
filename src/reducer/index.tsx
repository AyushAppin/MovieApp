import {combineReducers} from 'redux';
import HomeReducer from '../modules/Home';
/**
 * Combine Reducers
 */
const reducer = combineReducers({
  HomeReducer,
});

export default reducer;
