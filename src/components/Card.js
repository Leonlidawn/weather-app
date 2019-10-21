import React from 'react';
import CardHeader from './CardHeader';
import CardBody from './CardBody';
import WeatherAPI from '../services/weatherAPI'

class Card extends React.Component {
  loadingMessage = "loading..."

  constructor() {
    super();
    this.weatherAPI = new WeatherAPI();
    this.state = {
      cityIndex: 0,
      currentWeather: {
        status: this.loadingMessage,
        statusIcon: this.loadingMessage,
        humidity: this.loadingMessage,
        wind: this.loadingMessage,
        temperature: this.loadingMessage,
      },
      isloading: true,
      forecasts: {}
    }
  };


  async componentDidMount() {
    let currentWeather = await this.weatherAPI.getCurrentWeather(this.state.cityIndex);
    // var location = w.getLocaitonByIndex[this.state.cityIndex];

    const { status, statusIcon, humidity, wind, temperature } = currentWeather;

    let forecasts = await this.weatherAPI.getForecasts(this.state.cityIndex);
    this.setState(
      {
        currentWeather: { status, statusIcon, humidity, wind, temperature },
        forecasts: forecasts,
        isloading: false
      }
    );


  }

  render() {
    // console.log(this.state.forecasts);


    return (
      < div className="card" >
        < CardHeader currentWeather={this.state.currentWeather} cityIndex={this.state.cityIndex} />
        <CardBody forecasts={this.state.forecasts} />
      </div >
    )
  }
}

export default Card;

