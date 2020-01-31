import React, { useState, useEffect } from 'react';
import {Link} from 'react-router-dom';
import { db } from '../utils/firebaseUtils';
import Button from '../Components/Button'; 
import H1 from '../Components/H1'
import CardKitchen from '../Components/CardKitchen';
import Header from '../Components/Header';

export default function Kitchen(){
  const [order, setOrder] = useState([]);

  useEffect(() => { 
    db
      .collection('order')
      .orderBy('time')
      .get().then((doc => {
        const dataMenu = doc.docs.map(snap => ({
          id:snap.id,
          ...snap.data()
        }));
        setOrder(dataMenu);
      }))
    
    }, [])

    const changeStatus = (item) => {
      item.status = 'pronto' ;
      db
        .collection('order')
        .doc(item.id)
        .update({
          status:'pronto',
          newtime: new Date().toLocaleString('pt-BR'),
          newTimeOrder: new Date().getTime()
      
        }
        ).then(
          setOrder([...order])
        )
  }  
     
  return(
    
    <div>    
      <div> 
        <Header></Header>
        <H1 className='request-title' title='PEDIDOS PENDENTES'/>            
      </div>

      <div className='container-card-kitchen'>
      {order.map((doc) => {
          if(doc.status === "pendente"){
              return (
                <>
                <CardKitchen
                  {...doc}
                  handleClick={()=> changeStatus(doc)}
                />
                </>
              )

          }
      })}
      </div>

      <div>
        <Link to='/'><Button title = {'Voltar'} className={'btn-back-kitchen'}/></Link>
        
      </div>
    </div>
    
  );
}

