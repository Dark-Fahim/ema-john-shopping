import React from 'react';
import logo from '../../images/Logo.svg'
import './Header.css'

const Header = () => {
    return (
        <div className="header-container">
            <nav className="header">
                <img src={logo} alt="" />
                <div className="header-links">
                    <ul>
                        <li><a href="/shop">Shop</a></li>
                        <li><a href="/Orders">Orders</a></li>
                        <li><a href="/inventory">Inventory</a></li>
                        <li><a href="/About">About</a></li>
                    </ul>
            </div>
            </nav>
        </div>
    );
};

export default Header;