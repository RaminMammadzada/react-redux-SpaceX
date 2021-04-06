import {
  SUCCESS_CASE,
  MISSION_YEAR,
  ALL_MISSIONS,
} from '../constants/action-types';

export const successFilter = (res) => ({
  type: SUCCESS_CASE,
  payload: res,
});

export const missionFilter = (res) => ({
  type: MISSION_YEAR,
  payload: res,
});

export const setAllMissions = (allMissions) => ({
  type: ALL_MISSIONS,
  payload: allMissions,
});

export function fetchData(url) {
  return function thunk(dispatch) {
    fetch(url).then((response) => response.json())
      .then((json) => {
        console.log('DATA: ', json);
        dispatch(setAllMissions(json));
      })
      .catch((error) => console.log('Error: ', error.message));
  };
}
