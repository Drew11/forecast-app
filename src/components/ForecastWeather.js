import React from 'react';
import App from '../App';
import {connect} from 'react-redux';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

const ForecastWeather = ({ forecastWeather })=> {
    console.log(forecastWeather)

    return (
        <Router>
            <div className={"forecast"}>

                {
                 forecastWeather.map(forecastDay=>{
                    return <li>
                         {forecastDay.date + '--- avgtemp_c:' +forecastDay.day.maxtemp_c}
                       </li>
                    })
                }
             </div>

        </Router>
    )
};

const mapState = (state)=>({
    forecastWeather: state.forecastWeather,
});

export default connect(mapState)(ForecastWeather);