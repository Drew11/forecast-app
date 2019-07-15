import React, {Component} from 'react';
import {Route, Switch, Link} from "react-router-dom";
import { connect} from 'react-redux';
import {Input} from 'reactstrap'
import CurrentDayWeather from './components/CurrentDayWeather';
import ForecastWeather from "./components/ForecastWeather";
import {getCurrentDayData, getForecastData} from './helpers/api';
import './App.scss';

class App extends Component {

  constructor(){
      super();
      this.state={
         componentCurrentDay: false
      }
  }

  confirmSearchCity = (event)=>{
    const {setCity} = this.props;

    if(event.which === 13 ){
      const city = event.target.value;
      setCity(city);

      this.setState(prevState=>({
            ...prevState,
            componentCurrentDay: !prevState.componentCurrentDay
      }))
    }


  };

   setForecast = async ()=>{

       const {city, setForecastWeather} = this.props;
       const forecastWeather = await getForecastData(city);
       setForecastWeather((forecastWeather['forecast']['forecastday']));
  };

  async componentDidUpdate( prevProps ) {
      const {city,
          currentDayWeather,
          setCurrentDayWeather,
          addCityToHistory} = this.props;

      if (prevProps.city !== city) {
          const weather = await getCurrentDayData(city);
          setCurrentDayWeather(weather)

      }

      if (prevProps.currentDayWeather.location !== currentDayWeather.location && currentDayWeather.location ){
          addCityToHistory(this.props.currentDayWeather.location['name']);
      }
  }

  render(){

      return (
          <div className="App">

             <header className="App-header">
                  <h1>Forecast App</h1>
                  <Input
                      type="text"
                      placeholder={"type city, on english please..."}
                      onChange={ this.confirmSearchCity }
                      onKeyPress={ this.confirmSearchCity }
                  />
             </header>


              <main>

                      <Route path={"/"} component={CurrentDayWeather}/>
                      <Route path={"/week"} component={ForecastWeather}/>

              </main>

              {this.state.componentCurrentDay?
                  <Link
                      className={"link__forecast"}
                      to={"/week"}
                      onClick={this.setForecast}
                  >
                      Weather on week
                  </Link>: null
              }

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
        setCity: (city)=> dispatch(
            {type: 'SET_CITY', city: city}
            ),
        setCurrentDayWeather: (currentDayWeather)=> dispatch(
            {type: 'SET_CURRENT_DAY_WEATHER', currentDayWeather: currentDayWeather }
            ),
        addCityToHistory: (cityName)=> dispatch(
            {type: 'ADD_CITY_TO_HISTORY', cityName: cityName}
            ),
        setForecastWeather: (forecastWeather) => dispatch(
            {type:'SET_FORECAST_WEATHER',forecastWeather: forecastWeather}
            )
}};

export default connect(mapProps, mapDispatchProps)(App);