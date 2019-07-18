import React, {Component} from 'react';
import {Route, Redirect } from "react-router-dom";
import {connect} from 'react-redux';
import Header from './components/Header';
import CurrentDayWeather from './components/CurrentDayWeather';
import ForecastWeather from "./components/ForecastWeather";
import {getCurrentDayData} from './helpers/api';
import './App.scss';

class App extends Component {

    async componentDidUpdate(prevProps) {
        const {
            city,
            currentDayWeather,
            setCurrentDayWeather,
            addCityToHistory
        } = this.props;

        if (prevProps.city !== city) {
            const weather = await getCurrentDayData(city);
            setCurrentDayWeather(weather)
        }

        if (prevProps.currentDayWeather.location !== currentDayWeather.location && currentDayWeather.location) {
            addCityToHistory(currentDayWeather.location['name']);
        }
    }

    render() {
        const { path, city, } = this.props;
        const cityPath = city.toLowerCase();

        return (
            <div className="App">
                { !path ? <Header />:null}
                <main>
                        <Redirect exact from={'/'} to={`/${cityPath}`} />
                        <Route exact path={`/:city`} component={CurrentDayWeather}/>
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
        setCurrentDayWeather: (currentDayWeather) => dispatch(
            {type: 'SET_CURRENT_DAY_WEATHER', currentDayWeather: currentDayWeather}
        ),
        addCityToHistory: (cityName) => dispatch(
            {type: 'ADD_CITY_TO_HISTORY', cityName: cityName}
        ),
    }
};

export default connect(mapProps, mapDispatchProps)(App);