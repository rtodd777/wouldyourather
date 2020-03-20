// -------------------------------------------------------------------
// Object Name.... QuestionPoll.js
// Description.... Question Poll Question
// Developer...... R. Todd Stephens
// Date Written... 3/18/2020
// -------------------------------------------------------------------
import React from 'react';
import {connect} from 'react-redux';
import { Link } from 'react-router-dom'
import {Redirect} from 'react-router-dom';

// Other Imports
import { FaStar } from 'react-icons/fa/index'
import { FaSignInAlt } from 'react-icons/fa/index'
import { FaThumbsUp } from 'react-icons/fa/index'


const QuestionPollResults = (props) => {
    const {question, author, isOptionOneAnswered, isOptionTwoAnswered} = props;

    if (question === "") {
        return <Redirect to='/Error404' />
    }

    const totalVotes = question.optionOne.votes.length + question.optionTwo.votes.length;
    let optionOneWidth = Math.round((question.optionOne.votes.length / totalVotes) * 100);
    let optionTwoWidth = Math.round((question.optionTwo.votes.length / totalVotes) * 100);

    return (

        <section className="masthead bg-primary text-white text-center">
            <div className="container d-flex align-items-center flex-column">

              <img src={author.avatarURL} alt={`Avatar of ${author.name}`} className='avatar'/>

              <h1 className="masthead-heading text-uppercase mb-4">{author.name} asked,</h1>

              <div className="test">
                <p className="masthead-subheading font-weight-light mb-0"> Would you rather {question.optionOne.text}?</p>
                <div className="progress">
                    <div className="progress-bar progress-bar-striped" style={{ width: optionOneWidth + '%' }} ></div>
                </div>
                <p className="masthead-subheading font-weight-light mb-0">
                    {question.optionOne.votes.length} of {totalVotes} votes. ({optionOneWidth}%)
                    {isOptionOneAnswered === true ? (<FaThumbsUp className='voteIcon' />) : "" }  
                </p>
            </div>

            <div className="divider-custom divider-light">
                <div className="divider-custom-line"></div>
                <div className="divider-custom-icon">
                <FaStar className='mainIcon' />
                </div>
                <div className="divider-custom-line"></div>
            </div>

            <div className="test">
                <p className="masthead-subheading font-weight-light mb-0"> Would you rather {question.optionTwo.text}?</p>
                <div className="progress">
                    <div className="progress-bar progress-bar-striped" style={{ width: optionTwoWidth + '%' }} ></div>
                </div>
                <p className="masthead-subheading font-weight-light mb-0">
                    {question.optionTwo.votes.length} of {totalVotes} votes. ({optionTwoWidth}%)
                    {isOptionTwoAnswered === true ? (<FaThumbsUp className='voteIcon' />) : "" }  
                </p>
            </div>

            <div className="text-center mt-4">
                <Link to="/">
                    <button className="btn btn-xl btn-outline-light" ><FaSignInAlt className='loginIcon' />Return</button>
                </Link>
            </div>

        </div>
  </section>

    )
};



// Map State to Props
// -------------------------------------------------------------------
function mapStateToProps({login, questions, users}, props) {
    const {id} = props.match.params;

    let pageNotFound = true;
    let author = "";
    let specificQuestion = "";

    if (questions[id] !== undefined) {
        pageNotFound = false;
        specificQuestion = questions[id];
        author = users[specificQuestion['author']];
    }

    let isOptionOneAnswered = false;
    let isOptionTwoAnswered = false;

    console.log(specificQuestion)
    if (specificQuestion !== "") {
        isOptionOneAnswered = specificQuestion.optionOne.votes.includes(login.loggedInUser.id)
        isOptionTwoAnswered = specificQuestion.optionTwo.votes.includes(login.loggedInUser.id)
    }

    return {
        id,
        question: specificQuestion,
        author: author,
        pageNotFound: pageNotFound,
        isOptionOneAnswered: isOptionOneAnswered,
        isOptionTwoAnswered: isOptionTwoAnswered
    }
}

export default connect(mapStateToProps)(QuestionPollResults);