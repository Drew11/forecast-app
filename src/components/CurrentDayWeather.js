import React from 'react';
import {connect} from 'react-redux';
import {Link} from "react-router-dom";
import Weather from './Weather';
import Location from './Location';
import LastQueryCities from './LastQueryCities';
import {getForecastData} from "../helpers/api";
import {weatherActions} from "../actions/actions";

const CurrentDayWeather = ({currentDayWeather, setForecastWeather, forecastWeather, match}) => {

    async function setForecast() {
        const forecastWeather = await getForecastData(match.params.city);
        setForecastWeather((forecastWeather['forecast']['forecastday']))
    }

    return (
        currentDayWeather.current ?
            <div className={'rendered__weather'}>

                <div className={'rendered__weather-detail'}>
                    <Location/>
                    <Weather/>
                </div>

                <LastQueryCities/>

                <Link
                    className={"link__forecast"}
                    to={`/${match.params.city}/week`}
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
        setForecastWeather: (forecastWeather) =>
            dispatch(weatherActions.setForecastWeather(forecastWeather))
    }
};

const mapState = (state) => ({
    city: state.city,
    currentDayWeather: state.currentDayWeather,
    forecastWeather: state.forecastWeather,
});

export default connect(mapState, mapDispatch)(CurrentDayWeather);