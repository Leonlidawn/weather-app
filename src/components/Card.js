import React from 'react';
import CardHeader from './CardHeader';
import CardBody from './CardBody';
class Card extends React.Component {
  constructor() {
    super();
    this.state = {
      weatherforecast: [],
    }
  };

  render() {
    // console.log(this.state.weatherforecast);


    return (
      < div className="card" >
        < CardHeader />

        {/* <CardBody forecast={this.state.weatherforecast} /> */}
      </div >
    )
  }
}

export default Card;

