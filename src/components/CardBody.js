import React from 'react';
import TwitterFeed from './TwitterFeed';
import WeatherForcast from './WeatherForcast';


function CardBody() {

  return (

    <div className="card__body">
      <TwitterFeed />
      <div className="delimeter"></div>
      <WeatherForcast />
    </div>

  );
}
export default CardBody;



