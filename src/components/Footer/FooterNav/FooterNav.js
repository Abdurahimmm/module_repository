import React from 'react';
import { NavLink } from 'react-router-dom';
import './FooterNav.css';

const FooterNav = () => {
    return (
        <div>
            <ul className="NavigationFooterList">
                <li className="NavigationItem">
                    <NavLink className="NavLink" to='/'>NewsBuilder</NavLink>
                </li>

                <li className="NavigationItem">
                    <NavLink className="NavLink" to='/news'>News</NavLink>
                </li>

                <li className="NavigationItem">
                    <NavLink className="NavLink" to='/addnews'>AddNews</NavLink>
                </li>

                <li className="NavigationItem">
                    <NavLink className="NavLink" to='/contact'>Contact</NavLink>
                </li>
            </ul>
        </div>
    );
}

export default FooterNav;
