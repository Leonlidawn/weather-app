import React from 'react';
import './App.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTwitter } from '@fortawesome/free-brands-svg-icons'

//placeholders ==========
import weatherIcon from './images/weathericon.svg';
import avatarIcon from './images/avatar.svg';
//             ==========


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

              <div className="delimeter">
                |
              </div>

              <div className="wind">
                <div>wind</div>
                <div>12</div>
              </div>
            </div>

          </div>
          <div className="country">france</div>

        </div>

        <div className="cardBody">

          <div className="twitterFeedSection">

            <div className="twitterFeedSection-header">

              <div className='a'><FontAwesomeIcon icon={faTwitter} style={{ display: "block", marginBottom: '0', marginRight:'0.5rem', fontSize:'1.3rem', color: 'rgb(114, 179, 223)' }} /></div>
              <div className="title">Twitter Feed</div>
              <div className="country">france</div>
            </div>
            <div className="twitterFeedSection-body">
              <div className="tweets">
                <div className="tweet">
                  <img src={avatarIcon} alt="avatar" className="avatar" />
                  <div className="tweetContent">tw09io23qndalskcn[09  eet content </div>
                </div>
                <div className="tweet">
                  <img src={avatarIcon} alt="avatar" className="avatar" />
                  <div className="tweetContent">twee0[9q2ipon3lkv fsa[9-0 pq23i;ontvt content </div>
                </div>
                <div className="tweet">
                  <img src={avatarIcon} alt="avatar" className="avatar" />
                  <div className="tweetContent">twee0asfas  2oi'nf2fon'piqnfpinln'pacns'p3nq''npio'n [9q2ipon3lkv fsa[9-0 pq23i;ontvt content </div>
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
              <img src={weatherIcon} alt="weather icon" className="weatherIcon" />
              <div className="temperature">9</div>
              <div className="status">raining</div>
            </div>
            <div className="weekDay">
              <div className="Day">tue</div>
              <img src={weatherIcon} alt="weather icon" className="weatherIcon" />
              <div className="temperature">9</div>
              <div className="status">raining</div>
            </div>
            <div className="weekDay">
              <div className="Day">wed</div>
              <img src={weatherIcon} alt="weather icon" className="weatherIcon" />
              <div className="temperature">9</div>
              <div className="status">raining</div>
            </div>
            <div className="weekDay">
              <div className="Day">thu</div>
              <img src={weatherIcon} alt="weather icon" className="weatherIcon" />
              <div className="temperature">9</div>
              <div className="status">raining</div>
            </div>
            <div className="weekDay">
              <div className="Day">fri</div>
              <img src={weatherIcon} alt="weather icon" className="weatherIcon" />
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
