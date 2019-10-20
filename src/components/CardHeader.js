import React from 'react';
import CityPicker from './CityPicker';
function CardHeader({ currentWeather: { status, statusIcon, humidity, wind, temperature }, cityIndex }) {
  return (
    <div className="card__header" >

      <div className="current-info" >
        <section className="current-info__basic">
          <p className="temperature">{temperature} </p>

          <ul>
            <li >
              <h1>humidity</h1>
              <p className="humidity">{humidity}</p>
            </li>
            <li className="delimeter">
            </li>
            <li >
              <h1>wind</h1>
              <p className="wind">{wind}</p>
            </li>
          </ul>
        </section>

        <section className="current-info__status">
          <img src={statusIcon} alt="weather icon" className="icon" />
          <span className="status">{status}</span>
        </section>

        <section className="current-info__location">
          <CityPicker cityIndex={cityIndex} />
        </section>
      </div>
    </div>
  );

}

export default CardHeader;

