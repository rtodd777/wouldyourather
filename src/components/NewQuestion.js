// -------------------------------------------------------------------
// Object Name.... New Question.js
// Description.... New Question
// Developer...... R. Todd Stephens
// Date Written... 3/20/2020
// -------------------------------------------------------------------
import React, {Component} from 'react';
import {connect} from 'react-redux';
import {handleAddQuestion} from '../actions/shared';
import {Redirect} from 'react-router-dom';

// Import Other
import { FaStar } from 'react-icons/fa/index'
import { FaQuestion } from 'react-icons/fa/index'
import avatar from '../images/avatar7.svg';


class NewQuestion extends Component {

// State Data Defined
// -------------------------------------------------------------------
    state = {
        optionOneText: '',
        optionTwoText: '',
        returnToDashboard: false
    };


// Handle Option One Text Changed
// -------------------------------------------------------------------
    handleOptionOneTextChange = (e) => {
        const text = e.target.value;
        this.setState({
            optionOneText: text
        });
    };


// Handle Option Two Text Changed
// -------------------------------------------------------------------
    handleOptionTwoTextChange = (e) => {
        const text = e.target.value;
        this.setState({
            optionTwoText: text
        });
    };


// Handle Submit Button 
// -------------------------------------------------------------------
    handleSubmit = (e) => {
        e.preventDefault();
        const {optionOneText, optionTwoText} = this.state;
        const {dispatch} = this.props;

        dispatch(handleAddQuestion(optionOneText, optionTwoText, () => {
            this.setState({
                optionOneText: '',
                optionTwoText: '',
                returnToDashboard: true
            });
        }));
    };

    render() {
        const { optionOneText, optionTwoText, returnToDashboard } = this.state;

        if (returnToDashboard === true) {
            return <Redirect to='/'/>;
        }

        return (

          <section className="masthead bg-primary text-white text-center">
            <div className="containerx d-flex align-items-center flex-column">

              <img src={avatar} className="masthead-avatar mb-5" alt="Avatar" />
              <h1 className="masthead-heading text-uppercase mb-0">Add Would You Rather?</h1>

              <div className="divider-custom divider-light">
                <div className="divider-custom-line"></div>
                <div className="divider-custom-icon">
                  <FaStar className='mainIcon' />
                </div>
                <div className="divider-custom-line"></div>
              </div>

              <div className="">
                <form name="sentMessage" id="contactForm" noValidate="novalidate">
                  <div className="control-group">
                    <div className="form-group floating-label-form-group controls mb-0 pb-2">
                      <input 
                        className="form-control" 
                        id="name" 
                        type="text" 
                        placeholder="Enter Option #1" 
                        required="required" 
                        data-validation-required-message="Please enter your name."
                        value={optionOneText}
                        onChange={this.handleOptionOneTextChange}
                      />
                    </div>
                  </div>
                  <div className="control-group">
                    <div className="form-group floating-label-form-group controls mb-0 pb-2">
                      <input 
                        className="form-control" 
                        id="name" 
                        type="text" 
                        placeholder="Enter Option #2" 
                        required="required" 
                        data-validation-required-message="Please enter your name."
                        value={optionTwoText}
                        onChange={this.handleOptionTwoTextChange}
                      />
                    </div>
                  </div>
                </form>
              </div>

              <div className="text-center mt-4">
                <button className='btn btn-xl btn-outline-light m-15-top' onClick={this.handleSubmit} type='submit' disabled ={optionOneText === '' || optionTwoText === ''}><FaQuestion className='loginIcon' />Create Question</button>
              </div>

            </div>
          </section>

        )
    }
} 

export default connect()(NewQuestion);