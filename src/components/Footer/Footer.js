import React from 'react';
import FooterNav from './FooterNav/FooterNav';
import './Footer.css'
import FooterIcons from './FooterIcons/FooterIcons';
import FooterLogo from './FooterLogo/FooterLogo';

const Footer = () => {
    return (
        <footer className="footer">
            <FooterNav/>
            <FooterIcons/>
            <FooterLogo/>
        </footer>
    );
}

export default Footer;
