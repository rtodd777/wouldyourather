// -------------------------------------------------------------------
// Object Name.... Dashboard.js
// Description.... Dashboard 
// Developer...... R. Todd Stephens
// Date Written... 3/15/2020
// -------------------------------------------------------------------
import React, {Component} from 'react';
import {connect} from 'react-redux';
import QuestionList from './QuestionList';

class Dashboard extends Component {

    state = {
        'questionsToShow': 'unanswered',
        'activeTab': 'unanswered'
    };

    handleTabChange = (e, tab) => {
        this.setState(() => ({
            questionsToShow: tab,
            activeTab: tab
        }));
    };

    render() {
        const {questionsToShow, activeTab} = this.state;

        return (
            <section className="masthead bg-primary text-white text-center">

{/* Answered and UnAnswered Tabs */}
                <div className="container d-flex align-items-center flex-column">
          	        <div className="container">
		                <h6 className="section-title h1 mb-5">Would You Rather?</h6>
		                <div className="row">
		                    <div className="col-lg-12 pb-3">
			                    <nav>
				                    <div className="nav nav-tabs nav-fill" id="nav-tab" role="tablist">
                                        <a className={activeTab === 'unanswered' ? 'nav-item nav-link active' : 'nav-item nav-link'} id="nav-home-tab" data-toggle="tab" onClick={(e) => this.handleTabChange(e, 'unanswered')} role="tab" aria-controls="nav-home" aria-selected="true">UnAnswered Questions</a>
						                <a className={activeTab === 'answered' ? 'nav-item nav-link active' : 'nav-item nav-link'} id="nav-profile-tab" data-toggle="tab" onClick={(e) => this.handleTabChange(e, 'answered')} role="tab" aria-controls="nav-profile" aria-selected="false">Answered Questions</a>
					                </div>
				                </nav>
			                </div>
		                </div>

	                </div>
                </div>

{/* Question List */}
                <div className='projectContainer'>
                    <div className='container'>
                        <div className='row'>
                                {this.props.questionIds.map((id) => {
                                    return (
                                        <QuestionList key={id} id={id} questionsToShow={questionsToShow}/>
                                    )
                                })}
                        </div>
                    </div>
                </div>

            </section>
        )
    }
}

function mapStateToProps({questions}) {
    return {
        questionIds: Object.keys(questions)
            .sort((a, b) => questions[b].timestamp - questions[a].timestamp)
    }
}

export default connect(mapStateToProps)(Dashboard);