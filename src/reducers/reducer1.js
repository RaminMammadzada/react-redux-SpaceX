import { CONSTANT1, CONSTANT2 } from '../constants/action-types';

const initialState = {};

export default function reducer1(store = initialState, action) {
  if (action.type === CONSTANT1) {
    return store;
  }

  if (action.type === CONSTANT2) {
    return store;
  }

  return store;
}
