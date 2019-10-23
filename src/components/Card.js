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

    // isloading: PropTypes.bool
  }


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
      forecasts: {}
    }
  };


  async componentDidMount() {

    let currentWeather = await weatherAPI.getCurrentWeather(this.state.cityIndex);
    // var location = w.getLocaitonByIndex[this.state.cityIndex];

    const { status, statusIcon, humidity, wind, temperature } = currentWeather;

    let forecasts = await weatherAPI.getForecasts(this.state.cityIndex);
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
    console.log(this.props.weather);

    return (
      < div className="card" >
        < CardHeader currentWeather={this.state.currentWeather} cityIndex={this.state.cityIndex} />
        <CardBody forecasts={this.state.forecasts} />
      </div >
    )
  }
}


//takes in store state and return infomation as props to your component.
function mapStateToProps(state) {
  return {
    weather: state.weather
  };
}

export default connect(mapStateToProps)(Card);
