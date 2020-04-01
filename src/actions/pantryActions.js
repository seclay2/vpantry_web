import {
    SET_ACTIVE_PANTRY,
    CREATE_PANTRY,
    JOIN_PANTRY,
    DELETE_PANTRY,
} from './types';

export const setActivePantry = group_id => dispatch => {
    dispatch({
        type: SET_ACTIVE_PANTRY,
        payload: [group_id]
    });

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
        .catch(error => console.log('error', error));
};
