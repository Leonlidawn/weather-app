import React from 'react';
import WeatherForecast from './WeatherForecast';


function CardBody({ forecast }) {
  //function component理由：这个变量是否是通过Props从父组件中获取？如果是，那么它不是一个状态。
  return (
    <div className="card__body">
      <div className="delimeter"></div>
      <WeatherForecast forecast={forecast} />
    </div>

  );
}
export default CardBody;



