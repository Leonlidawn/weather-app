import React from 'react';
import axios from 'axios';
import CityPicker from '../components/CityPicker';
import { icon } from '@fortawesome/fontawesome-svg-core';
//处理关于天气的调用，方便更换api

// 返回current
// 返回options, 不可修改
// 返回forecast

//返回值：
function WeatherAPI() {
  const APPID = "a1cdbf6d63c7fbf4292dc8b3ea93e6df";

  //everytime this is called, you get a new copy!
  //also use arrow function to allow reading properties in lexico/private scope.
  this.getLocaitonList = () => {
    let australia = { name: "Australia", code: "AU" };
    let china = { name: "China", code: "CN" };
    let canada = { name: "Canada", code: "CA" };
    let newZealand = { name: "New Zealand", code: "CK" };

    let list = [
      { name: "Sydney", country: australia },
      { name: "Melbourne", country: australia },
      { name: "Brisbane", country: australia },
      { name: "Hongkong", country: china },
      { name: "Guangzhou", country: china },
      { name: "Toronto", country: canada },
      { name: "Auckland", country: newZealand }
    ];
    return list;
  }

  this.getCurrentWeatherRawData = async () => {

    const APIADDRESS = 'https://api.openweathermap.org/data/2.5/weather'
    let location = this.getLocaitonList()[0].name + ',' + this.getLocaitonList()[0].country.code;
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

  //在这里async awit,在外面调用的时候也要。每一层都要。
  this.getForecastsRawData = async () => {
    const APIADDRESS = 'https://api.openweathermap.org/data/2.5/forecast'
    let location = this.getLocaitonList()[0].name + ',' + this.getLocaitonList()[0].country.code;
    let mode = "json";

    let res = await axios.get(APIADDRESS, {
      params: {
        appid: APPID,
        q: location,
        mode: mode
      }

    });
    return res;
  };


  this.getCurrentWeather = async () => {
    let rawData = (await this.getCurrentWeatherRawData()).data;
    console.log(rawData);
    let statusIcon = "http://openweathermap.org/img/wn/" + rawData.weather[0].icon + "@2x.png";
    console.log(statusIcon);
    return ({
      status: (rawData.weather[0]).description,
      statusIcon: statusIcon,
      wind: rawData.wind.speed,
      humidity: rawData.main.humidity,
      temperature: rawData.main.temp
    });
  }

  this.getForecasts = async () => {
    let rawData = await this.getForecastsRawData();
    console.log(rawData.data);
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




    data.location = { city: rawData.data.city.name, code: rawData.data.city.country };
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

