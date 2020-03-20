// -------------------------------------------------------------------
// Object Name.... api.js
// Description.... Data API Functions
// Developer...... R. Todd Stephens
// Date Written... 3/15/2020
// -------------------------------------------------------------------
import {
    _getUsers,
    _getUser,
    _getQuestions,
    _saveQuestion,
    _saveQuestionAnswer
} from "./_DATA";

export function saveQuestion (info) {
    return _saveQuestion(info);
}

export function saveQuestionAnswer (info) {
    return _saveQuestionAnswer(info);
}

export function getUser (id) {
    return _getUser(id);
}

export function getUsers() {
    return _getUsers();
}

export function getQuestions() {
    return _getQuestions();
}