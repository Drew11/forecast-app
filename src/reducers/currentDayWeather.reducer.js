import {Actions} from '../actions/actions';

const currentDayWeather =(state={}, action)=>{
    switch (action.type) {
        case Actions.SET_CURRENT_DAY_WEATHER:
            return {...state,
                    ...action.currentDayWeather};
        default:
            return state;
}};

export default currentDayWeather;