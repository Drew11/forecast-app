import React, {Component} from 'react';
import {Route, Redirect,} from "react-router-dom";
import {connect} from 'react-redux';
import Header from './Header';
import CurrentDayWeather from './CurrentDayWeather';
import ForecastWeather from "./ForecastWeather";
import {getCurrentDayData} from '../helpers/api';
import {weatherActions} from "../actions/actions";
import '../App.scss';


class RootComponent extends Component {

    async componentDidUpdate(prevProps) {
        const {
            city,
            currentDayWeather,
            setCurrentDayWeather,
            addCityToHistory
        } = this.props;

        if (prevProps.city !== city) {
            const weather = await getCurrentDayData(city);
            setCurrentDayWeather(weather);

        }

        if (prevProps.currentDayWeather.location !== currentDayWeather.location && currentDayWeather.location) {
            addCityToHistory(currentDayWeather.location['name']);
        }
    }

    render() {
        const {path, city } = this.props;
        const cityPath = city.toLowerCase();

        return (
            <div className="App">
                {!path ? <Header/> : null}
                <main>
                    <Redirect exact from={'/forecast-app/'} to={`/${cityPath}`}/>
                        <Route exact path={`/:city?`} component={CurrentDayWeather}/>
                        <Route exact path={"/:city/week"} component={ForecastWeather}/>
                </main>
            </div>
        );
    }
}

const mapProps = (state) => ({
    path: state.path,
    city: state.city,
    currentDayWeather: state.currentDayWeather,
    forecastWeather: state.forecastWeather,

});

const mapDispatchProps = (dispatch) => {
    return {
        setCurrentDayWeather: (currentDayWeather) =>
            dispatch(weatherActions.setCurrentDayWeather(currentDayWeather)),
        addCityToHistory: (cityName) =>
            dispatch(weatherActions.addCityToHistory(cityName)),
    }
};

export default connect(mapProps, mapDispatchProps)(RootComponent);