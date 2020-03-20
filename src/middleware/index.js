
// -------------------------------------------------------------------
// Object Name.... index.js
// Description.... Middleware Component
// Developer...... R. Todd Stephens
// Date Written... 3/15/2020
// -------------------------------------------------------------------
import thunk from 'redux-thunk';
import {applyMiddleware} from 'redux';

export default applyMiddleware(
    thunk
)