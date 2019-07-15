import React from 'react';
import {connect} from 'react-redux';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Weather from './Weather';
import Location from './Location';
import LastQueryCities  from './LastQueryCities';
import {getForecastData} from "../helpers/api";
import ForecastWeather from "./ForecastWeather";

const CurrentDayWeather = ( {currentCityWeather, setForecastWeather, forecastWeather, } )=> {

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

                <LastQueryCities/>

                <Link
                    className={"link__forecast"}
                    to={"/week"}
                    onClick={setForecast}
                >
                    Weather on week
                </Link>
                <Route path={"/week"} component={ForecastWeather} />
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
