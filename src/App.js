import React, {Component} from 'react';
import {Route} from "react-router-dom";
import {connect} from 'react-redux';
import {Input} from 'reactstrap'
import CurrentDayWeather from './components/CurrentDayWeather';
import ForecastWeather from "./components/ForecastWeather";
import {getCurrentDayData} from './helpers/api';
import './App.scss';

class App extends Component {

    confirmSearchCity = (event) => {
        const {setCity} = this.props;
        const city = event.target.value;

        if (event.which === 13) {
            setCity(city);
        }
    };

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
            addCityToHistory(this.props.currentDayWeather.location['name']);
        }
    }

    render() {
        return (
            <div className="App">
                <header className="App-header">
                    <h1>Forecast App</h1>
                    <Input
                        type="text"
                        placeholder={"type city, on english please..."}
                        onChange={this.confirmSearchCity}
                        onKeyPress={this.confirmSearchCity}
                    />
                </header>

                <main>
                    <Route exact path={"/forecast-app/"} component={CurrentDayWeather}/>
                    <Route path={"/forecast-app/week"} component={ForecastWeather}/>
                </main>

            </div>
        );
    }
}

const mapProps = (state) => ({
    city: state.city,
    currentDayWeather: state.currentDayWeather,
    forecastWeather: state.forecastWeather,

});

const mapDispatchProps = (dispatch) => {
    return {
        setCity: (city) => dispatch(
            {type: 'SET_CITY', city: city}
        ),
        setCurrentDayWeather: (currentDayWeather) => dispatch(
            {type: 'SET_CURRENT_DAY_WEATHER', currentDayWeather: currentDayWeather}
        ),
        addCityToHistory: (cityName) => dispatch(
            {type: 'ADD_CITY_TO_HISTORY', cityName: cityName}
        ),
    }
};

export default connect(mapProps, mapDispatchProps)(App);