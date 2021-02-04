import React from 'react';

import "@fortawesome/fontawesome-free/css/all.css";
import './Footer.css'

const Footer = () => {
    return (
        <div className="footer">
            <a className="linkFooter" href="https://github.com/gabrigomez">
                <i class="fas fa-laptop-code"></i>
                <span> @gabrigomez - 2021</span>
            </a>

        </div>
    );
};

export default Footer;