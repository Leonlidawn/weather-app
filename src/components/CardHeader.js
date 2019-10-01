import React from 'react';


function CardHeader() {

  return (
    <div className="card__header" >

      <div className="current-info" >
        <section className="current-info__weather">
          <p className="temperature">12</p>
          <p className="status">cloudy</p>

          <ul>
            <li >
              <h1>humidity</h1>
              <p className="humidity">64</p>
            </li>
            <li className="delimeter">
            </li>
            <li >
              <h1>wind</h1>
              <p className="wind">12</p>
            </li>
          </ul>
        </section>

        <section className="current-info__country">france</section>
      </div>
    </div>
  );

}

export default CardHeader;

