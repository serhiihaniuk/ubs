import React from 'react';
import { Link } from "react-router-dom";
import './Header.scss'
const Header = () => {
    return (
        <header className="header">
            <nav className="nav">
                <Link to={'/'}>Home</Link>
                <Link to={'/show/1'}>Details</Link>
            </nav>
        </header>
    );
};

export default Header;
