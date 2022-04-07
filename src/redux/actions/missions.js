import { missionsService } from '../api/missions_service';
import {
  MISSIONS_FETCH_FAILED,
  MISSIONS_FETCH_STARTED,
  MISSIONS_RETRIEVED,
} from '../actionTypes';

const missionsRetrieved = () => async (dispatch) => {
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

export default missionsRetrieved;
