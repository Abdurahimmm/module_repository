import React from 'react';
import logo from '../../../assets/images/logo.png';
import './Logo.css'
import { NavLink } from 'react-router-dom';

const Logo = (props) => {
    return (
        <div className="Logo">
            <NavLink to="/">
                <img src={logo} alt="Logo"/>
            </NavLink>
        </div>
    );
}

export default Logo;
