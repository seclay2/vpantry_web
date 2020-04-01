import { REGISTER_NEW_USER, FETCH_USER_DATA } from '../actions/types';

export default function(state = {}, action) {
    switch(action.type) {
        case REGISTER_NEW_USER: {

        }
        case FETCH_USER_DATA: {
            return {
                ...state,
                ...action.payload,
            }
        }
        default:
            return state;
    }
}