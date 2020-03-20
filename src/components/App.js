// -------------------------------------------------------------------
// Object Name.... App.js
// Description.... App Component
// Developer...... R. Todd Stephens
// Date Written... 3/9/2020
// -------------------------------------------------------------------
import React, {Component, Fragment} from 'react';
import {BrowserRouter as Router, Route, Switch, withRouter} from 'react-router-dom';
import {connect} from 'react-redux';
import LoadingBar from 'react-redux-loading';

// Import Pages
import Dashboard from './Dashboard';
import NewQuestion from './NewQuestion';
import QuestionPoll from './QuestionPoll';
import QuestionPollResults from './QuestionPollResults';
import Leaderboard from './Leaderboard';
import Header from './Header';
import Footer from './Footer';
import Login from './Login';
import Logout from './Logout';
import PrivateRoute from './PrivateRoute';
import Error404 from './Error404';

// Import Actions
import {handleGetQuestions} from "../actions/questions";

// Import Additional CSS Files
import '../css/App.css';
import '../css/freelancer.css';
import '../css/main.css';

class App extends Component {
    componentDidMount() {
        this.props.dispatch(handleGetQuestions());
    }

    render() {
        return (
            <Router>
                <Fragment>
                    <LoadingBar />

                    {this.props.authenticated == null
                        ? <Header loggedInUser=""/>
                        : <Header loggedInUser={this.props.loggedInUser}/>
                    }

                    <div>
                        {this.props.loading === true
                            ? null
                            : <div>
                                <Switch>
                                    <PrivateRoute path='/' exact component={Dashboard}
                                                    isAuthenticated={this.props.authenticated}/>

                                    <PrivateRoute path='/question/:id' exact component={connect(mapStateToProps)(QuestionPoll)}
                                                    isAuthenticated={this.props.authenticated}/>

                                    <PrivateRoute path='/question/:id/results'
                                                    exact component={connect(mapStateToProps)(QuestionPollResults)}
                                                    isAuthenticated={this.props.authenticated}/>

                                    <PrivateRoute path='/add' exact component={NewQuestion}
                                                    isAuthenticated={this.props.authenticated}/>

                                    <PrivateRoute path='/leaderboard' exact component={Leaderboard}
                                                    isAuthenticated={this.props.authenticated}/>

                                    <Route path="/login" exact component={withRouter(Login)}/>
                                    <Route path="/logout" exact component={withRouter(Logout)}/>
                                    
                                    <Route component={Error404} />
                                </Switch>
                            </div>
                        }

                    </div>
                    <Footer />
                </Fragment>
            </Router>
        );
    }
}

function mapStateToProps({users, login}) {
    return {
        loading: false,
        loggedInUser: login.loggedInUser,
        authenticated: login.authenticated
    }
}

export default connect(mapStateToProps)(App);
