import {Actions} from '../actions/actions';

const path =(state=false, action)=>{
    switch (action.type) {
        case Actions.SWITCH_PATH:
            return action.path;
        default:
            return state;
}};

export default path;