// -------------------------------------------------------------------
// Object Name.... Question.js
// Description.... Dashbaord Detail Question
// Developer...... R. Todd Stephens
// Date Written... 3/15/2020
// -------------------------------------------------------------------
import React from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';

// Import Utilityies
import {formatQuestion} from "../utils/helpers";

// Import Other
import { FaTable } from 'react-icons/fa/index'


const QuestionList = (props) => {
    const {question} = props;
    const {name, id, avatar, optionOne, optionTwo, pollTaken} = question;

    if (props.questionsToShow === 'answered' && pollTaken !== true) {
        return false;
    } else if (props.questionsToShow === 'unanswered' && pollTaken === true) {
        return false;
    }


// Set the Poll Link for Answering or Reviewing
// -------------------------------------------------------------------
    let pollLink = '';
    if (props.questionsToShow === 'answered') {
        pollLink = `/question/${id}/results`;
    } else {
        pollLink = `/question/${id}`;
    }

    return (
        <div className="col-xs-12 col-sm-6 col-md-4">
            <div className="image-flip">
                <div className="mainflip">
                    <div className="frontside">
                        <div className="card">
                            <div className="card-body text-center">
                                <p>
                                    <img src={avatar} alt={`Avatar of ${name}`} className='avatar'/>
                                </p>
                                <h4 className="card-title">{name} asks</h4>
                                <p className="card-text">Would you rather {optionOne.text} <strong>or</strong> {optionTwo.text}?</p>
                                <Link to={pollLink} className='btn btn-primary btn-sm'>
                                    <FaTable className='smBtnIcon' /> 
                                    {props.questionsToShow === "answered"
                                        ? "View Results"
                                        : "Answer Poll"
                                    }                    
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>        
    )
};


// Map State to Props
// -------------------------------------------------------------------
function mapStateToProps({login, users, questions}, {id, questionsToShow}) {
    const question = questions[id];
    return {
        authedUser: login.loggedInUser.id,
        question: formatQuestion(question, users[question.author], login.loggedInUser.id),
        questionsToShow
    }
}

export default connect(mapStateToProps)(QuestionList);