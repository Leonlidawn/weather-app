import React from 'react';
import weatherIcon from '../images/weatherIcon.svg';


function WeatherForcast() {
  return (
    <ul className="weather-forcasts">
      <li className="forcast">
        <h1 className="forcast__day">mon</h1>
        <img src={weatherIcon} alt="weather icon" className="forcast__weatherIcon" />
        <p className=" temperature forcast__temperature">9</p>
        <p className="forcast__status">raining</p>
      </li>

      <li className="forcast">
        <h1 className="forcast__day">tue</h1>
        <img src={weatherIcon} alt="weather icon" className="forcast__weatherIcon" />
        <p className="temperature forcast__temperature">9</p>
        <p className="forcast__status">raining</p>
      </li>
      <div className="break"></div>

      <li className="forcast">
        <h1 className="forcast__day">wed</h1>
        <img src={weatherIcon} alt="weather icon" className="forcast__weatherIcon" />
        <p className="temperature forcast__temperature">9</p>
        <p className="forcast__status">raining</p>
      </li>

      <li className="forcast">
        <h1 className="forcast__day">thu</h1>
        <img src={weatherIcon} alt="weather icon" className="forcast__weatherIcon" />
        <p className="temperature forcast__temperature">9</p>
        <p className="forcast__status">raining</p>
      </li>

      <li className="forcast">
        <h1 className="forcast__day">fri</h1>
        <img src={weatherIcon} alt="weather icon" className="forcast__weatherIcon" />
        <p className=" temperature forcast__temperature">9</p>
        <p className="forcast__status">raining</p>
      </li>
    </ul>



  );
}

export default WeatherForcast;