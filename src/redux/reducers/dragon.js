import { DISPLAY_ALL_DRAGONS, RESERVE_DRAGON } from '../actionTypes';

const DragonReducer = (state = [], action) => {
  switch (action.type) {
    case DISPLAY_ALL_DRAGONS:
      console.log(action.payload);
      return action.payload;
    case RESERVE_DRAGON:
      return state;
    default:
      return state;
  }
};

export default DragonReducer;
