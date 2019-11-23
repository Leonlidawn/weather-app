
import React from 'react';
// import loading from '../images/loading.gif';
import loadingImage from '../../images/mapMarker.gif';


//when have array as option list, passing the index as select value is easier
function CityPicker({ locatonIndex, locationOptions, selectLocation, loading }) {

  const handleChange = (e) => {
    // console.log("eC" + e.target.currentValue);
    // console.log("eT" + e.target.value);
    e.preventDefault();
    selectLocation(e.target.value);
  }
  if (loading !== false) {

    return <div className="forecasts">
      <img src={loadingImage} className="loadingIcon" />
    </div>
  }
  return (
    <label>
      <select value={locatonIndex} onChange={handleChange} searchable="true">
        {locationOptions.map(
          item => <option key={locationOptions.indexOf(item)} value={locationOptions.indexOf(item)} > {item.name}, {item.country.name}</option>
        )
        }
      </select>
    </label >
  )
}
export default CityPicker;