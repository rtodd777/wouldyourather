// -------------------------------------------------------------------
// Object Name.... questions.js
// Description.... Question Reducer
// Developer...... R. Todd Stephens
// Date Written... 3/15/2020
// -------------------------------------------------------------------
import {RECEIVE_QUESTIONS, ADD_QUESTION, ADD_QUESTION_ANSWER} from "../actions/questions";

// Question Reducer
// -------------------------------------------------------------------
export default function questions(state = {}, action) {
    switch (action.type) {
        case RECEIVE_QUESTIONS:
            return {
                ...state,
                ...action.questions
            };
        case ADD_QUESTION:
            return {
                ...state,
                [action.question.id]: action.question
            };
        case ADD_QUESTION_ANSWER:
            return {
                ...state,
                [action.questionId]: {
                    ...state[action.questionId],
                    [action.selectedOption]: {
                        ...state[action.questionId][action.selectedOption],
                        votes: state[action.questionId][action.selectedOption].votes.concat([action.authedUser])
                    }
                }
            };
        default:
            return state;
    }
}