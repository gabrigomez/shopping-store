import React from 'react';
import { BrowserRouter, Link, Route } from 'react-router-dom'

import "@fortawesome/fontawesome-free/css/all.css";
import './Header.css'
import logo from '../assets/logoMod.png'
import AssignmentIndIcon from '@material-ui/icons/AssignmentInd';
import AddBoxIcon from '@material-ui/icons/AddBox';
import IconButton from '@material-ui/core/IconButton';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import { ThemeProvider } from '@material-ui/core/styles';

import { useDispatch, useSelector } from 'react-redux';
import { signout } from '../actions/userActions';
import { theme, StyledBadge } from '../utils/materialUI';
import { Typography } from '@material-ui/core';
import HomeIcon from '@material-ui/icons/Home';



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
                    {cartItems.length > 0 ?
                        (
                            <div className="cartQtd">
                                <IconButton aria-label="cart">
                                    <ThemeProvider theme={theme}>
                                        <StyledBadge badgeContent={cartItems.length} color="primary">
                                            <ShoppingCartIcon className="cart" />
                                        </StyledBadge>
                                    </ThemeProvider>
                                </IconButton>
                            </div>
                        ) : (

                            <div>
                                <ShoppingCartIcon />
                                <ThemeProvider theme={theme}>
                                    <Typography color="primary" >
                                        Carrinho
                                    </Typography>
                                </ThemeProvider>
                            </div>
                        )
                    }
                </a>
                <div className="login" >
                    {userInfo ? (
                        <div className="loginName">
                            <a to="#">
                                <HomeIcon fontSize="small" />
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