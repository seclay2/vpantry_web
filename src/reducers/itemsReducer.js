import {
    FETCH_PANTRY_ITEMS,
    CREATE_ITEM,
    UPDATE_ITEM,
    DELETE_ITEM } from "../actions/types";

const initialState = {
    itemList: [],
    item: {}
};

export default function(state = initialState, action) {
    switch(action.type) {
        case FETCH_PANTRY_ITEMS: {
            return {
                ...state,
                itemList: action.payload
            }
        }
        case CREATE_ITEM:
        case UPDATE_ITEM:
        case DELETE_ITEM: {
            return {
                ...state,
                item: action.payload
            }
        }
        default:
            return state;
    }
}