import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom'

import ProductScreen from '../screens/ProductScreen';
import LoginScreen from '../screens/LoginScreen';
import ProductDetails from '../screens/ProductDetails';

import './Content.css'

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
                    </Switch>
                </div>                
            </div>
        </BrowserRouter>
    );
};

export default Content;