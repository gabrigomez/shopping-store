import React from 'react';
import { BrowserRouter, Link, Route } from 'react-router-dom'

import './Header.css'

const Header = () => {
    return (
        <BrowserRouter>
            
                <div className="header">
                    <Link className="icon" to="/">
                        <h1> Shopping Store </h1>
                    </Link>
                    <Link className="cart" to="/cartscreen">
                        <a> Cart </a>
                    </Link>
                    <Link className="login" to='/login'>
                        <a> Log in</a>
                    </Link>
                </div>
            
        </BrowserRouter>
    );
};

export default Header;