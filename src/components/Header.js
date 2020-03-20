// -------------------------------------------------------------------
// Object Name.... Header.js
// Description.... Header Component
// Developer...... R. Todd Stephens
// Date Written... 3/9/2020
// -------------------------------------------------------------------
import React from 'react'
import { NavLink } from 'react-router-dom'

const Header = (loggedInUser) => {

  return (
     <nav className="navbar navbar-expand-lg bg-secondary text-uppercase fixed-top" id="mainNav">
          <div className="container">
               <a className="navbar-brand js-scroll-trigger" href="#page-top">
                    {loggedInUser.loggedInUser.name != null
                        ? "Welcome, " + loggedInUser.loggedInUser.name
                        : "Would You Rather?"
                    }                    
               </a>
               <button className="navbar-toggler navbar-toggler-right text-uppercase font-weight-bold bg-primary text-white rounded" type="button" data-toggle="collapse" data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
                    Menu
                    <i className="fas fa-bars"></i>
               </button>
               <div className="collapse navbar-collapse" id="navbarResponsive">
                    <ul className="navbar-nav ml-auto">
                         <li className="nav-item mx-0 mx-lg-1">
                              <NavLink className="nav-link py-3 px-0 px-lg-3" to="/">Home</NavLink>
                         </li>
                         <li className="nav-item mx-0 mx-lg-1">
                              <NavLink className="nav-link py-3 px-0 px-lg-3" to="/add">New Question</NavLink>
                         </li>
                         <li className="nav-item mx-0 mx-lg-1">
                              <NavLink className="nav-link py-3 px-0 px-lg-3" to="/leaderboard">Leaderboard</NavLink>
                         </li>
                         <li className="nav-item mx-0 mx-lg-1">
                              {loggedInUser.loggedInUser.name != null
                                  ? <NavLink className="nav-link py-3 px-0 px-lg-3" to="/logout">Logout</NavLink>
                                  : <div className="nav-link py-3 px-0 px-lg-3 linkDisabled">Logout</div>
                              }                    
                         </li>
                    </ul>
               </div>
          </div>
     </nav>
  )
} 

export default Header;