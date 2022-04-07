/* eslint-disable no-underscore-dangle */
<<<<<<< HEAD
import { combineReducers, createStore, applyMiddleware } from 'redux';
=======
// import { routerReducer } from 'react-router-redux';
import {
  combineReducers, createStore, applyMiddleware, compose,
} from 'redux';
>>>>>>> de33129c0bf1d1c42a1ff4261f9c0a31fc42f63f
import thunk from 'redux-thunk';
import missions from '../reducers/missions';
import dragonReducer from '../reducers/dragon';
import RocketReducer from '../reducers/rocket';

const rootReducer = combineReducers({
  dragons: dragonReducer,
  rockets: RocketReducer,
<<<<<<< HEAD
  missions,
=======
  missions: missionReducer,
  // routing: routerReducer,
>>>>>>> de33129c0bf1d1c42a1ff4261f9c0a31fc42f63f
});

const store = createStore(rootReducer, applyMiddleware(thunk));

export default store;
