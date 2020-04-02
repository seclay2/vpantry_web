import {
    SET_ACTIVE_PANTRY,
    CREATE_PANTRY,
    JOIN_PANTRY,
    DELETE_PANTRY, FETCH_PANTRIES,
} from './types';

export const setActivePantry = pantry => dispatch => {
    dispatch({
        type: SET_ACTIVE_PANTRY,
        payload: pantry
    });

};

export const fetchPantries = () => dispatch => {
    fetch('https://vpantryapi.herokuapp.com/groups', {
        method: 'GET',
        headers: {
            'content-type': 'application/json',
            'token': sessionStorage.getItem('jwtToken')
        }
    })
        .then(res => res.json())
        .then(res => {
            dispatch({
                type: FETCH_PANTRIES,
                payload: res.pantries
            });
        })
        .catch(error => console.log('error', error));
};

export const createPantry = group => dispatch => {
    fetch('https://vpantryapi.herokuapp.com/groups', {
        method: 'POST',
        headers: {
            'content-type': 'application/json',
            'token': sessionStorage.getItem('jwtToken')
        },
        body: JSON.stringify(group)
    })
        .then(res => res.json())
        .then(res => {
            if (res.success) {
                dispatch({
                    type: CREATE_PANTRY,
                    payload: res.items
                });

            }
        })
};

//TODO JOIN_PANTRY

//TODO DELETE_PANTRY
