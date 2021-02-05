import React from 'react';

import "@fortawesome/fontawesome-free/css/all.css";
import './Footer.css'

const Footer = () => {
    return (        
        <footer className="footer">            
            <div>
                <a className="linkFooter" href="https://github.com/gabrigomez">
                    <i class="fas fa-laptop-code"></i>
                    <span> @gabrigomez - 2021</span>
                </a>
            </div>
            <div>
                <i class="fab fa-facebook"></i>
                <i class="fab fa-instagram"></i>
            </div>
        </footer>        
    );
};

export default Footer;