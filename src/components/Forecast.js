import React from 'react';
import moment from "moment";

function Forecast({ date, forecast }) {

  console.log(forecast);
  const { humidity, status, statusIcon, temperature, wind } = forecast.summary;
  return (
    <>
      <li className="forecast" >
        <h1 className="forecast__day">{moment(date).format("ddd, DD MMM")}</h1>
        <img src={statusIcon[0]} alt="weather icon" className="forecast__weatherIcon" />
        <p className=" temperature forecast__temperature">{temperature.min}/{temperature.max}</p>
        <p className="forecast__status">{status[0]}</p>
      </li>

    </>

  );

}
export default Forecast;


