import React from 'react';
import {connect} from 'react-redux';

const Weather = ({currentDayWeather}) => {
    const current = currentDayWeather['current'];
    return (
        <ul>
            <li className={"temp_c"}>Temperature: {`${current['temp_c']} ℃`}</li>
            <li className={"temp_c"}>Precip: {`${current['precip_mm']} mm`}</li>
            <li className={"temp_c"}>Wind: {`${current['wind_mph']} mph`}</li>
            <li className={"temp_c"}>Pressure: {`${current['pressure_in']} in`}</li>
            <li className={"temp_c"}>Humidity: {`${current['humidity']}`}</li>
        </ul>
    )
};

const mapProps = (state) => ({
    currentDayWeather: state.currentDayWeather
});

export default connect(mapProps)(Weather);