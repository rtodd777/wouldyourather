// -------------------------------------------------------------------
// Object Name.... Error404.js
// Description.... Error 404
// Developer...... R. Todd Stephens
// Date Written... 3/19/2020
// -------------------------------------------------------------------
import React from 'react';
import { FaSkull } from 'react-icons/fa/index'
import { NavLink } from 'react-router-dom'

const NotFound = () => (
  <div>
    <div className="bigText">
          <FaSkull className='errorIcon' />         
          <p>Error 404: Page Not Found</p>
     </div>

     <div className="text-center mt-4 mb-5">
          <button className="btn btn-xl btn-outline-light">
               <NavLink className="nav-link py-3 px-0 px-lg-3" to="/">
                    <span className="ErrorButton">Return to Home</span>
               </NavLink>
          </button>
     </div>
  </div>
);

export default NotFound;