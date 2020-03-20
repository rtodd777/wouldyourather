// -------------------------------------------------------------------
// Object Name.... users.js
// Description.... Users Actions
// Developer...... R. Todd Stephens
// Date Written... 3/15/2020
// -------------------------------------------------------------------
import {getUsers} from "../utils/api";
import {showLoading, hideLoading} from 'react-redux-loading';


// Export Actions
// -------------------------------------------------------------------
export const RECEIVE_USERS = 'RECEIVE_USERS';
export const ADD_USER_QUESTION_ANSWER = 'ADD_USER_QUESTION_ANSWER';
export const ADD_USER_QUESTION = 'ADD_USER_QUESTION';


// Receive Users
// -------------------------------------------------------------------
export function receiveUsers(users) {
    return {
        type: RECEIVE_USERS,
        users
    }
}


// Add User Question
// -------------------------------------------------------------------
export function addUserQuestion(question) {
    return {
        type: ADD_USER_QUESTION,
        question
    }
}


// Add User Answer
// -------------------------------------------------------------------
export function addUserQuestionAnswer(authedUser, questionId, selectedOption) {
    return {
        type: ADD_USER_QUESTION_ANSWER,
        authedUser,
        questionId,
        selectedOption
    }
}


// Handle Get Users
// -------------------------------------------------------------------
export function handleGetUsers() {
    return (dispatch) => {
        dispatch(showLoading());
        return getUsers()
            .then((users) => {
                dispatch(receiveUsers(users));
                dispatch(hideLoading());
            });
    }
}