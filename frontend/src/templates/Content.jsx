import React from 'react';
import { BrowserRouter, Link, Route } from 'react-router-dom'
import Homepage from '../screens/Homepage';

import './Content.css'

const Content = () => {
    return (
        <BrowserRouter>
            <div className='content'>
                <Route path="/Homepage" component={Homepage}></Route>
            </div>
        </BrowserRouter>
    );
};

export default Content;