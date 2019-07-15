import {createStore} from 'redux';

const initialState = {
        currentDayWeather: {},
        forecastWeather:[],
        historyCities: []
};

//Actions
function  reducer(state, action) {
    switch (action.type) {
        case 'SET_CURRENT_DAY_WEATHER':
            return {
                ...state,
                currentDayWeather: action.currentDayWeather
        };
        case 'SET_FORECAST_WEATHER':
            return {
                ...state,
                forecastWeather: action.forecastWeather
            };
        case 'ADD_CITY_TO_HISTORY':
            const copyHistoryCities = [...state.historyCities];

            if(!copyHistoryCities.includes(action.cityName)){
                copyHistoryCities.push(action.cityName);
            }

            if(copyHistoryCities.length>5){
                copyHistoryCities.shift();
            }

            return {
                ...state,
                historyCities: copyHistoryCities
            };
        default:
            return state;
    }
}

const store = createStore(reducer, initialState);

store.subscribe(()=>{
    console.log(store.getState())
})

export default store;