/* eslint-disable no-underscore-dangle */
import {
  combineReducers, createStore, applyMiddleware, compose,
} from 'redux';
import thunk from 'redux-thunk';
import missionReducer from '../reducers/missions';
import dragonReducer from '../reducers/dragon';
import RocketReducer from '../reducers/rocket';

const rootReducer = combineReducers({
  dragons: dragonReducer,
  rockets: RocketReducer,
  missions: missionReducer,
});

const store = createStore(
  rootReducer,
  compose(
    applyMiddleware(thunk),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
  ),
);

export default store;
