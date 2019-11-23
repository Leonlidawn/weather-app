import './styles/App.scss';

import sydney from './images/cityBackground/sydney.jpg'
import melbourne from './images/cityBackground/melbourne.jpg'
import brisbane from './images/cityBackground/brisbane.jpg'
import hongkong from './images/cityBackground/hongkong.jpg'
import guangzhou from './images/cityBackground/guangzhou.jpg'
import toronto from './images/cityBackground/toronto.jpg'
import auckland from './images/cityBackground/auckland.jpg'

import React from 'react';
import CardHeader from './components/Card/CardHeader';
import CardBody from './components/Card/CardBody';
import Todos from './components/Todos/Todos';
import { connect } from 'react-redux';
import { selectLocation } from './redux/actions';
import weatherAPI from "./services/weatherAPI"
// import moment from 'moment';
class App extends React.Component {

  constructor(props) {
    super(props);
  };

  changeBackgroundByLocation = (locationName) => {
    let app = document.querySelector(".app");
    let glass = document.querySelector("#blur-glass");
    let locationImage = null;
    switch (locationName) {
      case "Sydney": locationImage = sydney;
        break;
      case "Melbourne": locationImage = melbourne;
        break;
      case "Brisbane": locationImage = brisbane;
        break;
      case "Hong Kong": locationImage = hongkong;
        break;
      case "Guangzhou": locationImage = guangzhou;
        break;
      case "Toronto": locationImage = toronto;
        break;
      case "Auckland": locationImage = auckland;
        break;
      default: locationImage = sydney;
    }

    let newBackground = new Image();
    newBackground.src = locationImage;

    // 确定图片加载完成后再进行背景图片切换
    newBackground.onload = function () {

      app.style.backgroundImage = `url(${newBackground.src}) `;
      glass.style.backgroundImage = app.style.backgroundImage
    }


  };

  componentDidMount() {
    //default index is 0
    this.props.selectLocation(0);
  }

  render() {
    console.log(this.props.locationOptions[this.props.locationIndex]);
    if (!this.props.loading) {
      this.changeBackgroundByLocation(this.props.locationOptions[this.props.locationIndex].name);
    }

    let time = Math.round((Date.now() - this.props.lastUpdated) / 1000);
    let timeText = 'ago';
    if (time < 60) {
      if (time == 0) {
        timeText = ' just now ^_^';
      } else {
        timeText = time + ' sec ago';
      }

    } else {
      time = Math.round(time / 60);
      timeText = time + ' min ago';
    }



    return (
      <div className="app">
        <Todos />
        <span className="time-text">
          last updated:{timeText}
        </span>
        < div className="card" >
          <div id="blur-glass"></div>
          < CardHeader loading={this.props.loading} currentWeather={this.props.currentWeather} locationIndex={this.props.locationIndex} selectLocation={this.props.selectLocation} locationOptions={this.props.locationOptions} />
          <CardBody forecasts={this.props.forecasts} loading={this.props.loading} />
        </div >
      </div>
    )
  }
}


//takes in store state and return infomation as props to your component.
function mapStateToProps(state) {
  // console.log("maping state")
  let loadingMessage = "loading..."

  if (!state.weather.loading) {

    return {
      locationOptions: weatherAPI.getLocaitonList(),
      locationIndex: state.weather.locationIndex,

      currentWeather: state.weather.currentWeather,
      forecasts: state.weather.forecasts,

      loading: false,
      selectLocation: selectLocation,

      lastUpdated: state.weather.lastUpdated
    };
  }

  return {
    locationOptions: [],
    locationIndex: 0,
    lastUpdated: loadingMessage,
    currentWeather: {
      status: loadingMessage,
      statusIcon: loadingMessage,
      humidity: loadingMessage,
      wind: loadingMessage,
      temperature: loadingMessage,
    },
    forecasts: {},
    loading: true,


  }

}

export default connect(mapStateToProps, { selectLocation })(App);
//connect passes functions in second param, as an array
//this props are passed after componentdidmount and right before render.