import React, { useState, useEffect } from 'react';
import {Link} from 'react-router-dom';
import { firebaseDatabase } from '../utils/firebaseUtils';
import button from '../Components/button.css';
import Button from '../Components/Button';
import salao from './salao.css';
import Card from '../Components/Card';
// import Input from '../Components/Input';



function Menu () {
  
  const [menu, setMenu] = useState([]);  // 

  useEffect(() => { //no contexto desse projeto o use efect espera a tela renderizar para prosseguir o código q está dentro - assincronia

    firebaseDatabase.collection('breakfast')
     .get().then((doc => {
       const dataMenu = doc.docs.map((snap) => ({
         ...snap.data()
 
       }))
       setMenu(dataMenu)
     }))
     return
  }, [])
    
  return (
    <div class='hall'>
      <div class='choice'>
        <h2 class='coffee'>CAFE</h2>
        <div class="switch__container">
          <input id="switch-shadow" class="switch switch--shadow" type="checkbox"/>
          <label for="switch-shadow"></label>
        </div>
        <h2 class='burger-shop'>HAMBURGUERIA </h2>

      </div>

      <div class='menu'>
          <div class='items-box'>
            <div class='item'>

            <h1 style={{color:'white'}}>Menu</h1>

              <>
                {
                  menu.map((item) => 
                  //<MenuCard name={menuItem.name} price={menuItem.price} handleClick={()}

                  //<Button name={menuItem.name} price={menuItem.price}>
                  <>
                  {/* <button>name={item.name} price={item.price} </button> */}

                  <Card title={item.name} addtitle={item.price} className={'btn-card'}/>
                  </>
                )
                } 

              </>
                      
            </div>            
          </div> 

          <div class='order-box'>
            <div class='order'></div>
          </div>
      </div>
      <div class='submit'>
        {/* <button>
          <Link to='/'>Voltar</Link>
        </button>
        <button class='btn-submit'>
            ENVIAR
        </button> */}
  
        {/* <Button title='Voltar' Link to='/'/> */}
        {/* <Button name='Enviar' Link to='/'/> */}
      </div>
    </div>

 
//     return (
//       <>
//       <h1 style={{color:'white'}}>Menu</h1>
//       {
//         menu.map((item) => 
//         <>
//         <button>
//           <div>{item.name}</div>
//           <div>{item.price}</div>
//         </button>
//         </>
//       )
//       } 
//         <button type='image'>
//            <Link to='/'>Voltar</Link>
//         </button>
//       </>
//     ); 
// }

  ); 
  }

export default Menu;