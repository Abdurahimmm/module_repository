import React from 'react';
import { NavLink } from 'react-router-dom';
import './NavigationList.css';

const NavigationList = (props) => {

  return (
    <div className="navigation">
      <div className="Navigation-list">
        <NavLink className="navLink" to='/'>Home</NavLink>

        <NavLink className="navLink" to='/news'>News</NavLink>

        <NavLink className="navLink" to='/addnews'>AddNews</NavLink>

        <NavLink className="navLink" to='/contact'>Contact</NavLink>
      </div>
    </div>
  );
}

export default NavigationList;
