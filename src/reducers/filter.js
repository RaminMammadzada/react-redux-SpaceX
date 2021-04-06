import { SUCCESS_CASE, MISSION_YEAR } from '../constants/action-types';

const initialState = [4, 3, 2];

export default function filter(store = initialState, action) {
  if (action.type === SUCCESS_CASE) {
    return store;
  }

  if (action.type === MISSION_YEAR) {
    return store;
  }

  return store;
}
