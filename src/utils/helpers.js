// -------------------------------------------------------------------
// Object Name.... Helper.js
// Description.... Helper File
// Developer...... R. Todd Stephens
// Date Written... 3/15/2020
// -------------------------------------------------------------------
import includes from 'core-js/fn/array/includes';
import {createBrowserHistory} from 'history';

// Format Date
// -------------------------------------------------------------------
export function formatDate(timestamp) {
    const d = new Date(timestamp);
    const time = d.toLocaleTimeString('en-US');
    return time.substr(0, 5) + time.slice(-2) + ' | ' + d.toLocaleDateString();
}

// Format Question
// -------------------------------------------------------------------
export function formatQuestion(question, author, authedUser) {
    const {id, optionOne, optionTwo, timestamp} = question;
    const {name, avatarURL} = author;
    return {
        name,
        id,
        timestamp,
        avatar: avatarURL,
        optionOne,
        optionTwo,
        pollTaken: includes(optionOne.votes, authedUser) || includes(optionTwo.votes, authedUser)
    }
}

export const history = createBrowserHistory();