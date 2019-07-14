import React from 'react';
import Weather from './Weather';
import Location from './Location';
import ForecastWeather from './ForecastWeather';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import {connect} from 'react-redux';
import {getForecastData} from "../api/api";

const setForecastWeather = { type: 'setForecastWeather'};

const CurrentDayWeather = ( {currentCityWeather,
                             forecastWeather,
                             setForecastWeather1} )=> {

    const setForecast = async ()=>{
        setForecastWeather['forecastWeather'] = await getForecastData(currentCityWeather.location['name']);
        console.log(setForecastWeather['forecastWeather'])
        setForecastWeather1(forecastWeather['forecastWeather']);
    };

    return (
        currentCityWeather.current?
        <Router>
             <div className={'rendered__weather-detail'}>
                <Weather />
                <Location />
                <Link to={"/forecast_weather"}
                  onClick={setForecast}
                 >
                   Weather on week
                </Link>


              {forecastWeather['forecast']?
                 <Route path={"/forecast_weather"} component={ForecastWeather} />:
                     null
              }

            </div>
        </Router>
        :null
    )
};


const mapDispatch = (dispatch) => ({
    'setForecastWeather1': () => dispatch(setForecastWeather)
});

const mapState = (state)=>({
    currentCityWeather: state.weather,
    forecastWeather: state.forecastWeather,
});

export default connect(mapState, mapDispatch)(CurrentDayWeather);
