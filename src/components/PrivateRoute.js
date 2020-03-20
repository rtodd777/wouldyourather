// -------------------------------------------------------------------
// Object Name.... PrivateRoute.js
// Description.... Private Route Component
// Developer...... R. Todd Stephens
// Date Written... 3/20/2020
// -------------------------------------------------------------------
import React from 'react';
import {Route, Redirect} from 'react-router-dom';

const PrivateRoute = ({component: Component, isAuthenticated, ...rest}) => (
    <Route
        {...rest}
        render={props => (
            isAuthenticated
                ? <Component {...props} />
                : <Redirect to={{
                    pathname: '/login',
                    state: {from: props.location.pathname}
                }}/>
        )}
    />
);

export default PrivateRoute;