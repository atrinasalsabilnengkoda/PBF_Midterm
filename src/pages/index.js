import React, { Component } from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";
import Collection from '../components/Collection';
import Cart from '../components/Cart';
import Home from '../pages/Home';
import Navbar from '../containers/Navbar';
import About from '../pages/About';

const index = () => {
    return (
        <Router>
            <div className='AiroStore'>
                <Navbar />
                <div className='container'>
                    <Switch>
                        <Route exact path='/'><Home /></Route>
                        <Route exact path='/collection'><Collection /></Route>
                        <Route exact path='/cart'><Cart /></Route>
                        <Route exact path='/about'><About /></Route>
                    </Switch>
                </div>
            </div>
        </Router>
    );
}

export default index;