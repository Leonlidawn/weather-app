
import React from 'react';
import weatherAPI from "../services/weatherAPI"


class CityPicker extends React.Component {
  constructor({ cityIndex, selectLocation }) {
    super();

    this.options = weatherAPI.getLocaitonList();

    // weatherAPI.getForecasts(cityIndex);

    this.state = {
      selectedIndex: cityIndex
    };
  }

  componentDidMount() {
    this.props.selectLocation(this.props.cityIndex);
  }

  handleChange = (e) => {
    e.preventDefault();
    // console.log("eC" + e.target.currentValue);
    // console.log("eT" + e.target.value);

    this.setState({ selectedIndex: e.target.value });
    console.log(typeof (this.props.selectLocation));
    this.props.selectLocation(e.target.value);
  }

  //when have array as option list, passing the index as select value is easier
  render() {
    // console.log("slected:" + this.state.selectedIndex);
    return (
      <label>
        <select value={this.state.selectedIndex} onChange={this.handleChange} searchable="true">
          {this.options.map(
            item => <option key={this.options.indexOf(item)} value={this.options.indexOf(item)} > {item.name}, {item.country.name}</option>
          )
          }
        </select>
      </label >

    )
  }
}

export default CityPicker;


//这里需要传进一个Function,是selectLocation