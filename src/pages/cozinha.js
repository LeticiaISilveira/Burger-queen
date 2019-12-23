import React, { useState, useEffect } from 'react';
import {Link} from 'react-router-dom';
import Button from '../Components/Button'; 
import button from '../Components/button.css';

function Pedidos() {

    return (
    <div>
        <h1 style={{color:'white'}}>PEDIDOS</h1>

       <Link to='/'>{Button ({title: 'Voltar'}) }</Link>

       {/* <button>
          <Link to='/'>Voltar</Link>
        </button> */}

    </div>
  
  );
}

export default Pedidos