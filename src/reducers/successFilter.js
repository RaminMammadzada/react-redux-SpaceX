import { SUCCESS_FILTER } from '../constants/action-types';

const initialState = 'All';

export default function successFilter(state = initialState, action) {
  if (action.type === SUCCESS_FILTER) {
    if (action.payload === 'All') {
      return 'All';
    }
    return action.payload;
  }
  return state;
}
