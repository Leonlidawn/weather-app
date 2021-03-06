import { combineReducers } from 'redux';
import { SELECT_LOCATION } from './actionTypes';
// import weatherAPI from '../services/weatherAPI';

//reducer
export const weather = (index = 0, action) => {
  console.log("actiontype是" + action.type)

  switch (action.type) {

    case (SELECT_LOCATION):
      // console.log("reducer:selectLocation被调用了")

      action.data.loading = false;
      return action.data;

    default://初始化的时候也会用到
      // console.log("reducer:default被调用了")

      return { loading: true };
  }
}


export default combineReducers({
  weather //add more reducers here in the future.
})
