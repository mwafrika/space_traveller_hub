/* eslint-disable no-underscore-dangle */
import { routerReducer } from 'react-router-redux';
import { combineReducers, createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import dragonReducer from '../reducers/dragon';
import RocketReducer from '../reducers/rocket';

const rootReducer = combineReducers({
  dragons: dragonReducer,
  rockets: RocketReducer,
  routing: routerReducer,
});

const store = createStore(rootReducer, applyMiddleware(thunk));

export default store;
