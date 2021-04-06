import {
  CONSTANT1,
  CONSTANT2,
} from '../constants/action-types';

export const changeFilter1 = () => ({
  type: CONSTANT1,
  payload: 'samplepayload1',
});

export const changeFilter2 = () => ({
  type: CONSTANT2,
  payload: 'samplepayload2',
});
