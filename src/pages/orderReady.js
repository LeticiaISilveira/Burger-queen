import React, { useState, useEffect } from 'react';
import {Link} from 'react-router-dom';
import { db } from '../utils/firebaseUtils';
import Button from '../Components/Button'; 
import button from '../Components/button.css';
import CardDelivered from '../Components/CardDelivered';
import CardReady from '../Components/CardReady';

export default function OrderReady(){
    const [data, setData] = useState([]);
    const [order, setOrder]=useState([]);

    useEffect(() =>{
    setOrder([...ready])
    }, [data])

    useEffect(() => { 
    db
    .collection('order')
    .get().then((doc => {
        const dataOrder = doc.docs.map((snap) => ({
        id:snap.id,
        ...snap.data()

        }));
        setData(dataOrder);
    }))

    }, [])

  const ready = data.filter((item) => item.status === 'pronto');
  const delivered = data.filter((item) => item.status === 'entregue');

    const changeStatus = (item) => {
      item.status = 'entregue' ;
      db
        .collection('order')
        .doc(item.id)
        .update({
          status:'entregue',
          deliveredTime: new Date().toLocaleString('pt-BR'),
      
        }
        ).then(
          setOrder([...order])
        )
  }  
     
  return(
    
    <div>   
        <div class='choice-order'>  
            <Button title = {'PRONTOS'} id={'ready'} className={'choice-ready'} handleClick={()=> setOrder([...ready])}/>
            <Button title = {'ENTREGUES'} id={'delivered'} className={'choice-delivered'} handleClick={()=> setOrder([...delivered])}/>
        </div> 

      <div className='container-card-kitchen'>
      {order.map((doc) => {
          if(doc.status === "pronto"){
              return (
                <>
                <CardReady
                  {...doc}
                  handleClick={()=> changeStatus(doc)}
                /> 
                </>
              )

          } if(doc.status === "entregue"){
            return (
              <>
              <CardDelivered
                {...doc}                
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

