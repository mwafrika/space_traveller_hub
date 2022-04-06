import {
  DISPLAY_ALL_DRAGONS,
  RESERVE_DRAGON,
  CANCEL_RESERVED_DRAGON,
  RENDER_DRAGON_PROFILE,
} from '../actionTypes/actionTypes';

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
    case RENDER_DRAGON_PROFILE:
      console.log(
        [...action.payload].filter(
          (dragon) => dragon.reserved === action.payload,
        ),
        'check if true',
      );
      return [...action.payload].filter((dragon) => dragon.reserved === true);
    default:
      return state;
  }
};

export default DragonReducer;
