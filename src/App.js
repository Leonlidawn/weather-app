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
              <section >
                <p className="current-info-temperature">12</p>
                <p className="current-info-status">cloudy</p>

                <ul>
                  <li className="current-info-humidity">
                    <h1>humidity</h1>
                    <p>64</p>
                  </li>

                  <li className="current-info-wind">
                    <h1>wind</h1>
                    <p>12</p>
                  </li>
                </ul>
              </section>

              <section className="current-info-country">france</section>
            </div>
          </div>

          <div className="card__body">

            <section className="twitter-feeds">

              <div className="twitter-feeds__header">

                <div className='a'><FontAwesomeIcon icon={faTwitter} style={{ display: "block", marginBottom: '0', marginRight: '0.5rem', fontSize: '1.3rem', color: 'rgb(114, 179, 223)' }} /></div>
                <h1>Twitter Feed</h1>
                <span className="twitter-feeds__country">france</span>
              </div>

              <ul className="tweets-list">
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

            <section className="weather-forcasts">
              <ul>
                <li className="forcast">
                  <h1 className="forcast-day">mon</h1>
                  <img src={weatherIcon} alt="weather icon" className="forcast-weatherIcon" />
                  <p className="forcast-temperature">9</p>
                  <p className="forcast-status">raining</p>
                </li>

                <li className="forcast">
                  <h1 className="forcast-day">tue</h1>
                  <img src={weatherIcon} alt="weather icon" className="forcast-weatherIcon" />
                  <p className="forcast-temperature">9</p>
                  <p className="forcast-status">raining</p>
                </li>

                <li className="forcast">
                  <h1 className="forcast-day">wed</h1>
                  <img src={weatherIcon} alt="weather icon" className="forcast-weatherIcon" />
                  <p className="forcast-temperature">9</p>
                  <p className="forcast-status">raining</p>
                </li>

                <li className="forcast">
                  <h1 className="forcast-day">thu</h1>
                  <img src={weatherIcon} alt="weather icon" className="forcast-weatherIcon" />
                  <p className="forcast-temperature">9</p>
                  <p className="forcast-status">raining</p>
                </li>

                <li className="forcast">
                  <h1 className="forcast-day">fri</h1>
                  <img src={weatherIcon} alt="weather icon" className="forcast-weatherIcon" />
                  <p className="forcast-temperature">9</p>
                  <p className="forcast-status">raining</p>
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
