
import React from 'react';
import weatherAPI from "../services/weatherAPI"


class CityPicker extends React.Component {
  constructor({ cityIndex }) {
    super();

    this.options = (new weatherAPI()).getLocaitonList();

    ((new weatherAPI()).getForecasts(cityIndex));

    this.state = {
      selectedIndex: cityIndex
    };
  }

  handleChange = (e) => {
    e.preventDefault();
    // console.log("eC" + e.target.currentValue);
    // console.log("eT" + e.target.value);

    this.setState({ selectedIndex: e.target.value });
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


