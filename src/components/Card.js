import React from 'react';
import CardHeader from './CardHeader';
import CardBody from './CardBody';
import WeatherAPI from '../services/weatherAPI'

class Card extends React.Component {
  loadingMessage = "loading..."

  constructor() {
    super();
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
      weatherforecast: {}
    }
  };


  async componentDidMount() {
    var w = new WeatherAPI();
    var currentWeather = await w.getCurrentWeather(2);
    var location = (await w.getLocaitonList())[0];

    const { status, statusIcon, humidity, wind, temperature } = currentWeather;
    this.setState(
      {
        currentWeather: { status, statusIcon, humidity, wind, temperature },
        isloading: false
      }
    );

  }

  render() {
    // console.log(this.state.weatherforecast);


    return (
      < div className="card" >
        < CardHeader currentWeather={this.state.currentWeather} cityIndex={this.state.cityIndex} />

        {/* <CardBody weatherforecast={this.state.weatherforecast} /> */}
      </div >
    )
  }
}

export default Card;

