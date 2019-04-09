import React from 'react';
import './FooterIcons.css'

const FooterIcons = () => {
    return (
        <div className="footer-wrap">
            <div className="FooterIcon">
                <h3 className="socials">Socials</h3>
                <a href="https://facebook.com"><span className="fab fa-facebook"></span></a>
                <a href="https://twitter.com"><span className="fab fa-twitter"></span></a>
                <a href="https://vk.com"><span className="fab fa-vk"></span></a>
                <a href="https://instagram.com"><span className="fab fa-instagram"></span></a>
                <a href="https://plus.google.com"><span className="fab fa-google-plus-g"></span></a>
                <a href="https://github.com"><span className="fab fa-github"></span></a>
                <a href="https://telegram.org"><span className="fab fa-telegram-plane"></span></a>
                <a href="https://youtube.com"><span className="fab fa-youtube"></span></a>
            </div>
        </div>
    );
}

export default FooterIcons;
