import { combineReducers } from 'redux';
import { SELECT_LOCATION } from './actionTypes';
import weatherAPI from '../services/weatherAPI';

//reducer
export const weather = (index = 0, action) => {
  switch (action.type) {
    case (SELECT_LOCATION):

      console.log(typeof (action.data));
      console.log(action.data);

      return action.data(index);

    default:
      let data = async () => ({
        currentWeather: await weatherAPI.getCurrentWeather(index),
        forecasts: await weatherAPI.getForecasts(index),
        locationIndex: 0
      })
      return data;
  }
}


export default combineReducers({
  weather //add more reducers here in the future.
})
