import React from 'react';
import weatherIcon from '../images/weatherIcon.svg';
import Forcast from './Forecast';

function WeatherForcast() {

  const data = [
    {
      day: "mon",
      weatherIcon: weatherIcon,
      temperature: '12',
      status: "raining",
    },
    {
      day: "tue",
      weatherIcon: weatherIcon,
      temperature: '9',
      status: "raining",
    },
    {
      day: "wed",
      weatherIcon: weatherIcon,
      temperature: '-1',
      status: "raining",
    },
    {
      day: "thur",
      weatherIcon: weatherIcon,
      temperature: '30',
      status: "raining",
    },
    {
      day: "fri",
      weatherIcon: weatherIcon,
      temperature: '42',
      status: "raining",
    },
  ]
    ;


  return (
    <ul className="weather-forcasts">
      {
        data.slice(0, 2).map(
          item => (
            <Forcast props={item} />
          )
        )
      }
      <div className="break"></div>
      {
        data.slice(2).map(
          item => (
            <Forcast props={item} />
          )
        )
      }
    </ul>



  );
}

export default WeatherForcast;