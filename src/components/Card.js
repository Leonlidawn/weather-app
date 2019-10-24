import React from 'react';
import CardHeader from './CardHeader';
import CardBody from './CardBody';
import weatherAPI from '../services/weatherAPI'
import { connect } from 'react-redux';
import { selectLocation } from '../redux/actions';

class Card extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      cityIndex: 0,
      currentWeather: {
        status: this.loadingMessage,
        statusIcon: this.loadingMessage,
        humidity: this.loadingMessage,
        wind: this.loadingMessage,
        temperature: this.loadingMessage,
      },
      forecasts: {}
    }
  };

  render() {
    // console.log(this.state.forecasts);
    console.log(this.props);
    return (
      < div className="card" >
        < CardHeader currentWeather={this.props.currentWeather} cityIndex={this.props.cityIndex} selectLocation={this.props.selectLocation} />
        <CardBody forecasts={this.props.forecasts} />
      </div >
    )
  }
}


//takes in store state and return infomation as props to your component.
function mapStateToProps(state) {
  // console.log("maping state")
  let loadingMessage = "loading..."

  if (!state.weather.loading) {

    return {
      currentWeather: state.weather.currentWeather,
      forecasts: state.weather.forecasts,
      locationIndex: state.weather.locationIndex,
      loading: false,
      selectLocation: selectLocation

    };
  }

  return {
    cityIndex: 0,
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

export default connect(mapStateToProps, { selectLocation })(Card);
