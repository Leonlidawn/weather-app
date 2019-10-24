import React from 'react';
import CardHeader from './CardHeader';
import CardBody from './CardBody';
import weatherAPI from '../services/weatherAPI'
import { connect } from 'react-redux';
import { selectLocation } from '../redux/actions';
import PropTypes from 'prop-types'

// const locationIndex = useSelector(state => state.locationIndex);
// console.log(locationIndex);

class Card extends React.Component {
  //用static propTypes告诉react 这里应该接受什么properties为arguments
  static propTypes = {//https://medium.com/@assortedPickle/es6-static-properties-b7fd2a163328
    //   currentWeather: PropTypes.object.isRequired,
    // locationIndex: PropTypes.number.isRequired,

    //   forecasts:PropTypes.object.isRequired,

    loading: PropTypes.bool
  }



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
    // console.log(this.props);
    if (this.props.loading) {
      return < CardHeader currentWeather={this.props.currentWeather} cityIndex={this.props.cityIndex} />

    }
    console.log("this.props.loading=false", this.props.selectLocation);
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
    loading: true,
    selectLocation: selectLocation
  }

}

export default connect(mapStateToProps)(Card);
