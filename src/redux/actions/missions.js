import { missionsService } from '../api/missions_service';
import {
  MISSIONS_FETCH_FAILED,
  MISSIONS_FETCH_STARTED,
  MISSIONS_RETRIEVED,
  MISSION_JOINED,
  MISSION_LEFT,
} from '../actionTypes';

export const missionsRetrieved = () => async (dispatch) => {
  dispatch({ type: MISSIONS_FETCH_STARTED });
  try {
    const res = await missionsService.getAll();

    dispatch({
      type: MISSIONS_RETRIEVED,
      payload: res.data,
    });
    return Promise.resolve(res.data);
  } catch (error) {
    dispatch({ type: MISSIONS_FETCH_FAILED });
    return Promise.resolve(error);
  }
};

export const missionJoined = (id) => ({
  type: MISSION_JOINED,
  id,
});
export const missionLeft = (id) => ({
  type: MISSION_LEFT,
  id,
});
