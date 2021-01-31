import React from 'react';
import { BrowserRouter, Link, Route } from 'react-router-dom'

import './Header.css'

const Header = () => {
    return (
        <BrowserRouter>
            <div className="header">
                <Link to="/">
                    <h1> Shopping Store </h1>
                </Link>
            </div>
        </BrowserRouter>
    );
};

export default Header;