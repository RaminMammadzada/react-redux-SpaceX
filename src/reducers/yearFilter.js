import { YEAR_FILTER } from '../constants/action-types';

const initialState = 'All';

export default function yearFilter(state = initialState, action) {
  if (action.type === YEAR_FILTER) {
    if (action.payload === 'All') {
      return 'All';
    }
    return action.payload;
  }
  return state;
}
