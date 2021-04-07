import { combineReducers } from 'redux';
import yearFilter from './yearFilter';
import successFilter from './successFilter';
import missions from './missions';
import currentMission from './currentMission';

export default combineReducers({
  successFilter,
  yearFilter,
  missions,
  currentMission,
});
