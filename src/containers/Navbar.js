import React from 'react';
import { Link } from 'react-router-dom';
import Image from '../resource/iron.png';

const Navbar = () => {
    return (
        <div>
            <nav className="navbar navbar-dark bg-primary my-2 my-md-0 mr-md-3">
                <Link className="navbar-brand" to="/">
                    <img src={Image} width="35" height="35" className="d-inline-block align-top" alt="" />
                    Airon Store
                </Link>
                
                <nav className="my-2 my-md-0 mr-md-3">
                    <Link className="p-2 text-white" to="/collection">Collection</Link>
                    <Link className="p-2 text-white" to="/cart">My Cart</Link>
                    <Link className="p-2 text-white" to="/about">About</Link>
                </nav>
            </nav>
        </div>
    );
  };
  
  export default Navbar;