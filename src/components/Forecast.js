import React from 'react';
import moment from "moment";

function Forecast({ date, forecast }) {

  console.log(forecast);

  const { status, temperature } = forecast.summary;
  return (
    <li className="forecast" >
      <h1 className="forecast__day">{moment(date).format("ddd, DD MMM")}</h1>
      <p className=" temperature forecast__temperature">{temperature.min}/{temperature.max}</p>

      {Object.entries(status).sort().map(
        s =>
          <div key={s[1].description} className="forecast__period">
            <div>
              <img src={s[1].icon} alt="weather icon" className="weatherIcon" />
              <span className="ratio">{Math.round((s[1].occurance) / forecast.totalPeriods * 100)}</span>
            </div>
            <p className="status">{s[1].description} </p>
          </div>
      )
      }

    </li>

  );

}
export default Forecast;


