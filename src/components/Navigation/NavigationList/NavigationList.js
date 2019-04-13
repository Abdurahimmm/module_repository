import React from 'react';
import { NavLink } from 'react-router-dom';
import './NavigationList.css';

const NavigationList = (props) => {

  return (
    <div className="navigation">
      <ul className="Navigation-list">
        <li className="Navigation-item">
          <NavLink className="navLink" to='/'>NewsBuilder</NavLink>
        </li>

        <li className="Navigation-item">
          <NavLink className="navLink" to='/news'>News</NavLink>
        </li>

        <li className="Navigation-item">
          <NavLink className="navLink" to='/addnews'>AddNews</NavLink>
        </li>

        <li className="Navigation-item">
          <NavLink className="navLink" to='/contact'>Contact</NavLink>
        </li>
      </ul>
    </div>
  );
}

export default NavigationList;
