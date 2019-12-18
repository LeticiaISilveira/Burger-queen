import React, { useState, useEffect } from 'react';
import {Link} from 'react-router-dom';
import { firebaseDatabase } from '../utils/firebaseUtils';
import salao from './salao.css';

function Menu () {
  
  const [menu, setMenu] = useState([]);

  useEffect(() => {


    firebaseDatabase.collection('breakfast')
     .get().then((doc => {
       const teste = doc.docs.map((snap) => ({
         ...snap.data()
 
       }))
       console.log(teste)
       setMenu(teste)
     }))
     return
  }, [])
     
  
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
                  <>
                  <button>
                    <div>{item.name}</div>
                    <div>{item.price}</div>
                  </button>
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
        <button type='image'>
          <Link to='/'>Voltar</Link>
        </button>
        <button class='btn-submit'>
            ENVIAR
        </button>
      </div>
    </div>


    // <>
    // <h1 style={{color:'white'}}>Menu</h1>
    // {
    //   menu.map((item) => 
    //   <>
    //   <button>
    //     <div>{item.name}</div>
    //     <div>{item.price}</div>
    //   </button>
    //   </>
    // )
    // } 
    //   <button type='image'>
    //     <Link to='/'>Voltar</Link>
    //   </button>
    // </>
  ); 
  }

export default Menu;