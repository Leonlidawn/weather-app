//change city

import React from 'react';

class CityPicker extends React.Component {
  constructor() {
    super();

    this.australia = { name: "Australia", code: "AU" };
    this.china = { name: "China", code: "CN" };
    this.canada = { name: "Canada", code: "CA" };
    this.newZealand = { name: "New Zealand", code: "CK" };

    this.options = [
      { name: "Sydney", country: this.australia },
      { name: "Melbourne", country: this.australia },
      { name: "Brisbane", country: this.australia },
      { name: "Hongkong", country: this.china },
      { name: "Guangzhou", country: this.china },
      { name: "Toronto", country: this.canada },
      { name: "Auckland", country: this.newZealand }
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

  //when have array as option list, passing the index as select value is easier
  render() {
    return (
      <label>
        <select value={this.state.slectedIndex} onChange={this.handleChange} searchable="true">
          {this.options.map(
            item => <option value={this.options.indexOf(item)} > {item.name}, {item.country.name}</option>
          )
          }
        </select>
      </label >

    )
  }
}

export default CityPicker;