// -------------------------------------------------------------------
// Object Name.... questions.js
// Description.... Question Actions
// Developer...... R. Todd Stephens
// Date Written... 3/15/2020
// -------------------------------------------------------------------
import {getQuestions} from '../utils/api';
import {showLoading, hideLoading} from 'react-redux-loading';


// Export Actions
// -------------------------------------------------------------------
export const RECEIVE_QUESTIONS = 'RECEIVE_QUESTIONS';
export const ADD_QUESTION = 'ADD_QUESTION';
export const ADD_QUESTION_ANSWER = 'ADD_QUESTION_ANSWER';


// Receive Questions
// -------------------------------------------------------------------
export function receiveQuestions(questions) {
    return {
        type: RECEIVE_QUESTIONS,
        questions
    }
}


// Add Question
// -------------------------------------------------------------------
export function addQuestion(question) {
    return {
        type: ADD_QUESTION,
        question
    }
}


// Add Question Answer
// -------------------------------------------------------------------
export function addQuestionAnswer(authedUser, questionId, selectedOption) {
    return {
        type: ADD_QUESTION_ANSWER,
        authedUser,
        questionId,
        selectedOption
    }
}


// Handle Get Questions
// -------------------------------------------------------------------
export function handleGetQuestions() {
    return (dispatch) => {
        dispatch(showLoading());
        return getQuestions()
            .then((questions) => {
                dispatch(receiveQuestions(questions));
                dispatch(hideLoading());
            });
    }
}