import React from 'react';
import { BrowserRouter, Link, Route } from 'react-router-dom'

import "@fortawesome/fontawesome-free/css/all.css";
import './Header.css'
import logo from '../assets/logoMod.png'
import AssignmentIndIcon from '@material-ui/icons/AssignmentInd';
import AddBoxIcon from '@material-ui/icons/AddBox';
import { useDispatch, useSelector } from 'react-redux';
import { signout } from '../actions/userActions';


const Header = () => {
    const userSignIn = useSelector((state) => state.userSignin)
    const cart = useSelector((state) => state.cart)
    const { cartItems } = cart
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
                    {cartItems.length > 0 ? (
                        <div className="cartQtd">
                            {cartItems.length}
                        </div>
                    ) :
                        <div></div>
                    }
                </a>
                <div className="login" >
                    {userInfo ? (
                        <div className="loginName">
                            <a to="#">
                                Fala, {userInfo.name}!
                            </a>
                            <ul className="logout">
                                <li>
                                    <a onClick={signoutHandler}>
                                        <i class="fas fa-sign-out-alt"></i>
                                        Sair
                                    </a>
                                </li>
                            </ul>
                        </div>
                    ) : (
                            <div className="login">
                                <a className="loginField" href="/login" >
                                    <AssignmentIndIcon fontSize="small" /> Log in
                                </a>
                                <a className="signup" href="/signup">
                                    <AddBoxIcon fontSize="small" /> Cadastre-se
                                </a>
                            </div>
                        )
                    }
                </div>
            </div>
        </BrowserRouter>
    );
};

export default Header;