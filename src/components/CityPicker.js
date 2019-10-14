//change city

import React from 'react';

class CityPicker extends React.Component {
  constructor() {
    super();
    this.options = [
      { name: "Sydney", country: "Australia" },
      { name: "Melbourne", country: "Australia" },
      { name: "Hongkong", country: "China" },
      { name: "Guangzhou", country: "China" },
      { name: "Toronto", country: "Canada" },
      { name: "Auckland", country: "New Zealand" },
    ];

    this.state = {
      selectedIndex: 0
    };
  }

  handleChange = (e) => {
    e.preventDefault();

    console.log(e.target.currentValue);
    console.log(e.target.value);

    this.setState({ slectedIndex: e.target.value });
  }

  //passing the index as select value is easier
  render() {
    return (
      <label>
        <select value={this.state.slectedIndex} onChange={this.handleChange}>
          {this.options.map(
            item => <option value={this.options.indexOf(item)} > {item.name}, {item.country}</option>
          )
          }
        </select>
      </label >

    )
  }
}

export default CityPicker;