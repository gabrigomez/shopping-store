import React from 'react';
import { BrowserRouter, Link, Route } from 'react-router-dom'

import "@fortawesome/fontawesome-free/css/all.css";
import './Header.css'

const Header = () => {
    return (
        <BrowserRouter>
            <div className="header">
                <a className="icon" href="/">
                    <h1> Shopping Store </h1>
                </a>

                <a className="cart" href="/cartscreen">
                    <i class="fas fa-cart-arrow-down"> Cart </i>
                </a>
                <a className="login" href="/login">
                    Log in
                </a>
            </div>
        </BrowserRouter>
    );
};

export default Header;