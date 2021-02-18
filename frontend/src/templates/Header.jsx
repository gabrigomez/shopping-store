import React from 'react';
import { BrowserRouter, Link, Route } from 'react-router-dom'

import "@fortawesome/fontawesome-free/css/all.css";
import './Header.css'
import logo from '../assets/logoMod.png'
import { useDispatch, useSelector } from 'react-redux';
import { signout } from '../actions/userActions';



const Header = () => {
    const userSignIn = useSelector((state) => state.userSignin)
    const { userInfo } = userSignIn
    const dispatch = useDispatch()
    const signoutHandler = () => {
        dispatch(signout())
    }

    return (
        <BrowserRouter>
            <div className="header">
                <a className="icon" href="/">
                    <img className="logo" src={logo} alt="logoMod" />
                </a>
                <a className="cart" href="/cartscreen">
                    <i class="fas fa-cart-arrow-down"> Cart </i>
                </a>
                <Link className="login" to="/login">
                    {userInfo ? (
                        <div>
                            <Link to="#">
                                {userInfo.name}
                            </Link>
                        </div>
                    ) : (

                            <i class="fas fa-sign-in-alt"> Log in </i>
                        )
                    }
                </Link>
            </div>
        </BrowserRouter>
    );
};

export default Header;