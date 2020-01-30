import React, { useState, useEffect,useRef} from 'react';
import {Link} from 'react-router-dom';
import { db } from '../utils/firebaseUtils';
import Input from '../Components/Input';
import Button from '../Components/Button';
import salao from './pages.css';
import Card from '../Components/Card';
import CardOrder from '../Components/CardOrder';
import swal from 'sweetalert';
import Header from '../Components/Header';

export default function Hall() {

  const [data, setData] = useState([]);
  const [menu, setMenu] = useState([]);
  const [order, setOrder]=useState([]);

 useEffect(() =>{
  setMenu([...breakfast])
 }, [data])

 useEffect(() => { 
  db
    .collection('menu')
    .get().then((doc => {
       const dataMenu = doc.docs.map((snap) => ({
         ...snap.data()
 
       }));
       setData(dataMenu);
     }))
  
  }, [])

  const breakfast = data.filter((item) => item.isBreakfast);
  const burgerShop = data.filter((item) => !item.isBreakfast);
  
  const  increaseItem = item => {
    
    setOrder([...order,item]) 
    const index= order.findIndex(orderItem => orderItem.name === item.name )

    if(index === -1){
      setOrder([...order, {...item, amount:1}])
    }else{
      order[index].amount += 1
      setOrder([...order])
    }
}

  const decreaseItem = item => { 
    item.amount -= 1
    const filterDelete = order.filter(orderItem => orderItem.amount > 0);
    setOrder([...filterDelete])
  };

  const total = order.reduce((acc, item) => {
    return acc + (item.price *item.amount);
  },0)

  const clientName = useRef();
  const tableNumber = useRef();

  const submit = () => {
    const client = clientName.current.value;
    const table = tableNumber.current.value;

    db.collection('order')
    .add({
     client,
     table,
     order,
    status:'pendente',
    total,
     time: new Date().toLocaleString('pt-BR'),
     timeOrder: new Date().getTime()
    })
    .then(
    swal ( " Pedido enviado com sucesso! " , "  " , "success" ),
    setOrder([]),
    clientName.current.value = '',
    tableNumber.current.value = ''
    )}

  return (
    <div class='hall'>
    <Header></Header>
    <Link to='/pedidosprontos'><Button title = {'Ver Pedidos Prontos'} className={'btn-ready'}/></Link>
      <div class='choice'>  
        <Button title = {'CAFÉ'} id={'breakfast'} className={'btn-coffee'} handleClick={()=> setMenu([...breakfast])}/>
        <Button title = {'HAMBURGUERIA'} id={'lunch'} className={'btn-burger'} handleClick={()=> setMenu([...burgerShop])}/>
      </div>  
    <>
      <div class='menu'>
        <div class='items-box'>
          <div class='item'>

          <h2 class='title-menu'>MENU</h2>

                {
                  menu.map((item) => 
                 <>             
                     <Card 
                        className={'btn-card'} 
                        handleClick={()=>  increaseItem(item)}
                        {...item}
                                                    
                    />              
                  </>
                )
                }            
                      
            </div>            
          </div> 

          <div class='order-box'>
            <div class='order'>
                <div class='data-order'>
                  <label>MESA: </label>
                  <Input value={tableNumber} type="number" className={'input-table'} />
                  <label class='label-name'>CLIENTE: </label>
                  <Input value={clientName} type="text" className={'input-name'}/>
                </div> 
                <div className={'title-order'}>
                  <h2>Qde:</h2>
                  <h2>Item:</h2>
                  <h2>R$:</h2>
                  <h2>+</h2>
                  <h2>-</h2>
                </div> 
                {
                  order.map((product) => 
                  <>
                  <CardOrder className={'card-order'}
                    amount={product.amount}
                    {...product}
                    handleClickInc={()=> increaseItem(product)}
                    handleClickDec={()=> decreaseItem(product)}
                  />                
                  </>
                )              
                }
                <div className={'total-order'}>
                  <h1>Total:{' '}{ total},00 </h1>
                  <input className={'total'}></input>

                </div>
                
            </div>
          </div>
          
      </div>
      </>
      <div class='submit'>
      
        <Link to='/'><Button title = {'Voltar'} className={'btn-back-kitchen'}/></Link>
        <Button title = {'Enviar'} className={'btn-submit'} handleClick={() => submit()}/>

      </div>
    </div>

  ); 
  }
