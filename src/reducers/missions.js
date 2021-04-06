import { ALL_MISSIONS } from '../constants/action-types';

const initialArray = [
];

export default function missions(store = initialArray, action) {
  if (action.type === ALL_MISSIONS) {
    return [...store, ...action.payload];
  }

  return store;
}
