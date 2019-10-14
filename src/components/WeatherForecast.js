import React from 'react';
import weatherIcon from '../images/weatherIcon.svg';
import Forecast from './Forecast';


function WeatherForecast({ forecast }) {
  const data = forecast;

  return (
    < ul className="weather-forecasts" >
      {
        data.slice(0, 2).map(
          item => (
            <Forecast key={item.date_epoch} props={item} />
          )
        )
      }
      < div className="break" ></div >
      {
        data.slice(2).map(
          item => (
            <Forecast key={item.date_epoch} props={item} />
          )
        )
      }
    </ul >
  );

}


export default WeatherForecast;