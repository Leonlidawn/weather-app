
import React from 'react';
import weatherAPI from "../services/weatherAPI"

//when have array as option list, passing the index as select value is easier
function CityPicker({ locatonIndex, locationOptions, selectLocation }) {

  const handleChange = (e) => {
    // console.log("eC" + e.target.currentValue);
    // console.log("eT" + e.target.value);
    e.preventDefault();
    selectLocation(e.target.value);
  }

  let options = locationOptions;

  return (
    <label>
      <select value={locatonIndex} onChange={handleChange} searchable="true">
        {options.map(
          item => <option key={options.indexOf(item)} value={options.indexOf(item)} > {item.name}, {item.country.name}</option>
        )
        }
      </select>
    </label >
  )
}
export default CityPicker;