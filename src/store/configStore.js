import {createStore, applyMiddleware } from 'redux';
import combineReducers from '../reducers/combineReducers';

import thunk from 'redux-thunk';

export default function configStore(initialState){
  return createStore(combineReducers, initialState, applyMiddleware(thunk));
}
