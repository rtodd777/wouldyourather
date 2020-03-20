// -------------------------------------------------------------------
// Object Name.... index.js
// Description.... Combine Reducers
// Developer...... R. Todd Stephens
// Date Written... 3/15/2020
// -------------------------------------------------------------------
import {combineReducers} from 'redux';
import users from './users';
import questions from './questions';
import login from './auth';
import { loadingBarReducer } from 'react-redux-loading'


// Merge Reducers
// -------------------------------------------------------------------
export default combineReducers({
    users,
    questions,
    login,
    loadingBar: loadingBarReducer,
});