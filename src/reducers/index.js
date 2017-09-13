import { combineReducers } from 'redux';
import { rocketfetchReducer } from './rocketReducer';

export default combineReducers({
  rockets: rocketfetchReducer
});
