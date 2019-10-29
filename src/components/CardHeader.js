import React from 'react';
import CityPicker from './CityPicker';
import moment from "moment";

function CardHeader({ currentWeather: { status: { description, icon }, humidity, wind, temperature },
  locationIndex, locationOptions, selectLocation, loading, lastUpdated }) {
  // console.log(locationIndex);
  // console.log(locationOptions);

  // if (loading) {
  //   icon = loadingSquare;
  // }
  return (
    <div className="card__header" >
      <span className="time"> last updated at {moment(lastUpdated).format("h:mma DD MMM")}</span>

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

          <img src={icon} alt="weather icon" className="icon" />

          <span className="status">{description}</span>

        </section>

        <section className="current-info__location">
          <CityPicker locationIndex={locationIndex} selectLocation={selectLocation} locationOptions={locationOptions} loading={loading} />
        </section>

      </div>
    </div>
  );

}

export default CardHeader;

