import {
  SUCCESS_FILTER,
  YEAR_FILTER,
  ALL_MISSIONS,
  CURRENT_MISSION,
} from '../constants/action-types';

export const successChanged = (successCase) => ({
  type: SUCCESS_FILTER,
  payload: successCase,
});

export const yearChanged = (year) => ({
  type: YEAR_FILTER,
  payload: year,
});

export const setAllMissions = (allMissions) => ({
  type: ALL_MISSIONS,
  payload: allMissions,
});

export const setCurrentMission = (currentMission) => ({
  type: CURRENT_MISSION,
  payload: currentMission,
});

export function fetchData(url) {
  return function thunk(dispatch) {
    fetch(url).then((response) => response.json())
      .then((json) => {
        // console.log('DATA: ', json);
        dispatch(setAllMissions(json));
      })
      .catch((error) => console.log('Error: ', error.message));
  };
}

export function fetchCurrentMission(url) {
  return function thunk(dispatch) {
    fetch(url).then((response) => response.json())
      .then((json) => {
        // console.log('DATA: ', json[0]);
        dispatch(setCurrentMission(json[0]));
      })
      .catch((error) => console.log('Error: ', error.message));
  };
}
