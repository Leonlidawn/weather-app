import React from 'react';
import WeatherAPI from '../services/weatherAPI'
import CityPicker from './CityPicker';
class CardHeader extends React.Component {
  loadingMessage = "loading..."
  constructor() {
    super();
    this.state = {
      status: this.loadingMessage,
      statusIcon: this.loadingMessage,
      humidity: this.loadingMessage,
      wind: this.loadingMessage,
      temperature: this.loadingMessage,
      isloading: true
    }
  }

  async componentDidMount() {
    var w = new WeatherAPI();
    var currentWeather = await w.getCurrentWeather();
    var location = (await w.getLocaitonList())[0];

    const { status, statusIcon, humidity, wind, temperature } = currentWeather;
    this.setState({
      status: status,
      statusIcon: statusIcon,
      humidity: humidity,
      wind: wind,
      temperature: temperature,
      isloading: false
    });

  }

  render() {
    const { status, statusIcon, humidity, wind, temperature } = this.state;
    const city = "Sydney";
    const country = "Australia";

    return (
      <div className="card__header" >

        <div className="current-info" >
          <section className="current-info__basic">
            <p className="temperature">{temperature} </p>

            <ul>
              <li >
                <h1>humidity</h1>
                <p className="humidity">{humidity}</p>
              </li>
              <li className="delimeter">
              </li>
              <li >
                <h1>wind</h1>
                <p className="wind">{wind}</p>
              </li>
            </ul>
          </section>

          <section className="current-info__status">
            <img src={statusIcon} alt="weather icon" className="icon" />
            <span className="status">{status}</span>
          </section>

          <section className="current-info__location">
            {/* <p>{city}</p>
            <p>{country}</p> */}
            <CityPicker />
          </section>
        </div>
      </div>
    );
  }
}

export default CardHeader;

