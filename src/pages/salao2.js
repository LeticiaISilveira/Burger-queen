import React, { useState, useEffect, useRef} from 'react';
import {Link} from 'react-router-dom';
import { db } from '../utils/firebaseUtils';
import Input from '../Components/Input';
import Button from '../Components/Button';
import salao from './salao.css';
import Card from '../Components/Card';
import swal from 'sweetalert';

function Hall() {
  const [menu, setMenu] = useState([])
  const [menuList, setMenuList] = useState([])
  const [option, setOption] = useState('');

  const [addItems, setAddItems] = useState(0);

  const [items, setItems] = useState([]);
  const [client, setClient] = useState('');
  const [table, setTable] = useState('');

  // repositories.filter(repo => repo.favorite);

 useEffect(() => {
  db
    .collection('menu')
    .get().then((doc => {
       const dataMenu = doc.docs.map((snap) => ({
         ...snap.data()
 
       }));

       setMenuList(dataMenu);
       setMenu(dataMenu);
     }))
  
  }, [])


  useEffect(() => {
    document.title = `Você clicou ${addItems} vezes no item ${items.name}`;
  })

  function optionMenu(e){
    const buttonOption = e.currentTarget.id;  
    if (buttonOption === "breakfast") {
    const breakfast = menuList.filter((item) => item.isBreakfast);
      setMenu(breakfast)
    } else {
    const lunchDinner = menuList.filter((item) => !item.isBreakfast);
      setMenu(lunchDinner)
    }
  }

  // const clientName = useRef();
  // const tableNumber = useRef();

  
  const submit = () => {
    // const client = clientName.current.value;
    // const table = tableNumber.current.value;
    db.collection('order')
    .add({
     client,
     table,
    //  amount,
     items,
     time: new Date().toLocaleString('pt-BR'),
    })
    .then(() =>
    setClient(''),
    setTable(''),
    setItems([]),
    swal ( " Pedido enviado com sucesso! " , " Quando estiver pronto você será notificado. " , "success" )
    )}

  return (
    <div class='hall'>
      <div class='choice'>  
        <Button title = {'CAFÉ'} id={'breakfast'} className={'btn-coffee'} handleClick={optionMenu}/>
        <Button title = {'HAMBURGUERIA'} id={'lunch'} className={'btn-burger'} handleClick={optionMenu}/>

    </div>  

      <div class='menu'>
        <div class='items-box'>
          <div class='item'>

          <h2 class='title-menu'>MENU</h2>

              <>
                {
                  menu.map((item) => 
                  <>
                    <Card title={item.name.replace(/"/g, '') + ' '} addtitle={'  R$ ' + item.price}  className={'btn-card'} handleClick={() => setAddItems()}
                    />
                    <Card title={item.name}/>

                    
                  </>
                )
                } 

              </>
              
                      
            </div>            
          </div> 

          <div class='order-box'>
            <div class='order'>
                <div class='data-order'>
                  <label>MESA: </label>
                  <Input value={tableNumber} type="number" className={'input-table'}/>
                  <label class='label-name'>CLIENTE: </label>
                  <Input value={clientName} type="text" className={'input-name'}/>
                </div> 
                <div className={'title-order'}>
                  <h2>Qde:</h2>
                  <h2>Item:</h2>
                  <h2>R$:</h2>
                  <h2> </h2>             
                </div> 
                <div className={'items-order'}>

                {
                  menu.map((item) => 
                  <>
                    <p className={'amount-input'} title={item.name}>qde</p>
                    
                   <p>teste</p>
                  </>
                )
                } 
     
    
            
                  <p className={'item-input'}></p>
                  <p className={'price-input'}></p>
                <button>Apagar</button>

                </div>
                <div className={'total-order'}>
                  <h1>Total: </h1>
                  <input className={'total'}></input>

                </div>
            
            </div>
          </div>
      </div>
      <div class='submit'>
        <Link to='/'><Button title = {'Voltar'} className={'btn-back'}/></Link>
        
        <Button title = {'Enviar'} className={'btn-submit'} handleClick={() => submit()}/>

      </div>
    </div>

  ); 
  }


export default Hall;
