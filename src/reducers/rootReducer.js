import { combineReducers, createStore } from 'redux';
import city from './city.reducer';
import path from './path.reducer';
import currentDayWeather from  './currentDayWeather.reducer';
import forecastWeather from './forecastWeather.reducer';
import historyCities from './historyCitites.reducer';

const rootReducer = combineReducers({
    city: city,
    path: path,
    currentDayWeather: currentDayWeather,
    forecastWeather: forecastWeather,
    historyCities: historyCities,
});

const store = createStore(rootReducer);
export default store;