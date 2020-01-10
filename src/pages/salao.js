import React, { useState, useEffect, useRef} from 'react';
import {Link} from 'react-router-dom';
import { firebaseDatabase } from '../utils/firebaseUtils';
import button from '../Components/button.css';
import Button from '../Components/Button';
import salao from './salao.css';
import Card from '../Components/Card';
import swal from 'sweetalert';
// import Input from '../Components/Input';



function Hall() {

  const [menu, setMenu] = useState([])
  const [breakfast, setBreakfast] = useState([]);
  const [drinks, setDrinks] = useState([]);
  const [request, setRequest] = useState([])



 useEffect(() => { //no contexto desse projeto o use efect espera a tela renderizar para prosseguir o código q está dentro - assincronia

    firebaseDatabase.collection('breakfast')
     .get().then((doc => {
       const dataMenu = doc.docs.map((snap) => ({
         ...snap.data()
 
       }))
       setMenu(dataMenu)
     }))
      
    // firebaseDatabase.collection('drinks')
    //  .get().then((doc => {
    //    const dataMenu = doc.docs.map((snap) => ({
    //      ...snap.data()
 
    //    }))
    //    setMenu(dataMenu)
    //  }))
     return
  }, [])
 
  const handleRequest = (item) => {
          setRequest([...request, item])
      }


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

          <h2 class='title-menu'>MENU</h2>

              <>
                {
                  menu.map((item) => 
                  
                  <>
                
                    <Card title={item.name.replace(/\"/g, '') + ' '} addtitle={'  R$ ' + item.price}  className={'btn-card'} handleClick={() => request(item)}/>
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




function Submit(){
  const [count, setCount] = useState(0)

   useEffect(() => {
    // Atualiza o titulo do documento usando a API do browser
    document.title =  swal ( " Pedido enviado com sucesso! " , " Quando tiver pronto nóis te fala. " , "success" ) ;
  });
 
  return(
    
    <div>
      <p>You clicked {count} times </p>
      
      <button onClick={() => setCount(count + 1)}> 
      [Enviar Pedido] Quando clicar, enviar lista para a cozinha o que efeito colateral, incorporar esse swal
      </button>
    </div>
  );
}


// export default Hall;
export default Submit;