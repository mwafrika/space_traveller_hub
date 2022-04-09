/* eslint-disable no-underscore-dangle */
import { combineReducers, createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
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
  composeWithDevTools(applyMiddleware(thunk)),
);

export default store;
