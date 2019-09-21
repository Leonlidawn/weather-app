import React from 'react';
import './App.css';

function App() {
  return (
    <div className="app">
      <div className="cardHeader">

        <div className="currentWeather">

          <div className="basicDetails">
            <div className="temperature">12</div>
            <div className="status">cloudy</div>
          </div>

          <div className="additionalDetails">
            <div className="humidity">
              <div>HUMIDITY</div>
              <div>64</div>

            </div>
            <div className="wind">
              <div>WIND</div>
              <div>12</div>
            </div>
          </div>

        </div>
        <div className="gap"></div>
        <div className="country">france</div>

      </div>

      <div className="cardBody">

        <div className="twitterFeedSection">
          <div className="header">
            <div className="title">Twitter Feed</div>
            <div className="country">france</div>
          </div>
          <div className="body">
            <div className="tweets">
              <div className="tweet">tweet content </div>
              <div className="tweet">tweet content </div>
            </div>
            <button className="navigation">Next</button>
          </div>
        </div>

        <div className="weekDayDetails">
          <div className="weekDay">mon</div>
          <div className="weekDay">tue</div>
          <div className="weekDay">wed</div>
          <div className="weekDay">thu</div>
          <div className="weekDay">fri</div>
        </div>


      </div>
    </div>
  );
}

export default App;
