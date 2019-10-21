// import React from 'react';
import axios from 'axios';

function weatherAPI() {
  let APPID = "a1cdbf6d63c7fbf4292dc8b3ea93e6df";

  let australia = { name: "Australia", code: "AU" };
  let china = { name: "China", code: "CN" };
  let canada = { name: "Canada", code: "CA" };
  let newZealand = { name: "New Zealand", code: "CK" };

  const locaitonList = [
    { name: "Sydney", country: australia },
    { name: "Melbourne", country: australia },
    { name: "Brisbane", country: australia },
    { name: "Hongkong", country: china },
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
    const APIADDRESS = `https://api.openweathermap.org/data/2.5/${apiEnding}`
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
  const getIcon = (iconID) => "http://openweathermap.org/img/wn/" + iconID + "@2x.png";

  const extractWeatherInfo = (rawData) => ({
    status: (rawData.weather[0]).description,
    statusIcon: getIcon(rawData.weather[0].icon),
    wind: rawData.wind.speed,
    humidity: rawData.main.humidity,
    temperature: rawData.main.temp
  });

  //for Public use
  this.getCurrentWeather = async (index) => {
    let rawData = (await getData("weather", index)).data;
    return extractWeatherInfo(rawData);
  }

  this.getForecasts = async (index = 0) => {
    let rawData = (await getData("forecast", index)).data;
    let days = {};
    rawData.list.map(
      item => {
        let dateAndTime = (item.dt_txt).split(" ");
        let date = dateAndTime[0];
        let time = dateAndTime[1];
        //days[date]是用date的值做key，days.date和days={date:??}都是把"date"做key
        if (!days[date]) { //key自动创建值发生在1层查询,所以在这里初始化
          days[date] = {
            summary: { status: [], statusIcon: [], wind: [], humidity: [], temperature: [] }
          };
        }
        let info = extractWeatherInfo(item);
        days[date][time] = info;
        let rangePointer = days[date].summary;
        rangePointer.status.push(info.status);
        rangePointer.statusIcon.push(info.statusIcon);
        rangePointer.wind.push(info.wind);
        rangePointer.humidity.push(info.humidity);
        rangePointer.temperature.push(info.temperature);
      }
    );

    //下一步是比较出min, max , worst
    Object.values(days).map(
      day => {
        let w = day.summary;
        if (w.wind.length > 1) w.wind = { min: w.wind.shift(), max: w.wind.pop() };
        if (w.humidity.length > 1) w.humidity = { min: w.humidity.shift(), max: w.humidity.pop() };
        if (w.temperature.length > 1) w.temperature = { min: w.temperature.shift(), max: w.temperature.pop() };
        if (w.status.length > 1) w.status = [... new Set(w.status)];
        if (w.statusIcon.length > 1) w.statusIcon = [... new Set(w.statusIcon)];

      }
    );


    // console.log(days);

    return days;
  };



}
export default weatherAPI;
