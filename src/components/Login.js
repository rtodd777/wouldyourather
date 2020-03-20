// -------------------------------------------------------------------
// Object Name.... Login.js
// Description.... User Login Component
// Developer...... R. Todd Stephens
// Date Written... 3/9/2020
// -------------------------------------------------------------------
import React, {Component} from 'react';
import {Redirect} from 'react-router-dom';
import {connect} from 'react-redux';
import LoadingBar from "react-redux-loading";

// Import Actions
import {handleGetUsers} from '../actions/users';
import {handleLoginUser} from '../actions/auth';

// Import Misc.
import avatar from '../images/police.svg';
import { FaStar } from 'react-icons/fa/index'
import { FaSignInAlt } from 'react-icons/fa/index'


class Login extends Component {
    state = {
        userSelected: ''
    };


// Component Did Mount: Get Users for the Dropdown
// -------------------------------------------------------------------
    componentDidMount() {
        this.props.dispatch(handleGetUsers());
    }


// User Selected
// -------------------------------------------------------------------
    handleChange = (e) => {
        const userSelected = e.target.value;
        this.setState(() => ({
            userSelected
        }));
    };


// Submit Button Clicked
// -------------------------------------------------------------------
    handleSubmit = (e) => {
        e.preventDefault();
        const {dispatch} = this.props;
        dispatch(handleLoginUser(this.state.userSelected));
    };


    render() {
        if (this.props.loading === true || !this.props.users) {
            return <div/>;
        }

        const {from} = this.props.location.state || {from: {pathname: '/'}};

        if (this.props.userAuthenticated) {
            return <Redirect to={from}/>;
        }

        return (
            <div>
                <LoadingBar />

                    <section className="masthead bg-primary text-white text-center">
                        <div className="container d-flex align-items-center flex-column">

                            <img src={avatar} className="masthead-avatar mb-5" alt="Avatar" />

                            <h1 className="masthead-heading text-uppercase mb-0">User Login</h1>

                            <div className="divider-custom divider-light">
                                <div className="divider-custom-line"></div>    
                                <div className="divider-custom-icon">
                                    <FaStar className='mainIcon' />
                                </div>
                                <div className="divider-custom-line"></div>
                            </div>

                            <form>
                                <div className="form-group">
                                    <label>Please Login to Get Started:</label>
                                    <select className="form-control" id="userId"
                                        onChange={(e) => this.handleChange(e)}>
                                        <option>Select User</option>
                                        { 
                                            Object.keys(this.props.users).map((user) => {
                                                return <option 
                                                        key={this.props.users[user].id}
                                                        value={this.props.users[user].id}>{this.props.users[user].name}
                                                    </option>
                                            })
                                        }
                                    </select>
                                </div>
                            </form>

                            <div className="text-center mt-4">
                                <button onClick={this.handleSubmit} className="btn btn-xl btn-outline-light" disabled={this.state.userSelected === ''}><FaSignInAlt className='loginIcon' />Login</button>
                            </div>
                    
                        </div>
                    </section>

            </div>
        );
    }
}


// Map State to Props
// -------------------------------------------------------------------
function mapStateToProps({users, login}) {
    return {
        loading: users === null,
        users,
        userAuthenticated: login.authenticated
    }
}

export default connect(mapStateToProps)(Login);