import React from 'react';

function Forcast({ props }) {
  return (
    <>
      <li className="forcast">
        <h1 className="forcast__day">{props.day}</h1>
        <img src={props.weatherIcon} alt="weather icon" className="forcast__weatherIcon" />
        <p className=" temperature forcast__temperature">{props.temperature}</p>
        <p className="forcast__status">{props.status}</p>
      </li>
    </>

  );

}
export default Forcast;


