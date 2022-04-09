import {
  MISSIONS_FETCH_STARTED,
  MISSIONS_FETCH_FAILED,
  MISSIONS_RETRIEVED,
  MISSION_JOINED,
  MISSION_LEFT,
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
    case MISSION_JOINED:
      return {
        ...prevState,
        list: prevState.list.map((mission) => {
          if (mission.mission_id !== action.id) {
            return mission;
          }
          return { ...mission, reserved: true };
        }),
      };
    case MISSION_LEFT:
      return {
        ...prevState,
        list: prevState.list.map((mission) => {
          if (mission.mission_id !== action.id) {
            return mission;
          }
          return { ...mission, reserved: !mission.reserved };
        }),
      };
    default:
      return prevState;
  }
};

export default missions;
