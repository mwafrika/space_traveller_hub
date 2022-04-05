/* eslint-disable consistent-return */
import { DISPLAY_ALL_DRAGONS, RESERVE_DRAGON } from '../actionTypes';

const DragonReducer = (state = [], action) => {
  switch (action.type) {
    case DISPLAY_ALL_DRAGONS: {
      return action.payload;
    }
    case RESERVE_DRAGON: {
      const dragon = state.filter((dragon) => dragon.id !== action.payload);
      console.log({ ...dragon, reserved: true }, 'dragon reducer');
      return { ...dragon, reserved: true };
    }
    default:
      return state;
  }
};

export default DragonReducer;
