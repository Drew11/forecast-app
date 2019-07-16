import React from 'react';
import {connect} from 'react-redux';
import {Link} from "react-router-dom";



const ForecastWeather = ({forecastWeather, switchPath, match}) => {

    switchPath(match.isExact);

    return (
        <div className={"forecast__weather"}>
            <Link onClick={()=>switchPath(!match.isExact)}
                  to={'/'}
            >Back
            </Link>
            <ul className={"forecast__weather-detail"}>
                {
                    forecastWeather.map((forecastDay, index) => {
                        return <li key={index}>
                            {`${forecastDay.date}: ${forecastDay.day.condition.text}`}
                            <ul>
                                <li>
                                    {`avgvis_km: ${forecastDay.day.avgvis_km}`}
                                </li>
                                <li>
                                    {`avgtemp_c: ${forecastDay.day.avgtemp_c}`}
                                </li>
                                <li>
                                    {`totalprecip_mm: ${forecastDay.day.totalprecip_mm}`}
                                </li>
                                <li>
                                    {`avghumidity: ${forecastDay.day.avghumidity}`}
                                </li>
                            </ul>
                        </li>
                    })
                }
            </ul>
        </div>
    )

};

const mapState = (state) => ({
    forecastWeather: state.forecastWeather,
});

const mapDispatchProps = (dispatch) => ({
    switchPath: (path)=>  dispatch({
        type: 'SWITCH_PATH', path: path
    })
});

export default connect(mapState, mapDispatchProps)(ForecastWeather);