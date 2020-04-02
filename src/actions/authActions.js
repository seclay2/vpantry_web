import { LOGIN, LOGOUT } from './types';

export const login = (credentials) => dispatch => {
    fetch('https://vpantryapi.herokuapp.com/signin', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(credentials)
    })
        .then(res => res.json())
        .then(res => {
            if (res.success) {
                sessionStorage.setItem('jwtToken', res.token);
                dispatch({
                    type: LOGIN,
                    payload: res.token
                });
            }
        })
        .catch(error => console.log('error', error));
};

export const logout = () => dispatch => {
    dispatch({
        type: LOGOUT
    });
    sessionStorage.clear();
};

export const setToken = token => dispatch => {
    dispatch({
        type: LOGIN,
        payload: token
    });
};