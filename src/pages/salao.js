import React, { useState, useEffect} from 'react';
import {Link} from 'react-router-dom';
import { db } from '../utils/firebaseUtils';
import Input from '../Components/Input';
import Button from '../Components/Button';
import salao from './salao.css';
import Card from '../Components/Card';
import CardOrder from '../Components/CardOrder';
import swal from 'sweetalert';

function Hall() {
  const [data, setData] = useState([]);

  const [menu, setMenu] = useState([]);

  const [items, setItems] = useState([]);

  const [client, setClient] = useState('');

  const [table, setTable] = useState('');
  
  const [order, setOrder]=useState([]); // ordem 

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
  const lunchDinner = data.filter((item) => !item.isBreakfast);
  
  const addItems = (item) => {
    
    setOrder([...order,item])// ta add item à variável 
    console.log(item.name)

    const index= order.findIndex(orderItem => orderItem.name === item.name )
    if(index === -1){
      setOrder([...order, {...item, amount:1}])
    }else{
      order[index].amount += 1
      setOrder([...order])
    }
}

  const total = order.reduce((acc, item)=>{
    return acc + (item.price *item.amount);
  },0)

  // const clientName = useRef();
  // const tableNumber = useRef();

  const submit = () => {
    // const client = clientName.current.value;
    // const table = tableNumber.current.value;
    db.collection('order')
    .add({
     client,
     table,
     order,
    //  status,
    //  total,
     time: new Date().toLocaleString('pt-BR'),
     timeOfPrepare: new Date().getTime()
    })
    .then(
    swal ( " Pedido enviado com sucesso! " , " Quando estiver pronto você será notificado. " , "success" ),
    setClient(''),
    setTable(''),
    setOrder([])
    )}

  return (
    <div class='hall'>
      <div class='choice'>  
        <Button title = {'CAFÉ'} id={'breakfast'} className={'btn-coffee'} handleClick={()=> setMenu([...breakfast])}/>
        <Button title = {'HAMBURGUERIA'} id={'lunch'} className={'btn-burger'} handleClick={()=> setMenu([...lunchDinner])}/>

    </div>  
    <>
      <div class='menu'>
        <div class='items-box'>
          <div class='item'>

          <h2 class='title-menu'>MENU</h2>

              
                {
                  menu.map((item) => 
                  <>
                    {/* {console.log('karine', item)} */}
                    

                     <Card 
                        // title={item.name.replace(/"/g, '') + ' '} 
                        className={'btn-card'} 
                        handleClick={()=> addItems(item)}
                        {...item}
                          // addtitle={'  R$ ' + item.price}  
                           
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
                  <Input value={table} type="number" className={'input-table'} />
                  <label class='label-name'>CLIENTE: </label>
                  <Input value={client} type="text" className={'input-name'}/>
                </div> 
                <div className={'title-order'}>
                          
                </div> 
                {
                  order.map((product,index) => 
                  <>
                  <CardOrder
                    amount={product.amount}
                    {...product}
                    // key={index}
                    // amount={product.amount}
                    // price={product.price}
                    // item={product}
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
        <Link to='/'><Button title = {'Voltar'} className={'btn-back'}/></Link>
        
        <Button title = {'Enviar'} className={'btn-submit'} handleClick={() => submit()}/>

      </div>
    </div>

  ); 
  }


export default Hall;
