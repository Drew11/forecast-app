import React from 'react';

import {connect} from 'react-redux';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

const ForecastWeather = ({ forecastWeather, match })=> {
    return (
            <div className={"forecast"}>
                <Link to={'/'}>Back</Link>

                {
                 forecastWeather.map(forecastDay=>{
                    return <li>
                         {forecastDay.date + '--- avgtemp_c:' +forecastDay.day.maxtemp_c}
                       </li>
                    })

                }
             </div>
    )
};

const mapState = (state)=>({
    forecastWeather: state.forecastWeather,
});

export default connect(mapState)(ForecastWeather);