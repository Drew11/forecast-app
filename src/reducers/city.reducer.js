import {Actions} from '../actions/actions';

const city = (state='', action)=>{
    switch (action.type) {
        case Actions.SET_CITY:
            return action.city;
        default:
            return state;
    }
};

export default city;