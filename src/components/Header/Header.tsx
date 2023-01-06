import React from 'react';
import { Link, useLocation } from "react-router-dom";
import './Header.scss'
const Header = () => {
    const location = useLocation()
    return (
        <header className="header">
            <nav className="nav">
                {location.pathname !== '/' && <Link to={'/'}>Go back</Link>}
            </nav>
        </header>
    );
};

export default Header;
