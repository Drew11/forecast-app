import React, {Component} from 'react';
import CurrentDayWeather from './components/CurrentDayWeather';
import LastQuery from './components/LastQuery';

import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import {Input} from 'reactstrap'
import { connect} from 'react-redux';
import { getCurrentDayData} from './helpers/api';
import './App.scss';

import {CURRENT_DAY_WEATHER} from './constans/constans'
import ForecastWeather from "./components/ForecastWeather";

class App extends Component {
  constructor(){
      super();
      this.state = {
          searchCity:'',
      };
  }

  selectCityHistory =(city)=>{
      this.setState(prevState=>({
           ...prevState,
           searchCity: city
          }))
  };

  confirmSearchCity = (event)=>{
    if(event.which === 13 ){
      const city = event.target.value;

      this.setState(prevState=>({
          ...prevState,
          searchCity: city
      }));
    }
  };

  async componentDidUpdate( prevProps, prevState ) {
      if (prevState.searchCity !== this.state.searchCity) {
          const weather = await getCurrentDayData(this.state.searchCity);
          this.props.setCurrentDayWeather(weather)
      }

      if (prevProps.currentDayWeather.current!== this.props.currentDayWeather.current) {
          if(this.props.currentDayWeather.location && this.props.currentDayWeather.location.name){
              this.props.addCityToHistory(this.props.currentDayWeather.location['name']);
          }
  }}

  render(){
      console.log(this.props.forecastWeather)
      return (
         <Router>
          <div className="App">
          <header className="App-header">
                  <h1>Forecast App</h1>
              <Input
                  type="text"
                  onChange={ this.confirmSearchCity }
                  onKeyPress={ this.confirmSearchCity }
              />
          </header>

              <main>
                  <CurrentDayWeather/>
                  <LastQuery click={ this.selectCityHistory }/>
                  {this.props.forecastWeather.length>0?
                      <Route path={"/forecast_weather"} component={ForecastWeather}/>: null}
              </main>

          </div>
         </Router>
      );
  }
}

const mapProps = (state) => ({
    currentDayWeather: state.currentDayWeather,
    forecastWeather: state.forecastWeather,
});

const mapDispatchProps = (dispatch) => {
    return {
        setCurrentDayWeather: (currentDayWeather)=> dispatch({type: 'SET_CURRENT_DAY_WEATHER', currentDayWeather: currentDayWeather }),
        addCityToHistory: (cityName)=> dispatch( {type: 'ADD_CITY_TO_HISTORY', cityName: cityName} ),
}};

export default connect(mapProps, mapDispatchProps)(App);