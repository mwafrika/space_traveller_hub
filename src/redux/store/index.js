/* eslint-disable no-underscore-dangle */
// import { routerReducer } from 'react-router-redux';
import {
  combineReducers, createStore, applyMiddleware,
} from 'redux';
import thunk from 'redux-thunk';
import dragonReducer from '../reducers/dragon';
import RocketReducer from '../reducers/rocket';
import missions from '../reducers/missions';

const rootReducer = combineReducers({
  dragons: dragonReducer,
  rockets: RocketReducer,
  missions,
});

const store = createStore(
  rootReducer,
  applyMiddleware(thunk),
);

export default store;
