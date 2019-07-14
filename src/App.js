import React, {Component} from 'react';
import CurrentDayWeather from './components/CurrentDayWeather';
import LastQuery from './components/LastQuery';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import {Input} from 'reactstrap'
import { connect} from 'react-redux';
import { getCurrentDayData} from './api/api';
import './App.scss';


const setWeather = { type: 'setWeather'};
const addCity = {type: 'addCity'};

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
          setWeather['weather'] = weather;
          this.props.setWeather(weather)
      }

      if (prevProps.weather.location!== this.props.weather.location) {
          if(this.props.weather.location && this.props.weather.location.name){
              addCity['searchCity'] = this.props.weather.location['name'];
              this.props.addCity(addCity['searchCity']);
          }
  }}

  render(){
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

              <CurrentDayWeather />
              <LastQuery click={this.selectCityHistory}/>

          </div>
         </Router>
      );
  }
}

const mapState = (state) => ({
    weather: state.weather,
    forecastWeather: state.forecastWeather,
    fiveLastSearchCity: state.fiveLastSearchCity
});

const mapDispatch = (dispatch) => ({
    'setWeather': ()=> dispatch(setWeather),
    'addCity': ()=>dispatch(addCity)
});

export default connect(mapState, mapDispatch)(App);