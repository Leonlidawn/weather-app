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
            <div className="current-info">
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

          <div className="card__body">

            <section className="twitter-feeds">

              <div className="twitter-feeds__header">

                <span><FontAwesomeIcon icon={faTwitter} /></span>
                <h1>Twitter Feed</h1>
                <span className="twitter-feeds__country">france</span>
              </div>

              <ul className="twitter-feeds__tweets-list">
                <li className="tweet">
                  <img src={avatarIcon} alt="avatar" className="tweet__avatar" />
                  <p className="tweet__content">tw09io23qndalskcn[09  eet content </p>
                </li>
                <li className="tweet">
                  <img src={avatarIcon} alt="avatar" className="tweet__avatar" />
                  <p className="tweet__content">twee0[9q2ipon3lkv fsa[9-0 pq23i;ontvt content </p>
                </li>
                <li className="tweet">
                  <img src={avatarIcon} alt="avatar" className="tweet__avatar" />
                  <p className="tweet__content">twee0asfas  2oi'nf2fon'piqnfpinln'pacns'p3nq''npio'n [9q2ipon3lkv fsa[9-0 pq23i;ontvt content </p>
                </li>
              </ul>

              <button className="twitter-feeds__next-button">next</button>
            </section>

            <div className="delimeter"></div>

            <ul className="weather-forcasts">
              <li className="forcast">
                <h1 className="forcast__day">mon</h1>
                <img src={weatherIcon} alt="weather icon" className="forcast__weatherIcon" />
                <p className=" temperature forcast__temperature">9</p>
                <p className="forcast__status">raining</p>
              </li>

              <li className="forcast">
                <h1 className="forcast__day">tue</h1>
                <img src={weatherIcon} alt="weather icon" className="forcast__weatherIcon" />
                <p className="temperature forcast__temperature">9</p>
                <p className="forcast__status">raining</p>
              </li>
              <div className="break"></div>

              <li className="forcast">
                <h1 className="forcast__day">wed</h1>
                <img src={weatherIcon} alt="weather icon" className="forcast__weatherIcon" />
                <p className="temperature forcast__temperature">9</p>
                <p className="forcast__status">raining</p>
              </li>

              <li className="forcast">
                <h1 className="forcast__day">thu</h1>
                <img src={weatherIcon} alt="weather icon" className="forcast__weatherIcon" />
                <p className="temperature forcast__temperature">9</p>
                <p className="forcast__status">raining</p>
              </li>

              <li className="forcast">
                <h1 className="forcast__day">fri</h1>
                <img src={weatherIcon} alt="weather icon" className="forcast__weatherIcon" />
                <p className=" temperature forcast__temperature">9</p>
                <p className="forcast__status">raining</p>
              </li>
            </ul>
          </div>
        </div>
      </main>
    </div>
  );
}

export default App;
