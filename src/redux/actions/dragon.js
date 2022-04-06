import { DISPLAY_ALL_DRAGONS, RESERVE_DRAGON } from '../actionTypes';
import { getDragons } from '../api/dragon';

export const displayDragons = () => async (dispatch) => {
  const url = 'https://api.spacexdata.com/v3/dragons';
  const { data } = await getDragons(url);

  const myData = data.map((d) => ({
    id: d.id,
    flickr_images: d.flickr_images[0],
    name: d.name,
    type: d.type,
    reserved: false,
  }));
  dispatch({
    type: DISPLAY_ALL_DRAGONS,
    payload: myData,
  });
};

export const reserveDragon = (id) => async (dispatch) => {
  dispatch({
    type: RESERVE_DRAGON,
    payload: { id },
  });
};
