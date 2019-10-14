import React from 'react';


function CardHeader(props) {
  const { current: { condition: { text, icon }, temp_c, humidity, wind_kph }, location: { country, name } } = props;

  return (
    <div className="card__header" >

      <div className="current-info" >
        <section className="current-info__weather">
          <p className="temperature">{temp_c}</p>
          <p className="status">{text}</p>

          <ul>
            <li >
              <h1>humidity</h1>
              <p className="humidity">{humidity}</p>
            </li>
            <li className="delimeter">
            </li>
            <li >
              <h1>wind</h1>
              <p className="wind">{wind_kph}</p>
            </li>
          </ul>
        </section>

        <section className="current-info__location">
          <p>{name}</p>
          <p>({country})</p>

        </section>
      </div>
    </div>
  );

}

export default CardHeader;

