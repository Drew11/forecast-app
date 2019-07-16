import React from 'react';
import {connect} from 'react-redux';
import {Link} from "react-router-dom";
import Weather from './Weather';
import Location from './Location';
import LastQueryCities from './LastQueryCities';
import {getForecastData} from "../helpers/api";

const CurrentDayWeather = ({currentCityWeather, setForecastWeather, forecastWeather, city, match}) => {

    async function setForecast() {
        const forecastWeather = await getForecastData(city);
        setForecastWeather((forecastWeather['forecast']['forecastday']))
    }

    return (
        currentCityWeather.current ?
            <div className={'rendered__weather'}>

                <div className={'rendered__weather-detail'}>
                    <Location/>
                    <Weather/>
                </div>

                <LastQueryCities/>

                <Link
                    className={"link__forecast"}
                    to={"/week"}
                    onClick={setForecast}
                >
                    Weather on week
                </Link>
            </div>
            : null
    )
};

const mapDispatch = (dispatch) => {
    return {
        setForecastWeather: (forecastWeather) => dispatch(
            {type: 'SET_FORECAST_WEATHER', forecastWeather: forecastWeather}
        )
    }
};

const mapState = (state) => ({
    city: state.city,
    currentCityWeather: state.currentDayWeather,
    forecastWeather: state.forecastWeather,
});

export default connect(mapState, mapDispatch)(CurrentDayWeather);