import React from 'react';
import Forecasts from './Forecasts';


function CardBody({ forecasts, loading }) {
  //function component理由：这个变量是否是通过Props从父组件中获取？如果是，那么它不是一个状态。
  console.log(loading);

  // console.log(forecasts);
  return (
    <div className="card__body">
      {/* <div className="delimeter"></div> */}
      <Forecasts forecasts={forecasts} loading={loading} />
    </div>

  );
}
export default CardBody;



