import {
  DISPLAY_ALL_DRAGONS,
  RESERVE_DRAGON,
  CANCEL_RESERVED_DRAGON,
} from '../actionTypes';

const DragonReducer = (state = [], action = {}) => {
  switch (action.type) {
    case DISPLAY_ALL_DRAGONS:
      return [...action.payload];
    case RESERVE_DRAGON:
      return state.map((dragon) => {
        if (dragon.id !== action.payload.id) {
          return dragon;
        }
        return { ...dragon, reserved: true };
      });
    case CANCEL_RESERVED_DRAGON:
      return state.map((dragon) => {
        if (dragon.id !== action.payload.id) {
          return dragon;
        }
        return { ...dragon, reserved: false };
      });
    default:
      return state;
  }
};

export default DragonReducer;
