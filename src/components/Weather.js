import React from 'react';
import {connect} from 'react-redux';

const Weather = ({currentCityWeather})=> {

  return (
       <ul>
          <li className={"temp_c"}>Temperature: {`${currentCityWeather['temp_c']} ℃`}</li>
          <li className={"temp_c"}>Precip: {`${currentCityWeather['precip_mm']} mm`}</li>
          <li className={"temp_c"}>Wind: {`${currentCityWeather['wind_mph']} mph`}</li>
          <li className={"temp_c"}>Pressure: {`${currentCityWeather['pressure_in']} in`}</li>
          <li className={"temp_c"}>Humidity: {`${currentCityWeather['humidity']}`}</li>

      </ul>
  )
};

const mapState = (state)=>({
    currentCityWeather: state.weather.current
});

export default connect(mapState)(Weather);