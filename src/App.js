import React from 'react';
import './App.css';

function App() {
  return (
    <div className="app">
      <div className="card">
        <div className="cardHeader">

          <div className="currentWeather">

            <div className="basicDetails">
              <div className="temperature">12</div>
              <div className="status">cloudy</div>
            </div>

            <div className="additionalDetails">

              <div className="humidity">
                <div>humidity</div>
                <div>64</div>
              </div>

              <div className="wind">
                <div>wind</div>
                <div>12</div>
              </div>
            </div>

          </div>
          <div className="gap"></div>
          <div className="country">france</div>

        </div>

        <div className="cardBody">

          <div className="twitterFeedSection">

            <div className="twitterFeedSection-header">
              <div className="title">Twitter Feed</div>
              <div className="country">france</div>
            </div>
            <div className="twitterFeedSection-body">
              <div className="tweets">
                <div className="tweet">
                  <div className="avatar"></div>
                  <div className="tweetContent">tweet content </div>
                </div>
                <div className="tweet">
                  <div className="avatar"></div>
                  <div className="tweetContent">tweet content </div>
                </div>
                <div className="navigation">
                  <button>Next</button>
                </div>
              </div>
            </div>
          </div>

          <div className="weekDayDetails">

            <div className="weekDay">
              <div className="Day">mon</div>
              <image>image</image>
              <div className="temperature">9</div>
              <div className="status">raining</div>
            </div>
            <div className="weekDay">
              <div className="Day">tue</div>
              <image>image</image>
              <div className="temperature">9</div>
              <div className="status">raining</div>
            </div>
            <div className="weekDay">
              <div className="Day">wed</div>
              <image>image</image>
              <div className="temperature">9</div>
              <div className="status">raining</div>
            </div>
            <div className="weekDay">
              <div className="Day">thu</div>
              <image>image</image>
              <div className="temperature">9</div>
              <div className="status">raining</div>
            </div>
            <div className="weekDay">
              <div className="Day">fri</div>
              <image>image</image>
              <div className="temperature">9</div>
              <div className="status">raining</div>
            </div>
          </div>


        </div>

      </div>
    </div>
  );
}

export default App;
