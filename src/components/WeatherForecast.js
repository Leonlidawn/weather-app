import React from 'react';
import Forecast from './Forecast';


function WeatherForecast({ forecast }) {
  const data = forecast;

  return (
    < ul className="weather-forecasts" >
      {
        data.map(
          item => (
            <Forecast key={item.date_epoch} props={item} />
          )
        )
      }
    </ul >
  );

}


export default WeatherForecast;