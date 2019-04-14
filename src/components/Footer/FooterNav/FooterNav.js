import React from 'react';
import { NavLink } from 'react-router-dom';
import './FooterNav.css';

const FooterNav = () => {
    return (
        <div className="footer-nav">
            <ul className="NavigationFooterList">
                <li className="NavigationItem">
                    <NavLink className="NavLink" to='/'>Home</NavLink>
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

                <li className="NavigationItemTop">
                    <a className="NavLink Top" href="#top">ToTheTop</a>
                </li>
            </ul>
        </div>
    );
}

export default FooterNav;
