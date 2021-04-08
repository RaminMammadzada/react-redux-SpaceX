import { CURRENT_MISSION } from '../constants/action-types';

const initialArray = {};

export default function currentMission(store = initialArray, action) {
  if (action.type === CURRENT_MISSION) {
    return action.payload;
  }

  return store;
}
