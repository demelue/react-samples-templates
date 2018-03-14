import React from 'react';
import { NavLink } from 'react-router-dom';
import '../css/Navigation.css';

const HorizontalNavList = props => {

  return (
    <div>
      <ul className="course-nav">
        <li><NavLink to="/Home"> HOME </NavLink></li>
        <li><NavLink to="/Settings"> SETTINGS </NavLink></li>
        <li><NavLink to="/Profile"> PROFILE </NavLink></li>
      </ul>
    </div>
    );
}

export default HorizontalNavList;
