/* eslint-disable no-underscore-dangle */
import { combineReducers, createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
<<<<<<< HEAD:src/redux/store/index.js
import missions from '../reducers/missions';

const rootReducer = combineReducers({ missions });
=======
import dragonReducer from '../reducers/dragon';
import RocketReducer from '../reducers/rocket';

const rootReducer = combineReducers({
  dragons: dragonReducer,
  rockets: RocketReducer,
});
>>>>>>> develop:src/redux/store/store.js

const store = createStore(rootReducer, applyMiddleware(thunk));

export default store;
