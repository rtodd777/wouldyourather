// -------------------------------------------------------------------
// Object Name.... LogOut.js
// Description.... User Logout Component
// Developer...... R. Todd Stephens
// Date Written... 3/12/2020
// -------------------------------------------------------------------
import React, {Component} from 'react';
import {Redirect} from 'react-router-dom';
import {connect} from 'react-redux';
import {receiveAuthLogout} from '../actions/auth';

class Logout extends Component {
    componentDidMount() {
        this.props.dispatch(receiveAuthLogout());
    }

    render() {
        return (
            <Redirect to="/login" />
        );
    }
}

export default connect()(Logout);