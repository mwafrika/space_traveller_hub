/* eslint-disable no-underscore-dangle */
import { combineReducers, createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import missions from '../reducers/missions';
import dragonReducer from '../reducers/dragon';
import RocketReducer from '../reducers/rocket';

const rootReducer = combineReducers({
  dragons: dragonReducer,
  rockets: RocketReducer,
  missions,
});

const store = createStore(rootReducer, applyMiddleware(thunk));

export default store;
