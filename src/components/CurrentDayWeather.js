import React from 'react';
import {connect} from 'react-redux';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Weather from './Weather';
import Location from './Location';
import LastQueryCities  from './LastQueryCities';
import {getForecastData} from "../helpers/api";
import ForecastWeather from "./ForecastWeather";

const CurrentDayWeather = ( {currentCityWeather, setForecastWeather, forecastWeather, } )=> {


    return (
        currentCityWeather.current ?
            <Router>
                <div className={'rendered__weather-detail'}>
                    <Location/>
                    <Weather/>
                </div>
                <LastQueryCities/>
            </Router>
            : null
    )
};


const mapDispatch = (dispatch) => {
    return{

}
};

const mapState = (state)=>({
    currentCityWeather: state.currentDayWeather,
    forecastWeather: state.forecastWeather,
});

export default connect(mapState, mapDispatch)(CurrentDayWeather);
