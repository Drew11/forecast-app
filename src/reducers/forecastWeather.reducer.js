import {Actions} from '../actions/actions';

const forecastWeather =(state=[], action)=>{
    switch (action.type) {
        case Actions.SET_FORECAST_WEATHER:
            return [...action.forecastWeather];
        default:
            return state;
}};

export default forecastWeather;