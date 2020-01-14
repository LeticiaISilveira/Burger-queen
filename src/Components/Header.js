import React from 'react';
import logo from '../images/logo-header.png';

function Header() {
    return(
        <header id="logo"> <img src={logo} alt="" style={{width:250}}></img></header>
        
    );
}


export default Header;