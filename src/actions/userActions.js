import { REGISTER_NEW_USER, FETCH_USER_DATA } from "./types";

export const registerNewUser = (newUser, history) => dispatch => {
    fetch('https://vpantryapi.herokuapp.com/signup', {
        method: 'POST',
        headers: {
            'content-type': 'application/json',
        },
        body: JSON.stringify(newUser)
    })
        .then(res => res.json())
        .then(res => {
            if (!res.success) {
                //TODO set text for error message on screen?
            } else {
                history.push('/');
            }
        })
        .catch(error => console.log('error', error));
};

export const fetchUserData = () => dispatch => {
    fetch('https://vpantryapi.herokuapp.com/users', {
        method: 'GET',
        headers: {
            'content-type': 'application/json',
            'token': sessionStorage.getItem('jwtToken')
        }
    })
        .then(res => res.json())
        .then(res => {
            if (res) {
                const user = {
                    ...res,
                    activePantry: res.adminofgroups[0],
                };
                dispatch({
                    type: FETCH_USER_DATA,
                    payload: user
                });
            }
        });
};