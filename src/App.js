import './styles/App.css';

import sydney from './images/cityBackground/sydney.jpg'
import melbourne from './images/cityBackground/melbourne.jpg'
import brisbane from './images/cityBackground/brisbane.jpg'
import hongkong from './images/cityBackground/hongkong.jpg'
import guangzhou from './images/cityBackground/guangzhou.jpg'
import toronto from './images/cityBackground/toronto.jpg'
import auckland from './images/cityBackground/auckland.jpg'

import React from 'react';
import CardHeader from './components/CardHeader';
import CardBody from './components/CardBody';
import { connect } from 'react-redux';
import { selectLocation } from './redux/actions';

import loadingSquare from './images/loadingSquare.gif';

import weatherAPI from "./services/weatherAPI"

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
    if (!this.props.loading) {
      this.changeBackgroundByLocation(this.props.locationOptions[this.props.locationIndex].name);
    }
    return (
      <div className="app">

        < div className="card" >
          <div id="blur-glass"></div>
          < CardHeader lastUpdated={this.props.lastUpdated} loading={this.props.loading} currentWeather={this.props.currentWeather} locationIndex={this.props.locationIndex} selectLocation={this.props.selectLocation} locationOptions={this.props.locationOptions} />
          <CardBody forecasts={this.props.forecasts} loading={this.props.loading} />
        </div >
      </div>
    )
  }
}


//takes in store state and return infomation as props to your component.
function mapStateToProps(state) {
  // console.log("maping state")
  let loadingMessage = "..."

  if (!state.weather.loading) {
    console.log(state.weather.lastUpdated);
    return {
      locationOptions: weatherAPI.getLocaitonList(),
      locationIndex: state.weather.locationIndex,

      currentWeather: state.weather.currentWeather,
      forecasts: state.weather.forecasts,
      lastUpdated: state.weather.lastUpdated,

      loading: false,
      selectLocation: selectLocation

    };
  }

  return {
    locationOptions: [],
    locationIndex: 0,

    currentWeather: {
      status: { description: "", icon: loadingSquare },
      humidity: loadingMessage,
      wind: loadingMessage,
      temperature: loadingMessage,
    },
    forecasts: {},
    loading: true,
    lastUpdated: loadingMessage



  }

}

export default connect(mapStateToProps, { selectLocation })(App);
//connect passes functions in second param, as an array
//this props are passed after componentdidmount and right before render.