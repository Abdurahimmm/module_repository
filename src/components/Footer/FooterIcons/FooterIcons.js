import React from 'react';
import './FooterIcons.css'

const FooterIcons = () => {
    return (
        <div className="footer-wrap">
            <div className="FooterIcon">
                <h3 className="socials">Socials</h3>
                <a href="https://facebook.com" className="fab fa-facebook"></a>
                <a href="https://twitter.com" className="fab fa-twitter"></a>
                <a href="https://vk.com" className="fab fa-vk"></a>
                <a href="https://instagram.com" className="fab fa-instagram"></a>
                <a href="https://plus.google.com" className="fab fa-google-plus-g"></a>
                <a href="https://github.com" className="fab fa-github-alt"></a>
                <a href="https://telegram.org" className="fab fa-telegram-plane"></a>
                <a href="https://youtube.com" className="fab fa-youtube"></a>
            </div>
        </div>
    );
}

export default FooterIcons;
