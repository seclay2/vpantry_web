import { LOGIN, LOGOUT } from '../actions/types';

const initialState = {
    isAuthenticated: false,
    token: ''
};

export default function(state = initialState, action) {
    switch(action.type) {
        case LOGIN: {
            return {
                ...state,
                isAuthenticated: true,
                token: action.payload
            }
        }
        case LOGOUT: {
            return {
                ...state,
                isAuthenticated: false,
                token: ''
            }
        }
        default:
            return state;
    }
}