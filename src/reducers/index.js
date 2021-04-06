import { combineReducers } from 'redux';
import filter from './filter';
import missions from './missions';

export default combineReducers({
  filter,
  missions,
});
