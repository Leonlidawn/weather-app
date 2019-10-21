import React from 'react';
import moment from "moment";

function Forecast({ date, forecast }) {

  console.log(date);
  return (
    <>
      <li className="forecast" >
        <h1 className="forecast__day">{moment(date).format("ddd, DD MMM")}</h1>
        {/* <img src={props.day.condition.icon} alt="weather icon" className="forecast__weatherIcon" />
        <p className=" temperature forecast__temperature">{props.day.avgtemp_c}</p>
        <p className="forecast__status">{props.day.condition.text}</p> */}
      </li>

    </>

  );

}
export default Forecast;


