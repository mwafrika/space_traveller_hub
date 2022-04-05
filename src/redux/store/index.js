/* eslint-disable no-underscore-dangle */
import { combineReducers, createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import missions from '../reducers/missions';

const rootReducer = combineReducers({ missions });

const store = createStore(rootReducer, applyMiddleware(thunk));

export default store;
