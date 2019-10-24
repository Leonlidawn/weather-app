import React from 'react';
import Forecast from './Forecast';

function Forecasts({ forecasts, loading }, ) {
  let array = Object.entries(forecasts);

  return (
    < ul className="forecasts" >
      {
        array.map(
          (item) => (
            <Forecast key={item[0]} date={item[0]} forecast={item[1]} />
          )
        )
      }
    </ul >
  );

}


export default Forecasts;