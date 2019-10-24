import { SELECT_LOCATION } from './actionTypes';
import weatherAPI from '../services/weatherAPI';

//同步action返回一个对象，异步action返回的是一个函数

/* ===例子===
同步增加
export const increment = (number)=>({type:INCREMENT,data:number})
//异步增加
export const incrementAsync = (number)=>( 
	dispatch => {
		//异步代码
		setTimeout(()=>{
			//一秒之后才去分发一个增加的action
			dispatch(increment(number))
		},1000)
	}
*/



//action
// export const selectLocation = (locationIndex) => {
//   return { type: SELECT_LOCATION, locationIndex };
// };

//this is async , 返回一个 async 函数
export const selectLocation = (locationIndex) => {
  console.log("action:selectLocation被调用了")
  return async dispatch => {
    console.log("action:selectLocation的二次dispatch会调用")
    await dispatch({
      type: SELECT_LOCATION, data: {
        currentWeather: await weatherAPI.getCurrentWeather(locationIndex),
        forecasts: await weatherAPI.getForecasts(locationIndex),
        locationIndex: locationIndex
      }
    });
  }
};


