// -------------------------------------------------------------------
// Object Name.... Leaderboard.js
// Description.... Leaderbaord
// Developer...... R. Todd Stephens
// Date Written... 3/19/2020
// -------------------------------------------------------------------
import React from 'react';
import connect from "react-redux/es/connect/connect";

import { FaTrophy } from 'react-icons/fa/index'


const Leaderboard = (props) => {
    const {users} = props;


// Build out Array of user information
// -------------------------------------------------------------------
    let userInformation = Object.keys(users).map((key, index) => {
        let questionsAnswered = Object.keys(users[key].answers).length;
        let questionsAsked = Object.keys(users[key].questions).length;
        return {
            'name': users[key].name,
            'avatar': users[key].avatarURL,
            'questionsAnswered': questionsAnswered,
            'questionsAsked': questionsAsked,
            'totalScore': questionsAnswered + questionsAsked
        }
    });


// Sort to Get the Top Players
// -------------------------------------------------------------------
    userInformation.sort((a, b) => {
        if (b.totalScore < a.totalScore) return -1;
        if (b.totalScore > a.totalScore) return 1;
        return 0;
    });

    return (

         <div>
            <section className="masthead bg-primary text-white text-center">

                <div className='projectContainer'>
                    <div className='container'>
                        <h6 className="section-title h1 mb-5">Leaderboard</h6>

                        <div className='row'>

                            {userInformation.map((player, index) => {
                                return (

                                    <div className="col-xs-12 col-sm-6 col-md-4" key={index}>
                                        <div className="image-flip">
                                            <div className="mainflip">
                                                <div className="frontside">
                                                    <div className='card'>
                                                        <div className="card-body text-center">
                                                            <p>
                                                                <img src={player.avatar} alt={`Avatar of ${player.name}`} className='avatar'/>
                                                            </p>
                                                            <h2><FaTrophy className='dashboardIcon' /><span className="dashboardCount">{index + 1}</span></h2>
                                                            <h4 className="card-title">{player.name}</h4>

				                                            <div className="rTable">
    				                                            <div className="rTableRow">
	        			                                            <div className="rTableCellL"><strong>Questions Asked</strong></div>
			        	                                            <div className="rTableCellR">{player.questionsAsked}</div>
				                                                </div>
				                                                <div className="rTableRow">
				                                                    <div className="rTableCellL"><strong>Questions Answered</strong></div>
				                                                    <div className="rTableCellR">{player.questionsAnswered}</div>
				                                                </div>
				                                                <div className="rTableRow">
                                                                    <hr></hr>
				                                                </div>
				                                                <div className="rTableRow">
				                                                    <div className="rTableCellL"><h6>Total Score</h6></div>
				                                                    <div className="rTableCellR"><h6>{player.totalScore}</h6></div>
				                                                </div>
				                                            </div>

							                            </div>

                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                )
                            })}
                        </div>
                    </div>
                </div>
            </section>
        </div>

    )
};


// Map State 
// -------------------------------------------------------------------
function mapStateToProps({users}) {
    return {
        users
    }
}

export default connect(mapStateToProps)(Leaderboard);