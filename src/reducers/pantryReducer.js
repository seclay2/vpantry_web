import {
    SET_ACTIVE_PANTRY,
    CREATE_PANTRY,
    JOIN_PANTRY,
    DELETE_PANTRY } from '../actions/types';

const initialState = {
    activePantry: '',
    pantry: {}
};

export default function(state = initialState, action) {
    switch(action.type) {
        case SET_ACTIVE_PANTRY: {
            return {
                ...state,
                activePantry: action.payload
            }
        }
        case CREATE_PANTRY:
        case JOIN_PANTRY:
        case DELETE_PANTRY: {
            return {
                ...state,
                pantry: action.payload
            }
        }
        default:
            return state;
    }
}