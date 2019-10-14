import React from 'react';

import CardHeader from './CardHeader';
import CardBody from './CardBody';
import CityPicker from './CityPicker';
import axios from 'axios';
// 组件中用到的一个变量是不是应该作为组件State，可以通过下面的4条依据进行判断：

// 这个变量是否是通过Props从父组件中获取？如果是，那么它不是一个状态。
// 这个变量是否在组件的整个生命周期中都保持不变？如果是，那么它不是一个状态。
// 这个变量是否可以通过其他状态（State）或者属性(Props)计算得到？如果是，那么它不是一个状态。
// 这个变量是否在组件的render方法中使用？如果不是，那么它不是一个状态。这种情况下，这个变量更适合定义为组件的一个普通属性，例如组件中用到的定时器，就应该直接定义为this.timer，而不是this.state.timer。

//https://home.agromonitoring.com/api_keys
//http://api.openweathermap.org/data/2.5/forecast?id=524901&APPID={a1cdbf6d63c7fbf4292dc8b3ea93e6df}
//api.openweathermap.org/data/2.5/forecast?q={city name},{country code}

class Card extends React.Component {
  constructor() {
    super();
    this.state = {
      weatherforecast: [],
      currentWeather: [],
      location: { country: "", name: "Paris" },
      isloading: true
    }
    this.days = 5;
    // this.access_key = "10f6bba323c86c63e58fa6a0e3357eb1";
    this.key = "1eb8b1de06614af3a3423418171609";
    this.hourly = 1;
    // this.apiAddress = 'http://api.weatherstack.com/forecast?access_key=' + this.access_key + '&query=' + this.state.location.name;
    this.apiAddress = 'https://api.apixu.com/v1/forecast.json'
    // https://api.apixu.com/v1/forecast.json?days=3&key=1eb8b1de06614af3a3423418171609&q=Paris
  };


  async componentDidMount() {
    // console.log("4.1 componentdidmound");

    const res = await axios.get(this.apiAddress, {
      params: {
        key: this.key,
        q: this.state.location.name,
        days: this.days,
      }
    });

    //es6语法，在展开同时定义每个值最深层的同名variable， 这里我们定义了current, forecast, name ,country
    const { data: { current, forecast: { forecastday }, location: { country, name } } } = res;

    //setState triggers render immediately
    this.setState({
      currentWeather: current,
      weatherforecast: forecastday,
      location: { country, name },
      isloading: false
    });

    console.log("4.4 componentdidmound"); //will execute after render() was triggered and executed by setstate

  }

  render() {
    // console.log(this.state.weatherforecast);
    if (this.state.isloading) {
      console.log("1 still loading");
      return null;
    }
    else {
      console.log("2 loaded");
      return (
        <div className="card">
          <CityPicker />
          <CardHeader current={this.state.currentWeather} location={this.state.location} />

          <CardBody forecast={this.state.weatherforecast} />
        </div>
      );
    }
  }
}

export default Card;

