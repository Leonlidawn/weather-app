import './styles/App.css';

import React from 'react';
import CardHeader from './components/CardHeader';
import CardBody from './components/CardBody';
import { connect } from 'react-redux';
import { selectLocation } from './redux/actions';
import weatherAPI from "./services/weatherAPI"

class App extends React.Component {

  constructor(props) {
    super(props);
  };
  componentDidMount() {
    //default index is 0
    this.props.selectLocation(0);
  }
  render() {
    // console.log(this.state.forecasts);
    console.log(this.props);
    return (
      <div className="app">
        < div className="card" >
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