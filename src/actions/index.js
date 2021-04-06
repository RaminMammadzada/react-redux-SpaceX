import {
  SUCCESS_CASE,
  MISSION_YEAR,
} from '../constants/action-types';

export const successFilter = (res) => ({
  type: SUCCESS_CASE,
  payload: res,
});

export const missionFilter = (res) => ({
  type: MISSION_YEAR,
  payload: res,
});
