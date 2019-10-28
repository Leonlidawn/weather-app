import React from 'react';
import Forecast from './Forecast';
import loadingImage from '../images/loading.gif';

function Forecasts({ forecasts, loading }, ) {
  let array = Object.entries(forecasts);

  if (loading !== false) {

    return <div className="forecasts">
      <img src={loadingImage} className="loadingIcon" />
    </div>
  }

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