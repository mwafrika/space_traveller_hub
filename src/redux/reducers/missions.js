import {
  MISSIONS_FETCH_STARTED,
  MISSIONS_FETCH_FAILED,
  MISSIONS_RETRIEVED,
} from '../actionTypes';

const defaultState = {
  list: [],
  loading: false,
  error: false,
};

const missions = (prevState = defaultState, action) => {
  switch (action.type) {
    case MISSIONS_FETCH_FAILED:
      return { ...prevState, error: true };
    case MISSIONS_FETCH_STARTED:
      return { ...prevState, loading: true };
    case MISSIONS_RETRIEVED:
      return { loading: false, error: false, list: action.payload };
    default:
      return prevState;
  }
};

export default missions;
