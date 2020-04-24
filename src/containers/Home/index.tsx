import Home from './Home';

import {getMovies} from '../../modules/Home';
import {connect} from 'react-redux';

const mapStateToProps = (state: any) => {
  return {...state.HomeReducer};
};

const mapDispatchToProps = (dispatch: Function) => ({
  getMovies: () => dispatch(getMovies()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Home);
