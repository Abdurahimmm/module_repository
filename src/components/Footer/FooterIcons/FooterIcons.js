import React from 'react';
import './FooterIcons.css'

const FooterIcons = () => {
    return (
        <div className="footer-wrap">
            <div className="FooterIcon">
                <h3 className="socials">Socials</h3>
                <a href="https://facebook.com" className="fab fa-facebook">facebook</a>
                <a href="https://twitter.com" className="fab fa-twitter">twitter</a>
                <a href="https://vk.com" className="fab fa-vk">vk</a>
                <a href="https://instagram.com" className="fab fa-instagram">instagram</a>
                <a href="https://plus.google.com" className="fab fa-google-plus-g">google</a>
                <a href="https://github.com" className="fab fa-github-alt">github</a>
                <a href="https://telegram.org" className="fab fa-telegram-plane">telegram</a>
                <a href="https://youtube.com" className="fab fa-youtube">fa-youtube</a>
            </div>
        </div>
    );
}

export default FooterIcons;
