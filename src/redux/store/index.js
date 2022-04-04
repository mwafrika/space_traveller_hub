/* eslint-disable no-underscore-dangle */
import {
  combineReducers, createStore, applyMiddleware, compose,
} from 'redux';
import thunk from 'redux-thunk';
import dragonReducer from '../reducers/dragon';

const rootReducer = combineReducers({ dragonReducer });

const store = createStore(
  rootReducer,
  { dragonReducer: [] },
  compose(
    applyMiddleware(thunk),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
  ),
);

export default store;
