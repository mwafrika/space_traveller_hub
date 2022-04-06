import {
  DISPLAY_ALL_DRAGONS,
  RESERVE_DRAGON,
} from '../actionTypes/actionTypes';
import { getDragons } from '../api/dragon';

export const displayDragons = () => async (dispatch) => {
  const { data } = await getDragons();
  dispatch({
    type: DISPLAY_ALL_DRAGONS,
    payload: data,
  });
};

export const reserveDragon = (id) => async (dispatch) => {
  dispatch({
    type: RESERVE_DRAGON,
    payload: id,
  });
};
