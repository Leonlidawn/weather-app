import React from 'react';
import './App.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTwitter } from '@fortawesome/free-brands-svg-icons'

//placeholders ==========
import weatherIcon from './images/weatherIcon.svg';
import avatarIcon from './images/avatar.svg';
//             ==========


function App() {
  return (
    <div className="app">
      <main>
        <div className="card">
          <div className="card__header">
            <section className="card__header__current-weather">
              <div>
                <p className="temperature">12</p>
                <p className="status">cloudy</p>
              </div>
              <ul>
                <li className="humidity">
                  <h1>humidity</h1>
                  <p>64</p>
                </li>

                <li className="wind">
                  <h1>wind</h1>
                  <p>12</p>
                </li>
              </ul>
            </section>

            <section className="card__header__current-country">france</section>

          </div>

          <div className="card__body">

            <section className="card__body_twitterFeeds">

              <div className="twitterFeeds__header">

                <div className='a'><FontAwesomeIcon icon={faTwitter} style={{ display: "block", marginBottom: '0', marginRight: '0.5rem', fontSize: '1.3rem', color: 'rgb(114, 179, 223)' }} /></div>
                <h1>Twitter Feed</h1>
                <span className="country">france</span>
              </div>
              <div className="twitterFeeds__body">
                <ul className="tweets">
                  <li className="tweet">
                    <img src={avatarIcon} alt="avatar" className="avatar" />
                    <p className="tweetContent">tw09io23qndalskcn[09  eet content </p>
                  </li>
                  <li className="tweet">
                    <img src={avatarIcon} alt="avatar" className="avatar" />
                    <p className="tweetContent">twee0[9q2ipon3lkv fsa[9-0 pq23i;ontvt content </p>
                  </li>
                  <li className="tweet">
                    <img src={avatarIcon} alt="avatar" className="avatar" />
                    <p className="tweetContent">twee0asfas  2oi'nf2fon'piqnfpinln'pacns'p3nq''npio'n [9q2ipon3lkv fsa[9-0 pq23i;ontvt content </p>
                  </li>
                </ul>
                <button>Next</button>
              </div>
            </section>

            <section className="card__body__weather-forcasts">
              <ul>
                <li className="weather-forcasts__day">
                  <h1>mon</h1>
                  <img src={weatherIcon} alt="weather icon" className="weatherIcon" />
                  <p className="temperature">9</p>
                  <p className="status">raining</p>
                </li>
                <li className="weekDay">
                  <h1>tue</h1>
                  <img src={weatherIcon} alt="weather icon" className="weatherIcon" />
                  <p className="temperature">9</p>
                  <p className="status">raining</p>
                </li>

                <div className="weekdayBreak1024"></div>

                <li className="weekDay">
                  <h1>wed</h1>
                  <img src={weatherIcon} alt="weather icon" className="weatherIcon" />
                  <p className="temperature">9</p>
                  <p className="status">raining</p>
                </li>
                <li className="weekDay">
                  <h1 >thu</h1>
                  <img src={weatherIcon} alt="weather icon" className="weatherIcon" />
                  <p className="temperature">9</p>
                  <p className="status">raining</p>
                </li>
                <li className="weekDay">
                  <h1 >fri</h1>
                  <img src={weatherIcon} alt="weather icon" className="weatherIcon" />
                  <p className="temperature">9</p>
                  <p className="status">raining</p>
                </li>
              </ul>
            </section>
          </div>
        </div>
      </main>
    </div>
  );
}

export default App;
