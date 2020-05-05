import {
    FETCH_PANTRY_ITEMS,
    CREATE_ITEM,
    UPDATE_ITEM,
    DELETE_ITEM } from "./types";

export const fetchPantryItems = group_id => dispatch => {
    const url = 'https://vpantryapi.herokuapp.com/items?group_id='+group_id;

    fetch(url , {
        method: 'GET',
        headers: {
            'content-type': 'application/json',
            'token': sessionStorage.getItem('jwtToken')
        }
    })
        .then(res => res.json())
        .then(res => {
            if (res.success) {
                dispatch({
                    type: FETCH_PANTRY_ITEMS,
                    payload: res.items
                });

            } else {
                dispatch({
                    type: FETCH_PANTRY_ITEMS,
                    payload: [{ _id: 0, name: 'No items in your pantry yet!' }]
                });
            }
        })
        .catch(error => console.log('error', error));

};

export const createItem = item => dispatch => {
    fetch('https://vpantryapi.herokuapp.com/items', {
        method: 'POST',
        headers: {
            'content-type': 'application/json',
            'token': sessionStorage.getItem('jwtToken')
        },
        body: JSON.stringify(item)
    })
        .then(res => res.json())
        .then(res => {
            console.log(res);
            if (res.success) {
                dispatch({
                    type: CREATE_ITEM,
                    payload: item
                })
            }
            else {
                console.log(res.message);
            }
        })
        .catch(error => console.log('error', error));

};

export const updateItem = item => dispatch => {
    console.log(JSON.stringify(item));
    fetch('https://vpantryapi.herokuapp.com/items', {
        method: 'PUT',
        headers: {
            'content-type': 'application/json',
            'token': sessionStorage.getItem('jwtToken')
        },
        body: JSON.stringify(item)
    })
        .then(res => res.json())
        .then(res => {
            console.log(res);
            if (res.success) {
                dispatch({
                    type: UPDATE_ITEM,
                    payload: item
                });
            }
        })
        .catch(error => console.log('error', error));
};

export const deleteItem = item_id => dispatch => {
    fetch('https://vpantryapi.herokuapp.com/items?item_id=' + item_id, {
        method: 'DELETE',
        headers: {
            'token': sessionStorage.getItem('jwtToken')
        }
    })
        .then(res => res.json())
        .then(res => {
            if (res.success) {
                dispatch({
                    type: DELETE_ITEM,
                    item: {}
                });
            }
        })
        .catch(error => console.log('error', error));
};
