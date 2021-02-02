import React from 'react';
import { BrowserRouter, Link, Route } from 'react-router-dom'

import ProductScreen from '../screens/ProductScreen';

import './Content.css'

const Content = () => {
    return (
        <BrowserRouter>
            <div className='content'>                
                <Route path="/" exact component={ProductScreen}></Route>
            </div>
        </BrowserRouter>
    );
};

export default Content;