// -------------------------------------------------------------------
// Object Name.... QuestionPoll.js
// Description.... Question Poll Question
// Developer...... R. Todd Stephens
// Date Written... 3/18/2020
// -------------------------------------------------------------------
import React, {Component} from 'react';
import {connect} from 'react-redux';
import {handleAddQuestionAnswer} from '../actions/shared';
import {Redirect} from "react-router-dom";

import { FaVoteYea } from 'react-icons/fa/index'


class QuestionPoll extends Component {


// Define State
// -------------------------------------------------------------------
    state = {
        optionSelected: '',
        answerSubmitted: false
    };


// Submit Answer to the Form
// -------------------------------------------------------------------
    handleSubmit(e, questionId) {
        e.preventDefault();

        const {dispatch} = this.props;
        const {optionSelected} = this.state;

        dispatch(handleAddQuestionAnswer(questionId, optionSelected));

        this.setState(() => ({
            optionSelected: '',
            answerSubmitted: true
        }));
    }


// An Answer has been Clicked
// -------------------------------------------------------------------
    handleInputChange = (e) => {
        const text = e.target.value;
        this.setState(() => ({
            optionSelected: text
        }));
    };


// Rendor HTML
// -------------------------------------------------------------------
    render() {
        const {optionSelected, answerSubmitted} = this.state;
        const {id, question, author} = this.props;

// If the Question has been answered; Jump to the Results Page
        const redirectTo = `/question/${id}/results`;
        if (answerSubmitted === true) {
            return <Redirect to={redirectTo}/>;
        }

        return (

            <section className="masthead bg-primary text-white text-center">
                <div className="container d-flex align-items-center flex-column">

                    <img src={author.avatarURL} alt={`Avatar of ${author.name}`} className='masthead-avatar mb-5'/>

                    <h1 className="masthead-heading text-uppercase mb-4">{author.name} asks,</h1>

                    <div className="divider-custom divider-light">
                        <div className="divider-custom-line"></div>
                        <div className="divider-custom-icon">
                            <i className="fas fa-star"></i>
                        </div>
                        <div className="divider-custom-line"></div>
                    </div>

                    <div className="">

                        <h5 className="section-title h1 mb-5 mt-4">Would You Rather?</h5>

                        <form onSubmit={(e) => this.handleSubmit(e, id)}>

                            <label className="containerRadio"><span className="radioQuestion">{question.optionOne.text}</span>
                                <input type="radio" name="radio" id="optionOne" value="optionOne" onChange={this.handleInputChange} />
                                <span className="checkmark"></span>
                            </label>
                            <label className="containerRadio"><span className="radioQuestion">{question.optionTwo.text}</span>
                                <input type="radio" name="radio" id="optionTwo" value="optionTwo" onChange={this.handleInputChange} />
                                <span className="checkmark"></span>
                            </label>

                            <button className='btn btn-xl btn-outline-light m-15-top' type='submit' disabled={optionSelected === ''} ><FaVoteYea className='loginIcon' />Cast Vote</button>

                        </form>

                    </div>
                </div>
            </section>

        )
    }
}


// Map State to Props
// -------------------------------------------------------------------
function mapStateToProps({login, questions, users, match}, props) {
    const {id} = props.match.params;

    let author = "";
    let specificQuestion = "";

    if (questions[id] !== undefined) {
        specificQuestion = questions[id];
        author = users[specificQuestion['author']];
    }

    return {
        id,
        question: specificQuestion,
        author: author,
        authedUser: login.loggedInUser.id
    }
}

export default connect(mapStateToProps)(QuestionPoll);