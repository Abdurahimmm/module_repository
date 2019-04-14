import React from 'react';
import './FooterIcons.css'

const FooterIcons = () => {
    return (
        <div className="footer-wrap">
            <div className="FooterIcon">
                <h3 className="socials">How to contact</h3>
                <a target="_blank" href="https://facebook.com"><span className="fab fa-facebook"></span></a>
                <a target="_blank" href="https://twitter.com"><span className="fab fa-twitter"></span></a>
                <a target="_blank" href="https://vk.com"><span className="fab fa-vk"></span></a>
                <a target="_blank" href="https://instagram.com"><span className="fab fa-instagram"></span></a>
                <a target="_blank" href="https://plus.google.com"><span className="fab fa-google-plus-g"></span></a>
                <a target="_blank" href="https://github.com"><span className="fab fa-github"></span></a>
                <a target="_blank" href="https://telegram.org"><span className="fab fa-telegram-plane"></span></a>
                <a target="_blank" href="https://youtube.com"><span className="fab fa-youtube"></span></a>
            </div>
        </div>
    );
}

export default FooterIcons;
