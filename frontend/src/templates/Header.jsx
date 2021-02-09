import React from 'react';
import { BrowserRouter, Link, Route } from 'react-router-dom'

import "@fortawesome/fontawesome-free/css/all.css";
import './Header.css'

import logo from '../assets/logoMod.png'

const Header = () => {
    return (
        <BrowserRouter>
            <div className="header">
                <a className="icon" href="/">
                    <img className="logo" src={logo} alt="logoMod" />
                </a>
                <a className="cart" href="/cartscreen">
                    <i class="fas fa-cart-arrow-down"> Cart </i>
                </a>
                <a className="login" href="/login">
                    <i class="fas fa-sign-in-alt"> Log in </i>
                </a>
            </div>
        </BrowserRouter>
    );
};

export default Header;