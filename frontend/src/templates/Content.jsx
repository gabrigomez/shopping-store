import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom'

import ProductScreen from '../screens/ProductScreen';
import LoginScreen from '../screens/LoginScreen';
import ProductDetails from '../screens/ProductDetails';

import './Content.css'
import CartScreen from '../screens/CartScreen';

const Content = () => {
    return (
        <BrowserRouter>
            <div className='content'>
                <hr />
                <div>
                    <Switch>
                        <Route path="/" exact component={ProductScreen}></Route>
                        <Route path="/login" component={LoginScreen}></Route>
                        <Route path="/product/:id" component={ProductDetails}></Route>
                        <Route path="/cart/:id?" component={CartScreen}></Route>
                    </Switch>
                </div>
            </div>
        </BrowserRouter>
    );
};

export default Content;