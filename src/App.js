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
import weatherAPI from "./services/weatherAPI"
class App extends React.Component {

  constructor(props) {
    super(props);

    // let melbourne = "url(https://images5.alphacoders.com/366/thumb-1920-366259.jpg)";
    // let brisbane = "https://backgrounddownload.com/wp-content/uploads/2018/09/edificios-background-6.jpg";
    // //根据不同的index修改图片，最好对应locationOptions里的。
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
    app.style.backgroundImage = `url(${locationImage}) `;
    console.log(locationImage);

    glass.style.backgroundImage = app.style.backgroundImage
  };

  componentDidMount() {
    //default index is 0
    this.props.selectLocation(0);
    // changeBackgroundByLocation(locationOptions(locationIndex));


  }

  render() {
    console.log(this.props.locationOptions[this.props.locationIndex]);
    if (!this.props.loading) {
      this.changeBackgroundByLocation(this.props.locationOptions[this.props.locationIndex].name);
    }
    // console.log(this.state.forecasts);
    // console.log(this.props);
    return (
      <div className="app">
        < div className="card" >
          <div id="blur-glass"></div>
          < CardHeader currentWeather={this.props.currentWeather} locationIndex={this.props.locationIndex} selectLocation={this.props.selectLocation} locationOptions={this.props.locationOptions} />
          <CardBody forecasts={this.props.forecasts} />
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
      selectLocation: selectLocation

    };
  }

  return {
    locationOptions: [],
    locationIndex: 0,

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