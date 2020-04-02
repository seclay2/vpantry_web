import {
    SET_ACTIVE_PANTRY,
    FETCH_PANTRIES,
    CREATE_PANTRY,
    JOIN_PANTRY,
    DELETE_PANTRY } from '../actions/types';

const initialState = {
    activePantry: 'initial',
    pantries: 'initial'
};

export default function(state = initialState, action) {
    switch(action.type) {
        case SET_ACTIVE_PANTRY: {
            return {
                ...state,
                activePantry: action.payload
            }
        }
        case FETCH_PANTRIES: {
            return {
                ...state,
                pantries: action.payload
            }
        }
        //case CREATE_PANTRY:
        //case JOIN_PANTRY:
        //case DELETE_PANTRY:
        default:
            return state;
    }
}