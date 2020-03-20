// -------------------------------------------------------------------
// Object Name.... auth.js
// Description.... Authorized Reducer
// Developer...... R. Todd Stephens
// Date Written... 3/15/2020
// -------------------------------------------------------------------
import {AUTH_LOGIN_SUCCESS, AUTH_LOGOUT_SUCCESS} from "../actions/auth";

// Authorized Functions
// -------------------------------------------------------------------
export default function auth(state = {}, action) {
    switch (action.type) {
        case AUTH_LOGIN_SUCCESS:
            return {
                ...state,
                authenticated: action.authenticated,
                loggedInUser: action.loggedInUser
            };
        case AUTH_LOGOUT_SUCCESS:
            return {
                ...state,
                authenticated: action.authenticated,
                loggedInUser: action.loggedInUser
            };
        default:
            return state;
    }
}