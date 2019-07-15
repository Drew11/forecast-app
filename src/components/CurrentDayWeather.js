import React from 'react';
import Weather from './Weather';
import Location from './Location';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import {connect} from 'react-redux';
import {getForecastData} from "../helpers/api";

const CurrentDayWeather = ( {currentCityWeather, setForecastWeather, forecastWeather  } )=> {

    const setForecast = async ()=>{
        const forecastWeather = await getForecastData(currentCityWeather.location['name']);
        setForecastWeather((forecastWeather['forecast']['forecastday']));
    };



    return (
        currentCityWeather.current ?
            <Router>
                <div className={'rendered__weather-detail'}>
                    <Location/>
                    <Weather/>
                </div>

                <Link
                    className={"link__forecast"}
                    to={"/forecast_weather"}
                      onClick={setForecast}
                >
                    Weather on week
                </Link>
            </Router>
            : null
    )
};


const mapDispatch = (dispatch) => {
    return{
    setForecastWeather: (forecastWeather) => dispatch({type:'SET_FORECAST_WEATHER',forecastWeather: forecastWeather})
}
};

const mapState = (state)=>({
    currentCityWeather: state.currentDayWeather,
    forecastWeather: state.forecastWeather,
});

export default connect(mapState, mapDispatch)(CurrentDayWeather);
