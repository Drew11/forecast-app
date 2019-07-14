import React from 'react';
import App from '../App';
import {connect} from 'react-redux';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

const ForecastWeather = ({ forecastWeather })=> {
    console.log(forecastWeather)

    const forecastDays = forecastWeather['forecast']['forecastday'];
    return (
        <div className={"forecast"}>
            <Link to={"./"}>
                Back Home
            </Link>
            {forecastDays.map(forecastDay=>{
               return <li>
                {forecastDay.date + ':  ' +forecastDay.day.maxtemp_c}
               </li>
            })}
            <Route path={"./"} component={App}/>

        </div>
    )
};

const mapState = (state)=>({
    forecastWeather: state.forecastWeather,
});

export default connect(mapState)(ForecastWeather);