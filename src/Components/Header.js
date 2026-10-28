import React from 'react';
import logo from '../images/logo-header.png';

export default function Header() {
    return(
        <header className="app-header">
            <img src={logo} alt="Burger Queen" />
        </header>
        
    );
}