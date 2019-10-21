import React from 'react';
import Forecast from './Forecast';


function Forecasts({ forecasts }) {

  return (

    < ul className="weather-forecasts" >
      {
        Object.entries(forecasts).map(
          item => (
            <Forecast date={item[0]} forecast={item[1]} />
          )
        )
      }
    </ul >
  );

}


export default Forecasts;