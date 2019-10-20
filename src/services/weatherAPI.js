// import React from 'react';
import axios from 'axios';
//处理关于天气的调用，方便更换api

// 返回current
// 返回options, 不可修改
// 返回forecast

//返回值：
function WeatherAPI() {
  let APPID = "a1cdbf6d63c7fbf4292dc8b3ea93e6df";

  let australia = { name: "Australia", code: "AU" };
  let china = { name: "China", code: "CN" };
  let canada = { name: "Canada", code: "CA" };
  let newZealand = { name: "New Zealand", code: "CK" };

  //外部读不到？
  const list = [
    { name: "Sydney", country: australia },
    { name: "Melbourne", country: australia },
    { name: "Brisbane", country: australia },
    { name: "Hongkong", country: china },
    { name: "Guangzhou", country: china },
    { name: "Toronto", country: canada },
    { name: "Auckland", country: newZealand }
  ];
  //everytime this is called, you get a new copy!
  //also use arrow function to allow reading properties in lexico/private scope.
  this.getLocaitonList = () => {
    return list;
  }

  //在这里async await,在外面调用的时候也要。每一层都要。得到原始数据
  const getData = async (apiEnding, index) => {
    const APIADDRESS = `https://api.openweathermap.org/data/2.5/${apiEnding}`
    let location = this.getLocaitonList()[index].name + ',' + this.getLocaitonList()[index].country.code;
    let mode = 'json';
    let units = 'metric';
    let res = await axios.get(APIADDRESS, {
      params: {
        appid: APPID,
        q: location,
        mode: mode,
        units: units
      }
    });
    return res;
  };

  //for Public use
  this.getCurrentWeather = async (index) => {
    let rawData = (await getData("weather", index)).data;
    let statusIcon = "http://openweathermap.org/img/wn/" + rawData.weather[0].icon + "@2x.png";
    return ({
      status: (rawData.weather[0]).description,
      statusIcon: statusIcon,
      wind: rawData.wind.speed,
      humidity: rawData.main.humidity,
      temperature: rawData.main.temp
    });
  }


  this.getForecasts = async (index = 0) => {
    let rawData = (await getData("forecast", index)).data;
    console.log(rawData);
    let days = {};
    rawData.list.map(
      item => {
        let dateAndTime = (item.dt_txt).split(" ");
        let date = dateAndTime[0];
        let time = dateAndTime[1];
        //days[date]是用date的值做key，days.date和days={date:??}都是把"date"做key
        if (!days[date]) days[date] = {}; //key自动创建值发生在1层查询
        days[date][time] = item;
      }
    )
    console.log(days);

    /*===
        loaction 
    */
    // let forecastlist = res.data.list;

    let data = {}
    let rawForecastList = rawData.list;
    let rawForecastfilter = (rawForecast) => {
      return {
        status: {
          clouds: rawForecast.clouds.all,
          wind: rawForecast.wind.speed,
          humidity: rawForecast.hu
        },
        temperature: {
          max: rawForecast.temp.max,
          min: rawForecast.temp.min
        }

      }

    }

    // data.location = { city: rawData.data.city.name, code: rawData.data.city.country };
    // data.current.status = { temperature: rawForecastList.temp }
    // console(data.location);

    // data = {
    //   location: {
    //     city,
    //     code
    //   },
    //   current: {
    //     status,
    //     icon,
    //     temp: {
    //       real,
    //       max,
    //       min
    //     },
    //     humidity,
    //     wind
    //   },
    //   forcast: {

    //   }

    return data;
  };


}
export default WeatherAPI;



// }





// export function getWeatherInform() {


//   return { current, forcasts };
// }

// function getCurrentWeather() {

//   return;
// }

// function getForecast() {

//   return;
// }

