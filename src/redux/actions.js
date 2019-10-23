import { SELECT_LOCATION } from './actionTypes';

//action
export const selectLocation = (locationIndex) => {
  return { type: SELECT_LOCATION, locationIndex };
};