import {Actions} from '../actions/actions';

const historyCities =(state=[], action)=> {
    switch (action.type){
        case Actions.ADD_CITY_TO_HISTORY:
            const copyHistoryCities = [...state];

            if (!copyHistoryCities.includes(action.cityName)) {
                copyHistoryCities.push(action.cityName);
            }

            if (copyHistoryCities.length > 5) {
                copyHistoryCities.shift();
            }

            return copyHistoryCities;

        default:
            return state;
    }
};

export default historyCities;