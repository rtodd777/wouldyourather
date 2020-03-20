// -------------------------------------------------------------------
// Object Name.... auth.js
// Description.... Authorized User Actions
// Developer...... R. Todd Stephens
// Date Written... 3/15/2020
// -------------------------------------------------------------------
import {getUser} from '../utils/api';
import { showLoading, hideLoading } from 'react-redux-loading';

// Export Actions
// -------------------------------------------------------------------
export const AUTH_LOGIN_SUCCESS = 'LOGIN_SUCCESS';
export const AUTH_LOGOUT_SUCCESS = 'LOGOUT_SUCCESS';


// Receive Authorized Login Request
// -------------------------------------------------------------------
export function receiveAuthLogin(user) {
    return {
        type: AUTH_LOGIN_SUCCESS,
        authenticated: true,
        loggedInUser: user
    }
}


// Receive Authorized Logout Request
// -------------------------------------------------------------------
export function receiveAuthLogout() {
    return {
        type: AUTH_LOGOUT_SUCCESS,
        authenticated: null,
        loggedInUser: null
    }
}


// Handle Login User
// -------------------------------------------------------------------
export function handleLoginUser(id) {
    return (dispatch) => {
        dispatch(showLoading());
        getUser(id).then((user) => {
            dispatch(receiveAuthLogin(user));
            dispatch(hideLoading());
        });
    };
}


// Handle Logout User
// -------------------------------------------------------------------
export function handleLogoutUser() {
    return (dispatch) => {
        dispatch(showLoading());
        dispatch(receiveAuthLogout());
        dispatch(hideLoading());
    }
}