import { DISPLAY_ALL_DRAGONS, RESERVE_DRAGON } from '../actionTypes';

const DragonReducer = (state = [], action) => {
  switch (action.type) {
    case DISPLAY_ALL_DRAGONS:
      return state;
    case RESERVE_DRAGON:
      return state;
    default:
      return state;
  }
};

export default DragonReducer;
