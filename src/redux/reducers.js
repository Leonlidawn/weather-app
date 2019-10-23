import { combineReducers } from 'redux';
import { SELECT_LOCATION } from './actionTypes';
import weatherAPI from '../services/weatherAPI'


//  {
//   currentWeather:currentWeather,
//   forecasts: forecasts,
// }
// );
// }



//reducer
export const locationIndex = async (state = 0, action) => {
  switch (action.type) {
    case (SELECT_LOCATION):

      let currentWeather = await weatherAPI.getCurrentWeather(state);
      let forecasts = await weatherAPI.getForecasts(state);

      return action.locationIndex;
    default:
      return state;
  }
}


export default async () => await combineReducers({
  locationIndex //add more reducers here in the future.
})
