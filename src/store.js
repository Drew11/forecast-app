import {createStore} from 'redux';

const initialState = {
        weather: {},
        forecastWeather:{},
        fiveLastSearchCity: []
};

function  reducer(state, action) {
    switch (action.type) {
        case 'setWeather':
            return {   ...state,
            weather: action.weather
        };
        case 'setForecastWeather':
            console.log(action.forecastWeather)
            return {
                ...state,
                forecastWeather: action.forecastWeather
            };
        case 'addCity':
            const copy = [...state.fiveLastSearchCity];

            if(!copy.includes(action.searchCity)){
                copy.push(action.searchCity);
            }

            if(copy.length>5){
                copy.shift();
            }

            return {
                ...state,
                fiveLastSearchCity: copy
            };
        default:
            return state;
    }
}

const store = createStore(reducer, initialState);

export default store;