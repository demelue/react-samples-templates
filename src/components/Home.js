import React from 'react';
import { NavLink } from 'react-router-dom';
import * as routes from '../constants/routes';



const Home = props => {

  return (
    <div className="Home" align="left">
      <h3>Templates</h3>
      <ul>
        <li><NavLink to={routes.NAVIGATION}> Navigation </NavLink></li>
        <li><NavLink to={routes.FORMS}> Form </NavLink></li>
        <li><NavLink to={routes.MISC}> Miscellaneous </NavLink></li>
        <li><NavLink to={routes.ALERT}> Alert </NavLink></li>
        <li><NavLink to={routes.ICON}> Icon </NavLink></li>
      </ul>
    </div>
    );
}

export default Home;
