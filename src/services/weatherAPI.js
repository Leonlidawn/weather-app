// import React from 'react';
import axios from 'axios';

function weatherAPI() {
  const APPID = "a1cdbf6d63c7fbf4292dc8b3ea93e6df";

  //the name here is for display
  const australia = { name: "Australia", code: "AU" };
  const china = { name: "China", code: "CN" };
  const hongkong = { name: 'China', code: "HK" };
  const canada = { name: "Canada", code: "CA" };
  const newZealand = { name: "New Zealand", code: "NZ" };

  const cacheTime = 3600 * 1000;
  let weatherData = {};


  const locaitonList = [
    { name: "Sydney", country: australia },
    { name: "Melbourne", country: australia },
    { name: "Brisbane", country: australia },
    { name: "Hong Kong", country: hongkong },
    { name: "Guangzhou", country: china },
    { name: "Toronto", country: canada },
    { name: "Auckland", country: newZealand }
  ];
  // //everytime this is called, you get a new copy!
  this.getLocaitonList = () => {
    return locaitonList;
  }
  this.getLocaitonByIndex = (index) => {
    return locaitonList[index];
  }
  //在这里async await,在外面调用的时候也要。每一层都要。得到原始数据
  const getData = async (apiEnding, index) => {
    const APIADDRESS = `https://api.openweathermap.org/data/2.5/${apiEnding}`;
    let location = locaitonList[index].name + ',' + locaitonList[index].country.code;
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

  //private, can not be read
  const getIcon = (iconID) => {
    //未来的想法是根据当前时间决定所有的图是d或者n
    iconID = iconID.replace("n", "d");//ensures all icons are black and white 
    return "http://openweathermap.org/img/wn/" + iconID + "@2x.png";
  }

  const extractWeatherInfo = (rawData) => ({
    status: {
      description: (rawData.weather[0]).description,
      icon: getIcon(rawData.weather[0].icon)
    },
    wind: rawData.wind.speed,
    humidity: rawData.main.humidity,
    temperature: rawData.main.temp
  });

  const fetchCurrentWeather = async (index) => {
    let rawData = (await getData("weather", index)).data;
    return extractWeatherInfo(rawData);
  }

  const fetchForecasts = async (index = 0) => {
    let rawData = (await getData("forecast", index)).data;
    let days = {};
    let daysCounter = 0;
    //  rawData.list.map(
    // item => {//every 3 hours
    for (let item of rawData.list) {

      let dateAndTime = (item.dt_txt).split(" ");
      let date = dateAndTime[0];
      let time = dateAndTime[1];
      //days[date]是用date的值做key，days.date和days={date:??}都是把"date"做key
      if (!days[date]) { //key自动创建值发生在1层查询,所以在这里初始化
        if (daysCounter == 5) {//only get first 5 days 
          break;
        }
        daysCounter++;

        let map = new Object();//use Object as Hashmap
        days[date] = {
          summary: {
            status: map,
            temperature: []
            //  wind: [],  //  humidity: [],
          }
        };
        days[date].totalPeriods = 1;
      } else {
        days[date].totalPeriods++;
      }
      let info = extractWeatherInfo(item);
      days[date][time] = info;

      let daySummary = days[date].summary;
      // {key:descriptoin,value:{icon, occurance}}

      let key = info.status.description;
      if (daySummary.status[key] == null) {
        daySummary.status[key] = info.status;
        daySummary.status[key].occurance = 1;
      } else {
        daySummary.status[key].occurance++;
      }
      // daySummary.wind.push(info.wind);
      // daySummary.humidity.push(info.humidity);
      daySummary.temperature.push(info.temperature);

    };

    //changing the assignment of the parameter will not change the assignment of passed argument.
    function onlyMinMaxOrOne(array) {
      if (array.length > 1) {
        array.sort();
        return { min: array.shift(), max: array.pop() };
      }
      return { min: array[0], max: array[0] };
    }

    //下一步是比较出min, max , worst
    Object.values(days).map(
      day => {
        let w = day.summary;
        // w.wind = onlyMinMaxOrOne(w.wind);
        // w.humidity = onlyMinMaxOrOne(w.humidity);
        w.temperature = onlyMinMaxOrOne(w.temperature);
        // if (w.status.length > 1) w.status = [... new Set(w.status)];
      }
    );
    console.log(days);

    return days;
  };


  // for public use, will cache the result for sometime after updated.
  this.fetchWeather = async (index) => {
    const cityData = weatherData[index];
    const timestamp = Date.now();

    //最短1小时更新一次
    if (!cityData || (timestamp - cityData.lastUpdated) > cacheTime) {
      let currentWeather = await fetchCurrentWeather(index);
      let forecasts = await fetchForecasts(index);
      let data = { currentWeather, forecasts };

      weatherData[index] = {
        data,
        lastUpdated: Date.now()
      }
    }
    return weatherData[index];
  }


}
export default new weatherAPI();
