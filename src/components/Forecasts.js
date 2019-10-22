import React from 'react';
import Forecast from './Forecast';
import uuid from 'uuid/v4';

function Forecasts({ forecasts }) {
  let id = uuid();
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